const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  user_id: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
  address: {type: String},
  note: {type: String}
})

module.exports = mongoose.model('Address', schema)