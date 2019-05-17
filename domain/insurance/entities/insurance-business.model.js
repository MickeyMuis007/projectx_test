const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const insuranceBusinessSchema = new Schema({
  name: { type: String, required: true }
});

module.exports = mongoose.model('InsuranceBusiness', insuranceBusinessSchema);