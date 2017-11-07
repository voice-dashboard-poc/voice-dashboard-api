'use strict';

module.exports = (server, container) => {
  const moduleController = container.resolve('moduleController');

  server.route({
    method: 'POST',
    path: '/module/{moduleId}/open',
    handler: moduleController.open
  });

  server.route({
    method: 'POST',
    path: '/module/{moduleId}/close',
    handler: moduleController.close
  });

};
