'use strict';


function makeUserResponses({ responsesService }) {
  return {
    login_ok: responsesService.createInternalResponse(200, 'USR000', 'User identified successfully'),
    logout_ok: responsesService.createInternalResponse(200, 'USR001', 'User logged out successfully'),
  };
}

module.exports = makeUserResponses;
