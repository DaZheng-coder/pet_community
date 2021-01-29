const express = require("express")

const app = express()

app.set('secret', 'i2u34y12oi3u4y8')

app.use(require('cors')())
app.use(express.json())
app.use('/', express.static(__dirname + '/web'))
app.use('/admin', express.static(__dirname + '/admin'))
app.use('/uploads', express.static(__dirname + '/uploads'))

// 解决跨域 
// app.all('*', function(req, res, next) {
//   if (req.headers.origin == 'http://localhost:3001') {
//     res.header("Access-Control-Allow-Origin", req.headers.origin); 
//     res.header("Access-Control-Allow-Methods", "POST, GET"); 
//     res.header("Access-Control-Allow-Headers", "X-Requested-With"); 
//     res.header("Access-Control-Allow-Headers", "Content-Type"); 
//   }
//   next()
// })

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)

app.listen(3000, () => {
  console.log('http://localhost:3000');
});