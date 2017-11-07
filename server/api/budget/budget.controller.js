'use strict';

function makeBudgetController(deps) {
  const {
    errorService,
    responsesService,
    budgetService,
    budgetResponses
  } = deps;

  return {
    async filter(request, reply) {
      try {
        budgetService.filter(request.query);
        let response = responsesService.createResponseData(budgetResponses.filter_ok);
        return reply(response.body).code(response.statusCode);
      } catch (error) {
        let response = errorService.createGeneralError(error);
        return reply(response.body).code(response.statusCode);
      }
    }
  };
}

module.exports = makeBudgetController;
