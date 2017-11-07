'use strict';

const modulesSchema = require('./schemas/modules.schema');

function makeModuleController(deps) {
  const {
    errorService,
    responsesService,
    moduleService,
    moduleResponses,
    schemaService
  } = deps;

  return {
    async open(request, reply) {
      try {
        await schemaService.validateSchema(request.params, modulesSchema);
        moduleService.open({ module: request.params.moduleId });
        let response = responsesService.createResponseData(moduleResponses.open_ok);
        return reply(response.body).code(response.statusCode);
      } catch (error) {
        let response = errorService.createGeneralError(error);
        return reply(response.body).code(response.statusCode);
      }
    },

    async close(request, reply) {
      try {
        await schemaService.validateSchema(request.params, modulesSchema);
        moduleService.close({ module: request.params.moduleId });
        let response = responsesService.createResponseData(moduleResponses.close_ok);
        return reply(response.body).code(response.statusCode);
      } catch (error) {
        let response = errorService.createGeneralError(error);
        return reply(response.body).code(response.statusCode);
      }
    }
  };
}

module.exports = makeModuleController;
