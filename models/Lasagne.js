var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var lasagneSchema = new Schema({
    name: String,
    location: String,
    price: String
  }, {
    timestamps: true
  });

  const Lasagne = mongoose.model('Lasagne', lasagneSchema)
  module.exports = Lasagne