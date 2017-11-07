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

// user entity
const makeUserController = require('./user/user.controller');
const makeUserService = require('./user/user.service');
const makeUserResponses = require('./user/user.responses');
const UserEntity = require('./user/user.entity');

// module entity
const makeModuleController = require('./module/module.controller');
const makeModuleService = require('./module/module.service');
const makeModuleResponses = require('./module/module.responses');

// budget entity
const makeBudgetController = require('./budget/budget.controller');
const makeBudgetService = require('./budget/budget.service');
const makeBudgetResponses = require('./budget/budget.responses');

// customers entity
const makeCustomersController = require('./customers/customers.controller');
const makeCustomersService = require('./customers/customers.service');
const makeCustomersResponses = require('./customers/customers.responses');

// logs entity
const makeLogsController = require('./logs/logs.controller');
const makeLogsService = require('./logs/logs.service');
const makeLogsResponses = require('./logs/logs.responses');

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

  // user entity
  userController: asFunction(makeUserController).singleton(),
  userService: asFunction(makeUserService).singleton(),
  userResponses: asFunction(makeUserResponses).singleton(),
  UserEntity: asFunction(instantiateEntityWithDependencies(UserEntity)).singleton(),

  // module entity
  moduleController: asFunction(makeModuleController).singleton(),
  moduleService: asFunction(makeModuleService).singleton(),
  moduleResponses: asFunction(makeModuleResponses).singleton(),

  // budget entity
  budgetController: asFunction(makeBudgetController).singleton(),
  budgetService: asFunction(makeBudgetService).singleton(),
  budgetResponses: asFunction(makeBudgetResponses).singleton(),

  // customers entity
  customersController: asFunction(makeCustomersController).singleton(),
  customersService: asFunction(makeCustomersService).singleton(),
  customersResponses: asFunction(makeCustomersResponses).singleton(),

  // logs entity
  logsController: asFunction(makeLogsController).singleton(),
  logsService: asFunction(makeLogsService).singleton(),
  logsResponses: asFunction(makeLogsResponses).singleton(),

});

function instantiateEntityWithDependencies(entity) {
  return (deps) => (...args) => new entity(deps, ...args);
}

module.exports = container;
