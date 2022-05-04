const logger = require('../modules/nodeLogger.js')
module.exports = async (client, server) => {
  // Check if channels are defined
  if (!server.StatusChannId || !server.CategoryId) return
  if (!server.pinger) return
  if (!server.checker) {
    server.checker = {
      channel: {
        status: 'offline',
        members: '0'
      },
      notification: {
        status: 'offline',
        members: '0'
      }
    }
    return server.save()
  } else if (!server.checker.channel) {
    server.checker['channel'] = {
      status: 'offline',
      members: '0'
    }
    return server.save()
  }
  //channel status does not match pinner value
  if (server.checker.channel.status !== server.pinger.status) {
    const statsChann = await client.channels.cache.get(server.StatusChannId)
    //check if online or offline
    if (statsChann !== undefined) {
      if (server.pinger.status == 'online') {
        statsChann.setName('🟢 ONLINE').catch((e) => logger.warn('Error in cahannupd:' + e))
        server.checker.channel.status = 'online'
        console.log('settinv chan online')
      } else if (server.pinger.status == 'offline') {
        statsChann.setName('🔴 OFFLINE').catch((e) => logger.warn('Error in cahannupd:' + e))
        server.checker.channel.status = 'offline'
      }
    }
  }
  if (server.MemberChannEnabled) {
    if (server.checker.channel.members !== server.pinger.members) {
      const chann = client.channels.cache.get(server.NumberChannId)
      if (chann !== undefined) {
        chann.permissionOverwrites.edit(chann.guild.roles.everyone, { VIEW_CHANNEL: true }).catch((e) => logger.warn('Error in cahannupd:' + e))
        await chann.setName(`👥 Players online: ${server.pinger.members}`).catch((e) => logger.warn('Error in cahannupd:' + e))
        server.checker.channel.members = server.pinger.members
      }
    }
  }
  server.save()
}
