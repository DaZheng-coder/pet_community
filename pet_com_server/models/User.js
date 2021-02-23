const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: {type: String},
  follow: [{type: mongoose.SchemaTypes.ObjectId, ref: 'User'}],
  fans: [{type: mongoose.SchemaTypes.ObjectId, ref: 'User'}],
  password: {
    type: String,
    select: false,
    set(val) {
      return require('bcrypt').hashSync(val, 10)
    }
  },
  avatar: {type: String}
})

module.exports = mongoose.model('User', schema)