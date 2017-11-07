'use strict';

function makeLogsService(deps) {
  const {
    socketService
  } = deps;
  return {
    filter(params) {
      socketService.broadcastMessage('logs', {
        action: 'filter',
        data: {
          params: params
        }
      });
    },
  };
}

module.exports = makeLogsService;
