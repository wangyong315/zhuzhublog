# 新建一个项目
```
npm init -y
```

#安装项目的依赖
```
npm install async body-parser connect-flash connect-mongo cookie-parser debug ejs express express-session mongoose morgan multer serve-favicon -S
```
--save-dev = -D
--save = -S

#创建并初始化git
```
git init 
git add -A
git commit -m 
git remote add origin https://github.com/
git push origin master
```

#创建服务
express +  mongoose
```
let express = require('express');
let app = express();

app.listen(8080);

```
#跑通路由0000000


4. 实现用户注册的功能
5. 实现用户登录的功能
6. 实现会话功能并控制菜单显示
7. 增加登录状态判断中间件
8. 成功和失败的时候，消息提示
9. 发表文章
10. 查看文章详情
11. 删除文章
12. 修改文章
13. 搜索文章和分页


<!-- this is a weibodata branch -->