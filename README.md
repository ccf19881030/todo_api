# todo_api
使用nodejs+express+sequelize实现一个todo list后台API接口
本视频的源代码来源于慕课网上面的[《Nodejs全栈入门教程》](https://www.imooc.com/video/20694)，是对应的后端接口的实现代码。感兴趣的话可以跟着上面的视频练练手。
具体可以参考我的CSDN博客[Nodejs全栈入门-慕课网]()的说明

# 项目下载和运行
## 下载源代码
```
 git clone https://github.com/ccf19881030/todo_api.git
```
## 安装配置好mysql数据库
、需要在本地或者服务器比如腾讯云、阿里云上面配置安装好mysql数据库并创建数据库todo_development以及对应的表todos，然后修改todo_api/db/config/config.json文件
```json
{
  "development": {
    "username": "root",
    "password": "123456",
    "database": "todo_development",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "timezone": "+08:00"
  },
  "test": {
    "username": "root",
    "password": "123456",
    "database": "todo_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "123456",
    "database": "todo_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
其中数据库连接信息需要根据自己的配置进行修改。

## 安装依赖
下载好源代码todo_api后，在项目根目录运行` npm install `安装依赖
```npm
npm install
```

## 初始化mysql数据库
安装并配置好mysql数据库`todo_development`，并且安装好`sequelize`依赖后，
在项目`todo_api/db`目录下执行如下操作
```
npx sequelize db:migrate
```
完成`todo_development`数据库的初始化，这条命令会将`todo_api/db/migrations`目录下的`20200823035851-create-todo.js`中的模型Todos导入到`todo_development`数据库中，
其中定义了Todos模型，使用这条命令后会在数据库中新增一张Todos表。



## 运行项目
```npm
npm start
```

## 使用postman等http接口工具进行测试

### 使用 [postman](https://www.postman.com/)进行API接口测试

### 使用VSCode RestClient插件进行测试
在VSCode中安装好RestClient插件后，在根目录下编写一个` api.http `的文件，并写入如下代码：
```RestClient
### 使用RestClient VSCode插件进行后端API接口测试
@baseurl = http://127.0.0.1:3000

### 根路径接口测试
GET  {{baseurl}}

### 获取status为2，page为1的任务列表数据
GET {{baseurl}}/todo/list/2/1

### 获取所有的任务数据（status为-1，page为2的任务列表数据）
GET {{baseurl}}/todo/list/-1/2

### 发送JSON数据

### 新增任务
POST {{baseurl}}/todo/create
Content-Type: application/json

{
    "name": "修手机",
    "deadline": "2020-08-23 17:00:00",
    "content": "帮老板修手机 下午5点前要完成"
}

### 修改任务
POST {{baseurl}}/todo/update
Content-Type: application/json

{
     "id": 5,
     "name": "学习任务005",
     "deadline": "2020-08-23T07:16:00.000Z",
     "content": "帮助小明补习功课"
}


### 修改任务的状态 

POST {{baseurl}}/todo/update_status
Content-Type: application/json

{
    "id": 8,
    "status": 3
}

### 删除一个id为8的任务
DELETE {{baseurl}}/todo/delete/8

```


# 参考资料
- [Nodejs全栈入门-慕课网视频教程](https://www.imooc.com/learn/1199)
- [Sequelize ORM](https://sequelize.org/)
- [PM2 Qucik Start](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [postman](https://www.postman.com/)
- [REST Client 测试（vscode插件）](https://www.jianshu.com/p/be63bb085844)
- [VSCode插件推荐 | REST Client: 也许是比Postman更好的选择 ](https://www.sohu.com/a/295730790_791833)
