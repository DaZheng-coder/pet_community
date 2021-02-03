const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  user_id: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
  username: {type: String},
  totalPrice: {type: String},
  commodities: {type:Object},
  address: {type: String},
  note: {type: String}
}, {
  timestamps: true
})

module.exports = mongoose.model('Order', schema)