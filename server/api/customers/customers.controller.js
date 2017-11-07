'use strict';

function makeCustomersController(deps) {
  const {
    errorService,
    responsesService,
    customersService,
    customersResponses
  } = deps;

  return {
    async filter(request, reply) {
      try {
        customersService.filter(request.query);
        let response = responsesService.createResponseData(customersResponses.filter_ok);
        return reply(response.body).code(response.statusCode);
      } catch (error) {
        let response = errorService.createGeneralError(error);
        return reply(response.body).code(response.statusCode);
      }
    },

    async show(request, reply) {
      try {
        customersService.show({ customer: request.params.customerId });
        let response = responsesService.createResponseData(customersResponses.show_ok);
        return reply(response.body).code(response.statusCode);
      } catch (error) {
        let response = errorService.createGeneralError(error);
        return reply(response.body).code(response.statusCode);
      }
    }
  };
}

module.exports = makeCustomersController;
