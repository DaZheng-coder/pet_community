const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  user_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  text: { type: String},
  imgs: [],
  // 点赞数
  good: [ {type: mongoose.SchemaTypes.ObjectId, ref: 'user'}]
},{
  timestamps: true
})

module.exports = mongoose.model('Dynamic', schema)