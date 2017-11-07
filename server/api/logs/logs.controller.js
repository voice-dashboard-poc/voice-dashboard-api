'use strict';

function makeLogsController(deps) {
  const {
    errorService,
    responsesService,
    logsService,
    logsResponses
  } = deps;

  return {
    async filter(request, reply) {
      try {
        logsService.filter(request.query);
        let response = responsesService.createResponseData(logsResponses.filter_ok);
        return reply(response.body).code(response.statusCode);
      } catch (error) {
        let response = errorService.createGeneralError(error);
        return reply(response.body).code(response.statusCode);
      }
    }
  };
}

module.exports = makeLogsController;
