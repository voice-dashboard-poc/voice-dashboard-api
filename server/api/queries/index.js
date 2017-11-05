'use strict';

module.exports = function(server, container) {
  server.route({
    method: 'GET',
    path: '/query/{daoMethod}',
    handler: container.resolve('queriesController').fetchQuery
  });

  server.route({
    method: 'POST',
    path: '/dash/{screenId}',
    handler: container.resolve('queriesController').switchScreen
  });

};
