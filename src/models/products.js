'use strict';

const uuid = require('uuid/v4');


const schema = {
  id: {required:true},
  category: {required:true},
  name: {required:true},
  price: {required:true},
};

class Products {

  /**
   *Class of Products.
   * @memberof Products
   */
  constructor() {
    this.database = [];
  }

  /**
   *gets item by id
   *
   * @param {*} id
   * @returns gets item by id
   * @memberof Products
   */
  get(id) {
    let response = id ? this.database.filter((record) => record.id === id) : this.database;
    return Promise.resolve(response);
  }
  
  /**
   *posts new record
   *
   * @param {*} entry
   * @returns posts new record
   * @memberof Products
   */
  post(entry) {
    entry.id = uuid();
    let record = this.sanitize(entry);
    if ( record.id ) { this.database.push(record); }
    return Promise.resolve(record);
  }

  /**
   * put / update existing record
   *
   * @param {*} id
   * @param {*} entry
   * @returns updated record
   * @memberof Products
   */
  put(id, entry) {
    let record = this.sanitize(entry);
    if( record.id ) { this.database = this.database.map((item) => (item.id === id) ? record : item  );}
    return Promise.resolve(record);
  }

  /**
   * delete item by ud
   *
   * @param {*} id
   * @returns deleted item by id
   * @memberof Products
   */
  delete(id) {
    this.database = this.database.filter((record) => record.id !== id);
    return Promise.resolve();
  }

  /**
   * sanitizes db
   *
   * @param {*} entry
   * @returns sanitized db
   * @memberof Products
   */
  sanitize(entry) {
    let valid = true;
    let record = {};

    Object.keys(schema).forEach(field => {
      if(schema[field].required){
        if(entry[field]){
          record[field] = entry[field];
        }else{
          valid = false;
        }
      }else{
        record[field] = entry[field];
      }
    });
    return valid ? record : undefined;
  }

}

module.exports = Products;
