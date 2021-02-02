import {apiCartList} from '@/api/api'

// 初始化状态
const initState = async () => {
  const list = await apiCartList()
}

export default function userReducer(preState=initState(), action) {
  const {type,data} = action
  switch (type) {
    case SET_USER:
      localStorageSet('user', data)
      return data
    case DELETE_USER:
      localStorage.removeItem('user')
      localStorage.removeItem('userToken')
      return initState
    default:
      return preState
  }
}