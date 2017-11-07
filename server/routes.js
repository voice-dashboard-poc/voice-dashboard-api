/**
 * Main application routes
 */

'use strict';

const container = require('./api/boot');

exports.register = function(server, options, next) {
  require('./api/user')(server, container);
  require('./api/module')(server, container);
  require('./api/budget')(server, container);
  require('./api/customers')(server, container);
  require('./api/logs')(server, container);
  next();
};

exports.register.attributes = {
  name: 'voice-api-routes',
  version: '1.0.0'
};
