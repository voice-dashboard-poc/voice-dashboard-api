'use strict';

class SocketService {
  constructor(deps) {
    const {
      WebSocket
    } = deps;
    this.socket = WebSocket;
  }

  startServer({port}) {
    this.socketInstance = new this.socket.Server({ port: port });
    console.log('Started socket server on port', port);
    this._setConnection();
  }

  _setConnection() {
    this.socketInstance.on('connection', (ws) => {
      ws.on('message', (message) => {
        console.log('received: %s', message);
      });
    });
  }

  broadcastMessage(event, payload) {
    this.socketInstance.clients.forEach((client) => {
      if (client.readyState === this.socket.OPEN) {
        client.send(JSON.stringify({event: event, payload: payload}));
      }
    });
  }
}

module.exports = SocketService;
