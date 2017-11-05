'use strict';

const Hapi = require('hapi');
const config = require('./config/environment');

let server;
const setOptions = function () {
  const opts = {};
  opts.routes = {prefix: config.routes.prefix};
  return opts;
};

const init = function () {
  return new Promise((resolve, reject) => {
    // Create a server with a host and port
    server = new Hapi.Server();
    server.connection({port: config.port, routes: {cors: true}});

    // Register the server and start the application
    server.register(
      [
        {register: require('./routes')}
      ],
      setOptions(),
      function (err) {
        if (err) {
          return reject(err);
        }
        server.start(function (err) {
          if (err) {
            return reject(err);
          }

          return resolve(server);
        });
      }
    );
  });
};

const stopServer = function() {
  return new Promise((resolve, reject) => {
    server.stop(function (err) {
      if (err) {
        return reject(err);
      }
      console.log('Server stopped');
      return resolve(server);
    });
  });
};

exports.init = init;
exports.stopServer = stopServer;
