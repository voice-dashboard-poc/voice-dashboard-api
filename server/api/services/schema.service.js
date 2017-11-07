'use strict';

const Joi = require('joi');

function createErrorResponse(err) {
  return {
    statusCode: 400,
    code: '4XX',
    message: err.message
  };
}

exports.validateSchema = (payload, schema) => {
  return new Promise((resolve, reject) => {
    Joi.validate(payload, schema, (err, val) => {
      if (err) {
        return reject(createErrorResponse(err));
      }
      return resolve(val);
    });
  });
};