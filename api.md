## 一、关于本视频
- [慕课网视频教程-3.1 需求分析](https://www.imooc.com/video/20694)
- 第一章： 搭建前端全栈开发需要的本地基本环境
- 第二章： Web应用基础知识以及express框架
- 第三章：使用express+mysql+sequelize实现一个todoList项目
- 第四章：课程回顾


## 二、关于作者
一缕孤烟 Web前端工程师
资深Web前端工程师，曾参与开发大型电商平台，现任职于某国企互联网公司，担任Web前端项目经理一职，带领8人团队。8年Web前端项目开发经验，具有丰富的H5，vue，react等开发和教学经验，热爱研究乐于分享。

## 三、项目实战
### 需求说明，API说明
- 1. 根据客户端传递过来的不同的参数（状态/页码） 查询 任务列表
- 2. 实现 新增一个任务的功能 （名称/截止日期/内容）
- 3. 实现一个 编辑的功能：根据客户端 传递的 任务对象（已经存在的数据）
      进行编辑， （名称/截止日期/内容/ID）
- 4. 删除一个任务 （ID）
- 5. 修改任务的状态 （ID/状态--待办/完成）

### API实现

#### 数据库的初始化 
1. 创建一个数据库
2. 使用 `sequelize cli` 初始化项目的数据库配置信息
  ` npx sequelize init `
3. 生成模型文件
  - A. migrate 文件
  - B. model 文件
  ` npx sequelize model:generate --name Todo --attributes name:string,deadline:date,content:string `
4. 持久化， 模型对应的[数据库表] 
  ` npx sequelize db:migrate `
  
#### API里面具体使用ORM模型

- ORM模型创建
- API具体实现

### 项目的发布和运维

pm2

启动命令/运维命令/运维命令/运维文档
1. pm2 start ecosystem.config.js
2. pm2 logs
3. pm2 restart ecosystem.config.js

## 课程回顾
1. 技术栈
  1. nodejs-->http,异常
  2. web框架，express、hapi、koa、egg
  3. 参数校验
  4。 mysql的使用，了解
  5. ORM, sequelize 使用

2. 技术的关键点
  api
  web->webserver->router->handler->orm->db
3. 注意事项
  1. 需要详细的 模型设计->模型之间的关系
  2. api的使用文档-->api文档的使用工具
  3. 测试，测试用例