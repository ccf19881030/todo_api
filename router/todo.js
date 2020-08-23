/* jshint esversion: 8 */
const express = require('express')
const router = express.Router()

const models = require('../db/models')

/**
 * [model:Todo]
 * sequelize
 * Sequelize
 */

/**
 * 查询任务列表
 */
router.get('/list/:status/:page',  async (req, res,next)=>{
  // 1. 状态 1：表示待办， 2：完成，3：删除，-1：全部
  // 2. 分页的处理
  let {status,page} = req.params;
  let limit = 10;
  let offset = (page-1)*limit;
  let where = {};
  if (status != -1) {
    where.status = status;
  }
  let list = await models.Todo.findAndCountAll({
    where,
    limit,
    offset
  })
  res.json({
    list,
    message: '列表查询成功'
  })
})

/**
 * 创建一个todo任务
 */
router.post('/create',async (req,res,next)=>{
  try {
    let { name, deadline, content } = req.body;
    let todo = await models.Todo.create({
      name,
      deadline,
      content
    })
    res.json({
    todo,
    message: '任务创建成功!'
    })
  } catch (error) {
    next(error)
  }
})

/**
 * 修改一个todo任务
 */
router.post('/update', async (req,res,next)=>{
  try {
    let { id, name, deadline, content } = req.body;
    let todo = await models.Todo.findOne({
      where: {
        id
      }
    })
    if (!todo) {
      return res.json({
        message: `任务${id}不存在`
      })
    }
    // 执行任务更新
    todo = await todo.update({
      name,
      deadline,
      content
    })
    res.json({
      todo,
      message: '修改任务成功'
    })
  } catch (error) {
    next(error)
  }
})

/**
 * 修改一个todo任务的状态
 * 修改任务的状态 （ID/状态--待办/完成）
 */
router.post('/update_status', async (req,res,next)=>{
  try {
    let { id, status } = req.body;
    let todo = await models.Todo.findOne({
      where: {
        id
      }
    })
    if (todo && status != todo.status) {
      // 执行更新
      todo = await todo.update({
        status
      })
    } else {
      return res.json({
        message: `任务${id}不存在或者修改的status和原来的status相同!`
      })
    }
    res.json({
      todo
    })
  } catch (error) {
    next(error)
  }
 
})

/**
 * 删除一个todo任务
 */
router.delete('/delete/:id', async (req,res,next)=>{
  try {
    let { id } = req.params;
    let todo = await models.Todo.findOne({
      where: {
        id
      }
    })
    if (!todo) {
      return res.json({
        message: `任务${id}不存在`
      })
    }
    if (todo) {
      // 执行更新
      todo = await todo.destroy({
      })
    }
    if (todo == null) {
      res.json({
        message: `任务${id}删除成功`
      })
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router