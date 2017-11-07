'use strict';


function makeLogsResponses({ responsesService }) {
  return {
    filter_ok: responsesService.createInternalResponse(200, 'LOG000', 'Logs filtered successfully'),
  };
}

module.exports = makeLogsResponses;
