'use strict';

function makeModuleService(deps) {
  const {
    socketService,
    GlobalService
  } = deps;
  return {
    open({module}) {
      socketService.broadcastMessage('module', {
        action: 'open',
        data: {
          module: module
        }
      });
      GlobalService.setConfigValue('activeModule', module);
    },

    close() {
      socketService.broadcastMessage('module', {
        action: 'close'
      });
      GlobalService.setConfigValue('activeModule', null);
    },
  };
}

module.exports = makeModuleService;
