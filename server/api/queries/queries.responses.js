'use strict';


function makeQueriesResponses({ responsesService }) {
  return {
    get_result_ok: responsesService.createInternalResponse(200, 'QRY000', 'Query result successfully returned'),
  };
}

module.exports = makeQueriesResponses;
