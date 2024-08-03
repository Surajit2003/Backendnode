const express = require('express')
const app = express()

// middleware using
app.use(function (req,res,next) {
  console.log('hi middleware')
  next();
})
// routing
app.get('/hi', function (req, res) {
  res.send('Hey google golu moluuuuuuu')
})

//error handler

app.get('/hi', function (req, res, next) {
   return next(new error('not implemented'));
})

app.use(function(err, req, res, next)  {
  console.error(err.stack)
  res.status(500).send('Something went wrong!')
})
app.listen(3000)