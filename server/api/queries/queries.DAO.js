'use strict';

const DBService = require('./../services/lib/index');

class UserDAO extends DBService {

  constructor() {
    super();
    this.COLLECTION_NAME = '';
  }

  getCollectionName() {
    return this.COLLECTION_NAME
  }

  totalMoneyMoved(params) {
    this.COLLECTION_NAME = 'transactions';
    const since = params.since || 1;
    let ts = new Date();
    ts = ts.setDate(ts.getDate() - since);
    const data = {
      dbData: {
        query: [
          {
            $match: {
              dateCreated: { $gte: ts }
            }
          },
          {
            $group: {
              _id: "$amount.currency",
              total: { $sum: "$amount.total"}
            }
          }
        ]
      }
    };
    return super.aggregate(data);
  }

}

module.exports = UserDAO;