'use strict';

function makeQueriesController({
  errorService,
  responsesService,
  queriesService,
  queriesResponses,
  socketService
}) {
  return {
    async fetchQuery(request, reply) {
      try {
        let result = await queriesService.getQueryResult({ method: request.params.daoMethod, params: request.query});
        let response = responsesService.createResponseData(
          queriesResponses.get_result_ok,
          { result }
        );
        reply(response.body).code(response.statusCode);
      } catch (error) {
        let response = errorService.createGeneralError(error);
        reply(response.body).code(response.statusCode);
      }
    },
    async switchScreen(request, reply) {
      socketService.broadcastMessage('fullscreen', { id: request.params.screenId });
      return reply({}).code(200);
    }
  };
}

module.exports = makeQueriesController;
