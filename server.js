let express = require('express');
let path = require('path');
let app = express();
// 设置模板引擎 html
app.set('view engine', 'html');
// 制定模板的存放的根目录
app.set('views', path.resolve('views'));
// 指定对于html类型的模板使用ejs方法进行渲染
app.engine('html', require('ejs').__express);
// 静态文件中间件
app.user(express.static(path.resolve('node_modules')));
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
// app.use(function(req, res, next){

// });
app.use('/article',article);
app.use('/user',user);
app.use('/',index);
app.listen(8080);