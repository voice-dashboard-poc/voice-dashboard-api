'use strict';

exports.createGeneralError = (err) => {

  return {
    statusCode: err.statusCode || 500,
    body: {
      result: {
        code: err.code || '50000',
        message: err.message
      }
    }
  };
};