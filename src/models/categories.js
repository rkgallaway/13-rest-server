'use strict';

const categoriesModel = require('./categories-schema.js');

class Categories {

  /**
   *Creates an instance of Categories.
   * @memberof Categories
   */
  constructor() {
  }

  /**
   *
   *
   * @param {*} _id
   * @returns
   * @memberof Categories
   */
  get(_id) {
    let queryObject = _id ? {_id} :{}; //if _id use the _id, if not use empty object
    return categoriesModel.find(queryObject);
  }
  
  /**
   *
   *
   * @param {*} record
   * @returns
   * @memberof Categories
   */
  post(record) {
    let newRecord = new categoriesModel(record);
    return newRecord.save();
  }

  /**
   *
   *
   * @param {*} _id
   * @param {*} record
   * @returns
   * @memberof Categories
   */
  put(_id, record) {
    return categoriesModel.findByIdAndUpdate(_id, record, {new:true});
  }

  /**
   *
   *
   * @param {*} _id
   * @returns
   * @memberof Categories
   */
  delete(_id) {
    return categoriesModel.findByIdAndDelete(_id);
  }

}

module.exports = Categories;
