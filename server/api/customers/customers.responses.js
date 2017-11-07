'use strict';


function makeCustomerResponses({ responsesService }) {
  return {
    filter_ok: responsesService.createInternalResponse(200, 'CUS000', 'Customers filtered successfully'),
    show_ok: responsesService.createInternalResponse(200, 'CUS001', 'Customer details shown successfully'),
  };
}

module.exports = makeCustomerResponses;
