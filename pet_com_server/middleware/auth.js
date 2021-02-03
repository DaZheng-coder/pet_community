module.exports = options => {
  const assert = require('http-assert')
  const jwt = require('jsonwebtoken')
  const User = require('../models/User')
  // const AdminUser = require('../models/AdminUser')

  return async (req, res, next) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, '不持有token，请先登录')
    const { _id } = jwt.verify(token, req.app.get('secret'))
    assert(_id, 401, 'token没有对应用户id，请先登录')
    req.user = await User.findById(_id)
    assert(req.user, 401, '没有此用户，请先登录')
    await next()
  }
}