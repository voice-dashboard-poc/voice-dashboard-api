'use strict';

module.exports = (server, container) => {
  const budgetController = container.resolve('budgetController');

  server.route({
    method: 'GET',
    path: '/budget/filter',
    handler: budgetController.filter
  });


};
