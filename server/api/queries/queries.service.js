'use strict';

function makeQueriesService({
  QueriesEntity,
  socketService
}) {
  return {
    async getQueryResult({method, params}) {
      try {
        let myQuery = QueriesEntity({method, params});
        await myQuery.executeMethod();
        return myQuery.getResult();
      } catch (error) {
        return error;
      }
    },
  };
}

module.exports = makeQueriesService;
