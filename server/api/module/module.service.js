'use strict';

function makeModuleService(deps) {
  const {
    socketService,
    GlobalService
  } = deps;
  return {
    login({module}) {
      socketService.broadcastMessage('module', {
        action: 'open',
        data: {
          module: module
        }
      });
      GlobalService.setConfigValue('activeModule', module);
    },

    logout() {
      socketService.broadcastMessage('module', {
        action: 'close'
      });
      GlobalService.setConfigValue('activeModule', null);
    },
  };
}

module.exports = makeModuleService;
