'use strict';


function makeModuleResponses({ responsesService }) {
  return {
    open_ok: responsesService.createInternalResponse(200, 'MOD000', 'Module opened successfully'),
    close_ok: responsesService.createInternalResponse(200, 'MOD001', 'Module closed successfully'),
  };
}

module.exports = makeModuleResponses;
