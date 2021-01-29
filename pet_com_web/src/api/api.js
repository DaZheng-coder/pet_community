// 统一管理接口
import service from './index'

export const apiCategories = () => service.get('/categories/commodity')