'use strict';

function makeUserService(deps) {
  const {
    socketService,
    GlobalService
  } = deps;
  return {
    login({user}) {
      socketService.broadcastMessage('user', {
        action: 'login',
        data: {
          user: user
        }
      });
      GlobalService.setConfigValue('activeUser', user);
    },

    logout() {
      socketService.broadcastMessage('user', {
        action: 'logout'
      });
      GlobalService.setConfigValue('activeUser', null);
    },
  };
}

module.exports = makeUserService;
