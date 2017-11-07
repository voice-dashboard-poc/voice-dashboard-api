'use strict';

// All configurations will extend these options
// ============================================
const all = {
  host: 'localhost',
  appName: 'poc:voice-api',

  env: process.env.NODE_ENV,

  routes: {
    prefix: '/voice-api'
  },

  modules: ['logs', 'customers', 'budget']

};

// Export the config object based on the DSHB_NODE_ENV
// ==============================================
module.exports = Object.assign(
  all,
  require('./' + process.env.NODE_ENV ) || {});
