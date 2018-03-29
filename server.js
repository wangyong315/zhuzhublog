let express = require('express');
let app = express();
let index = require('./routes/index');
let user = require('./routes/user');
let article = require('./routes/article');
// 当客户端请求过来的路径是/user开头的话。会交由user中间件来处理
// /user/signin /user/signup
/*
* / 首页
* /user/signup  注册
* /user/signin  登录
* /user/signout  退出
* /articel/add 发表文章
*/
app.use('/article',article);
app.use('/user',user);
app.use('/',index);
app.listen(8080);
