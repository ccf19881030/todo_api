const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const todoRouter = require('../router/todo')

// for parsing application/json
app.use(bodyParser.json())

// for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}))

/**
 * 1. 所有的错误, http status == 500
 */
app.use((err,req,res,next) => {
  if(err) {
    res.status(500).json({
      message: err.message
    })
  } else {
    next()
  }
})

app.use('/todo', todoRouter)

app.get('/',(req,res,next)=>{
  // next(new Error('自定义异常'))
  res.send('Welcome to todo list homepage!');
})

app.listen(3000,'127.0.0.1',(req,res)=>{
  console.log('todo backend web server start at http://127.0.0.1:3000');
})