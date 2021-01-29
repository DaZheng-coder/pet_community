const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  // 商品分类
  category: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
  // 商品名称
  name: { type: String },
  // 商品价格
  price: {type: String},
  // 商品折扣价
  discountPrice: {type: String},
  // 销量
  sales: {type: String},
  // 商品封面
  cover: {type: String},
  // 商品轮播图
  swiperImgs: [],
  // 详情图片
  detailImgs: [],
}, {
  timestamps: true
})

module.exports = mongoose.model('Commodity', schema)