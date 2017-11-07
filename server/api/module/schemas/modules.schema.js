'use strict';

const joi = require('joi');
const config = require('./../../../config/environment');

module.exports = joi.object().keys({
  moduleId: joi.string().valid(config.modules).insensitive().required()
});
