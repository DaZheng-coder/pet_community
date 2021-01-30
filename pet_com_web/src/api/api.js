// 统一管理接口
import service from './index'

// 获取上级分类为商品的分类
export const apiCategories = () => service.get('/categories/commodity')
// 获取上级分类为category的商品列表
export const apiCommodities = (category) => service.get(`/commodities/${category}`)
// 根据id获取商品信息
export const apiCommodity = (_id) => service.get(`/commodity/${_id}`)