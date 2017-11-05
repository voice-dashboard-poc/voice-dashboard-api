'use strict';

const Joi = require('joi');

exports.validateSchema = function(data) {
  return new Promise((resolve, reject) => {
    Joi.validate(data.payload, data.schema, (err, val) => {
      if (err) {
        let customErr, error;
        if (err.details[0].context.key && err.details[0].context.key.indexOf('||') !== -1) {
          customErr = err.details[0].context.key.split('||');
          error = {
            message: customErr[0],
            code: customErr[1],
            statusCode: 400
          };
        } else {
          customErr = err.details[0].message;
          error = {
            message: customErr.replace(new RegExp('\"', 'g'), ''),
            code: '40001',
            statusCode: 400
          };
        }
        return reject(error);
      } else {
        data.rawPayload = data.payload;
        data.payload = val;
        return resolve(data);
      }
    });
  });
};