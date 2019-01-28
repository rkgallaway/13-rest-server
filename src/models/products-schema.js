'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const products = mongoose.Schema({
  name: {type:String, required:true},
  description: {type:String, required:true},
  category: {type:String, required:true},
}, {toObject:{virtuals:true}, toJson:{virtuals:true}});



module.exports = mongoose.model('products', products);
