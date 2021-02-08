const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  user_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  parent: {type: String},
  imgs: [],
  // 点赞数
  good: {type: Number}
},{
  timestamps: true
})

module.exports = mongoose.model('Common', schema)