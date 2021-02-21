// 封装axios
import axios from 'axios'
import QS from 'qs'
import {localStorageGet}  from '@/utils'
// import Toast from ''

//保存环境变量
// const isPrd = process.env.NODE_ENV == 'production';
//区分开发环境还是生产环境基础URL
// export const basicUrl = isPrd ? process.env.REACT_APP_API_URL : 'http://localhost:3001/web/api'
export const basicUrl = 'http://pet.zhengjunqin.top/web/api'

// 设置axios基本路径
const service = axios.create({
  baseURL: basicUrl
})

// 请求拦截器
service.interceptors.request.use(config => { 
  const token = localStorageGet('userToken')
  // 在每次的请求中添加token
  // config.data = Object.assign({}, config.data, {
  //   token: token,
  // })
  if (token) {
    console.log('有token，设置token1', token)
    config.headers.Authorization = 'Bearer ' + token
  }
  // 设置请求头
  // config.headers = {
  //   'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  // }
  // config.data = QS.stringify(config.data)
  return config
}, error => { 
  return Promise.reject(error);
})

// 响应拦截器
service.interceptors.response.use(response => {
  //根据返回不同的状态码做不同的事情
  // 这里一定要和后台开发人员协商好统一的错误状态码
  if (response.code) {
    switch (response.code) {
      case 200:
        return response.data;
      case 401:
        //未登录处理方法
        console.log('用户未登录')
        break;
      case 403:
        //token过期处理方法
        console.log('用户token过期')
        break;
      default:
        // 发送错误消息
        // message.error(response.data.msg)
        window.alert('错误消息', response.data.msg)
        console.log('错误消息', response.data.msg)
    }
  } else { 
    return response;
  }
})
//最后把封装好的axios导出
export default service
