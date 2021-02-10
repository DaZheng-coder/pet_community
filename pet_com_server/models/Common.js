const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  user_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  parent: {type: String},
  text: {type:String},
  imgs: [],
  // 点赞数
  good: []
},{
  timestamps: true
})

module.exports = mongoose.model('Common', schema)