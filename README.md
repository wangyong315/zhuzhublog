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
#跑通路由