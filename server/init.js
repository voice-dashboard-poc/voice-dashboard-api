'use strict';

const config = require('./config/environment/');
const app = require('./app.js');

function appInit(deps) {
  const {
    socketService
  } = deps;

  app.init().then(server => {
    socketService.startServer({port: config.socket_port});
    console.log('Server running at', server.info.uri);
  }, err => {
    console.log('Server start error',  err);
  });
}

module.exports = appInit;
