'use strict';

module.exports = (server, container) => {
  const logsController = container.resolve('logsController');

  server.route({
    method: 'GET',
    path: '/logs/filter',
    handler: logsController.filter
  });

};
