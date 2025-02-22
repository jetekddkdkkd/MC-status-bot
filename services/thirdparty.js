const axios = require('axios');
const globals = require('../globals');
const logger = require('../modules/nodeLogger');

module.exports = () => {
    axios.get('https://data.iana.org/TLD/tlds-alpha-by-domain.txt', {
        headers: { 'User-Agent': 'mcstatus/2.3 the minecraft status bot software' }
    }).then((res) => {
        let arr = res.data.toLowerCase().split('\n').filter((el) => !el.startsWith('#'));
        globals.setTLDList(arr);
        logger.info('fetched tld list');
    }).catch((err) => {
        logger.warn('could not fetch tlds domain validation will be off');
        //console.log(err);
    })
}