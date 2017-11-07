'use strict';

function makeCustomersService(deps) {
  const {
    socketService
  } = deps;
  return {
    filter(params) {
      socketService.broadcastMessage('customers', {
        action: 'filter',
        data: {
          params: params
        }
      });
    },

    show({customer}) {
      socketService.broadcastMessage('customers', {
        action: 'show',
        data: {
          customer: customer
        }
      });
    },
  };
}

module.exports = makeCustomersService;
