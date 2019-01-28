'use strict';

const categoriesModel = require('./categories-schema.js');

class Categories {

  /**
   *Class 0f Categories.
   * @memberof Categories
   */
  constructor() {
  }

  /**
   * get by id
   *
   * @param {*} _id
   * @returns categories model
   * @memberof Categories
   */
  get(_id) {
    let queryObject = _id ? {_id} :{}; //if _id use the _id, if not use empty object
    return categoriesModel.find(queryObject);
  }
  
  /**
   * post new record
   *
   * @param {*} record
   * @returns saved record
   * @memberof Categories
   */
  post(record) {
    let newRecord = new categoriesModel(record);
    return newRecord.save();
  }

  /**
   * put /update record
   *
   * @param {*} _id
   * @param {*} record
   * @returns update by id
   * @memberof Categories
   */
  put(_id, record) {
    return categoriesModel.findByIdAndUpdate(_id, record, {new:true});
  }

  /**
   *delete by id
   *
   * @param {*} _id
   * @returns delete by id
   * @memberof Categories
   */
  delete(_id) {
    return categoriesModel.findByIdAndDelete(_id);
  }

}

module.exports = Categories;
