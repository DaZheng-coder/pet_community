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
    expire: new Date().getTime() + 1000 * 60 * 60 * 60
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

/**
 * 
 * @param {节流} fn 执行的函数
 */
export function throttle (fn) {
  let canRun =  true
  return function () {
    if (!canRun) return 
    canRun = false
    setTimeout(() => {
      fn.apply(this, arguments)
      canRun = true
    }, 500)
  }
}

// 将base64文件转化为文件
export function dataURLtoFile (dataUrl, fileName) {
  var arr = dataUrl.split(','),mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),n = bstr.length, u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, {type: mime});
}