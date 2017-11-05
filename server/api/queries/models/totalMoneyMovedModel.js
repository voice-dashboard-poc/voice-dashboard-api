'use strict';

function totalMoneyMoved(response) {
  return response.reduce((fullObject, currency) => {
    fullObject[currency._id] = currency.total;
    return fullObject;
  }, {});
}

module.exports = totalMoneyMoved;
