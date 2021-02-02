const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  // 当前购物车持有用户
  user_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  // 购物车列表
  items: [{
    // 商品id
    _id: { type: mongoose.SchemaTypes.ObjectId, ref: 'Commodity' },
    name: {type: String},
    price: {type: String},
    cover: {type: String},
    // 商品数量
    count: {type: Number},
    checked: { type: Boolean, default: false}
  }]
})

module.exports = mongoose.model('Cart', schema)