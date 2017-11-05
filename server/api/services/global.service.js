'use strict';

const config = {};

exports.getConfigValue = (param) => {
  if(config[param]){
    return config[param];
  }
};

exports.setConfigValue = (param, value) => {
  config[param] = value;
  return config[param];
};

exports.getConfigList = () => {
  return config;
};