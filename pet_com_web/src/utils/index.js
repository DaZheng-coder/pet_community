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
