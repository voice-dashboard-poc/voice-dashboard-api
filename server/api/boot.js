'use strict';

const { createContainer, asValue, asFunction, asClass } = require('awilix');
const container = createContainer();

// Init
const makeAppInit = require('./../init');

// Libraries
const WebSocket = require('ws');

// Services
const ErrorService = require('./services/errors.service');
const ResponsesService = require('./services/responses.service');
const SchemaService = require('./services/schema.service');
const SocketService = require('./services/socket.service');
const GlobalService = require('./services/global.service');

// queries entity
const makeQueriesController = require('./queries/queries.controller');
const makeQueriesService = require('./queries/queries.service');
const makeQueriesResponses = require('./queries/queries.responses');
const QueriesEntity = require('./queries/queries.entity');

container.register({
  // Libs
  WebSocket: asValue(WebSocket),

  // Initial
  appInit: asFunction(makeAppInit).singleton(),

  // config

  // services
  errorService: asFunction(() => ErrorService).singleton(),
  responsesService: asFunction(() => ResponsesService).singleton(),
  schemaService: asFunction(() => SchemaService).singleton(),
  socketService: asClass(SocketService).singleton(),
  GlobalService: asFunction(() => GlobalService).singleton(),

  // queries entity
  queriesController: asFunction(makeQueriesController).singleton(),
  queriesService: asFunction(makeQueriesService).singleton(),
  queriesResponses: asFunction(makeQueriesResponses).singleton(),
  QueriesEntity: asFunction(instantiateEntityWithDependencies(QueriesEntity)).singleton(),

});

function instantiateEntityWithDependencies(entity) {
  return (deps) => (...args) => new entity(deps, ...args);
}

module.exports = container;
