const util = require('util');
const mongoose = require('mongoose');
const User = require('../database/user');
const Log = require('../database/logSchema');
const logger = require('../modules/nodeLogger.js');
const Server = require('../database/ServerSchema');
const makeServer = require('../events/guildadd').addGuild;


const client = global.redisclient;
client.hget = util.promisify(client.hget);
client.hgetall = util.promisify(client.hgetall);

const exec = mongoose.Query.prototype.exec;

// Lookup function, Looks up redis,
// if the key is not in redis it fallbacks to mongo
module.exports = {
    async lookup(collection, key) {
        // collection can be 'server' or 'log'
        const cacheValue = await client.hget(collection, key);
        var result = null;
        if (cacheValue) {
            result = JSON.parse(cacheValue);
        }
        // Mongo fallback
        else {
            logger.info(`${key} just fellback to mongo while looking for the ${collection} collection!`);
            if (collection == 'log') {
                result = await Log.findOne({ _id: key });
                if (result != null) {
                    client.hset(collection, key, JSON.stringify(result));
                }
            } else if (collection == 'server') {
                result = await Server.findOne({ _id: key });
                //make doc if it does not exist in mongodb
                if (result == null) {
                    await makeServer(key);
                    result = await Server.findOne({ _id: key });
                }
                client.hset(collection, key, JSON.stringify(result));
            } else if (collection == 'user') {
                result = await User.findOne({ _id: key });
                if (result != null) {
                    client.hset(collection, key, JSON.stringify(result));
                }
            } else {
                logger.error(`${collection} is not a valid collection name - Log,user or Server!`);
                return;
            }
        }
        if (result !== null) {
            result['save'] = async function() {
                var mdbupdate
                if (collection == 'server') {
                    mdbupdate = await Server.findOne({ _id: key });
                } else if (collection == 'log') {
                    mdbupdate = await Log.findOne({ _id: key });
                } else if (collection == 'user') {
                    mdbupdate = await User.findOne({ _id: key });
                } else {
                    throw `${collection} is not a valid collection name!`;
                }
                for (const o in result) {
                    if (result.hasOwnProperty(o)) {
                        if (o !== 'save') {
                            mdbupdate[o] = result[o];
                            //console.log(`${o}: ${result[o]}`);
                        }
                    }
                }
                await mdbupdate.save();
                await client.hdel(collection, key);
                await client.hset(collection, key, JSON.stringify(mdbupdate));
                return true;
            }
        }
        return result;
    },

    // Create a Redis cache document
    async create(collection, key, value) {
        client.hset(collection, key, JSON.stringify(value));
    },

    // Remove document from redis
    // collection has to be 'server' or 'log'
    removeCache(collection, key) {
        client.hdel(collection, key);
    },

    // Get all values and kays from collection
    // This returns the same array that mongo does.
    async getallCache(collection) {
        const all = await client.hgetall(collection);

        const map = new Map(Object.entries(all)); // Convert to map
        const res = [];
        map.forEach(function callbackFn(value, key) {
            const json = JSON.parse(value);
            json._id = key;
            res.push(json);
        })
        return res;
    }
}

// Insert element in redis after ith as already been sent to mongo
// For this to work the new option needs to be set to true
mongoose.Query.prototype.cache = async function() {
    const result = await exec.apply(this, arguments);
    const key = JSON.stringify(this.getQuery()).replace(/[^0-9]/g, '');

    if (this.mongooseCollection.name == 'logs') {
        // Pass a empty array if the result is undefined
        if (!result) {
            await client.hset('log', key, '[]');
        } else {
            await client.hset('log', key, JSON.stringify(result.logs));
        }
        return;
    } else if (this.mongooseCollection.name == 'servers') {
        await client.hset('server', key, JSON.stringify(result));
        return;
    } else {
        logger.error(`${this.mongooseCollection.name} is not a valid collection name!`);
        return;
    }
}