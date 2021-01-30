/**
 * 只执行一次的函数
 * @param {*} fn 执行的函数
 * @param {*} context 修改函数的this指向
 */
export function once(fn, context) {
  let result
  return function() {
    if(fn) {
      result = fn.apply(context || this, arguments)
      fn = null
    }
    return result
  }
}

/**
 * 是否是ios系统
 */
export function isIOS() {
  var ua = navigator.userAgent.toLowerCase()
  if(ua.match(/iPhone\sOS/i) == "iphone os") {
    return true
  } else {
    return false
  }
}

/**
  设置localStorage并且设置过期时间
*/

export const localStorageSet = (name, data) => {
  const obj = {
    data,
    expire: new Date().getTime() + 1000 * 60 * 30
  }
  localStorage.setItem(name, JSON.stringify(obj))
}

/**
  获取localStorage中的值
*/
export const localStorageGet = name => {
  const storage = localStorage.getItem(name)
  const time = new Date().getTime()
  let result = null
  if (storage) {
    const obj = JSON.parse(storage)
    if (time < obj.expire) {
      result = obj.data
    } else {
      localStorage.removeItem(name)
    }
  }
  return result
}