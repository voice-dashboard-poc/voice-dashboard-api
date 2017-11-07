'use strict';

function makeBudgetService(deps) {
  const {
    socketService
  } = deps;
  return {
    filter(params) {
      socketService.broadcastMessage('budget', {
        action: 'filter',
        data: {
          params: params
        }
      });
    },
  };
}

module.exports = makeBudgetService;
