// 统一管理接口
import service from './index'

// 获取上级分类为商品的分类
export const apiCategories = () => service.get('/categories/commodity')
// 获取上级分类为category的商品列表
export const apiCommodities = (category) => service.get(`/commodities/${category}`)
// 根据id获取商品信息
export const apiCommodity = (_id) => service.get(`/commodity/${_id}`)

// 注册用户
export const apiRegister = (body) => service.post('/register', body)
// 登录
export const apiLogin = (body) => service.post('/login', body)
// 查看是否有用户名
export const apiIsExistUsername = (body) => service.get('/isExistUsername', body)

// 获取购物车列表，传入的id是用户id
export const apiCartList = (_id) => service.get(`/cart/list/${_id}`)
// 更新购物车列表
export const apiUpdateCartList = (_id,body) => service.put(`/cart/list/update/${_id}`, body)
// 将商品添加到购物车列表，id为用户id，body传入商品_id
export const apiCartAddCommodity = (_id, body) => service.post(`/cart/list/add/${_id}`, body)

// 获取地址列表 id为用户id
export const apiAddressList = (_id) => service.get(`/address/list/${_id}`)
// 添加地址
export const apiAddAddress = (body) => service.post('/address/create', body)
// 删除地址，传入的是地址的id
export const apiDeleteAddress = (_id) => service.delete(`address/delete/${_id}`)

// 获取订单列表，id为用户id
export const apiOrderList = (_id) => service.get(`/order/list/${_id}`)
// 创建添加订单
export const apiAddOrder = (body) => service.post('/order/create', body)