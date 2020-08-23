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

## 运行项目
```npm
npm start
```

## 使用postman等http接口工具进行测试

# 参考资料
- [Nodejs全栈入门-慕课网视频教程](https://www.imooc.com/learn/1199)
- [Sequelize ORM](https://sequelize.org/)
- [PM2 Qucik Start](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [postman](https://www.postman.com/)
- [REST Client 测试（vscode插件）](https://www.jianshu.com/p/be63bb085844)
- [VSCode插件推荐 | REST Client: 也许是比Postman更好的选择 ](https://www.sohu.com/a/295730790_791833)
