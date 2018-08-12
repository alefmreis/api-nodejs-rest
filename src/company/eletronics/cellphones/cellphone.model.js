const Database = require('../../../_shared/data/database');
const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const mongooseTimeStamp = require('mongoose-timestamp');

const schema = new mongoose.Schema({
  model: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  sold: {
    type: Boolean,
    default: false
  }
});

schema.plugin(mongooseDelete, { overrideMethods: true });
schema.plugin(mongooseTimeStamp);

module.exports.CellPhoneSchema = schema;
module.exports.CellPhone = Database.conn.model('CellPhone', schema);
