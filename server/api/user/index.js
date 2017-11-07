'use strict';

module.exports = (server, container) => {
  const userController = container.resolve('userController');

  server.route({
    method: 'PUT',
    path: '/user/{userId}/login',
    handler: userController.login
  });

  server.route({
    method: 'PUT',
    path: '/user/{userId}/logout',
    handler: userController.logout
  });

};
