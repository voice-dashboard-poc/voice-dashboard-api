'use strict';


function makeBudgetResponses({ responsesService }) {
  return {
    filter_ok: responsesService.createInternalResponse(200, 'BUD000', 'Budgets filtered successfully'),
  };
}

module.exports = makeBudgetResponses;
