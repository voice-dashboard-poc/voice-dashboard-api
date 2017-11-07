'use strict';

const joi = require('joi');
const config = require('./../../../config/environment');

module.exports = joi.object().keys({
  userId: joi.string().valid(config.users.allowed).insensitive().required()
});
