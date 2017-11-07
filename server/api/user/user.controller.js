'use strict';

const userSchema = require('./schemas/user.schema');

function makeUserController(deps) {
  const {
    errorService,
    responsesService,
    userService,
    userResponses,
    schemaService
  } = deps;

  return {
    async login(request, reply) {
      try {
        await schemaService.validateSchema(request.params, userSchema);
        userService.login({ user: request.params.userId });
        let response = responsesService.createResponseData(userResponses.login_ok);
        return reply(response.body).code(response.statusCode);
      } catch (error) {
        let response = errorService.createGeneralError(error);
        return reply(response.body).code(response.statusCode);
      }
    },

    async logout(request, reply) {
      try {
        await schemaService.validateSchema(request.params, userSchema);
        userService.logout({ user: request.params.userId });
        let response = responsesService.createResponseData(userResponses.logout_ok);
        return reply(response.body).code(response.statusCode);
      } catch (error) {
        let response = errorService.createGeneralError(error);
        return reply(response.body).code(response.statusCode);
      }
    }
  };
}

module.exports = makeUserController;
