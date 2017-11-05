'use strict';

const config = require('./../../config/environment');
const QueriesDAO = require('./queries.DAO');
const responseModels = {
  totalMoneyMoved: require('./models/totalMoneyMovedModel.js')
};


class QueriesEntity {

  constructor(deps, {method, params}) {
    this.repository = new QueriesDAO();
    this.responseModel = responseModels[method];
    this.method = method;
    this.params = params;

    this._queryResult = [];
  }

  getResult() {
    if (this.responseModel) {
      return this.responseModel(this._getQueryResult());
    } else {
      return this._getQueryResult();
    }
  }

  _setQueryResult(queryResult){
    this._queryResult = queryResult;
  }

  _getQueryResult(){
    return this._queryResult;
  }

  async executeMethod() {
    const result = await this.repository[this.method](this.params);
    return this._setQueryResult(result.dbData.result);
  }

}

module.exports = QueriesEntity;
