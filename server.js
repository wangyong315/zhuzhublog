let express = require('express');
let path = require('path');
let bodyParser = require('body-parser')
let session = require('express-session')
// 消息提示中间件
let flash = require('connect-flash')
let app = express();
// 设置模板引擎 html
app.set('view engine', 'html');
// 制定模板的存放的根目录
app.set('views', path.resolve('views'));
// 指定对于html类型的模板使用ejs方法进行渲染
app.engine('html', require('ejs').__express);
// 静态文件中间件会拦截客户端对于静态文件如 bootStarp.css 然后在当前目录
// 查找node_modules,如果能找到则返回客户端
app.use(express.static(path.resolve('node_modules')));
app.use(express.static(path.resolve('public')));
// 在使用此回话中间件之后，会在请求对象上增加 req.session属性
app.use(session({
  resave: true, // 每次客户端请求到服务器都会保存到session
  secret: 'wangyong', // 用来加密cookie
  cookie: {
    maxAge: 3600*1000
  },
  saveUninitialized: true, // 保存未初始化的session
}))
// 切记此中间件依赖session,必须放在session下面
// req.flash(type, value) req.flash(type)
app.use(flash())
let index = require('./routes/index');
let user = require('./routes/user');
let article = require('./routes/article');
app.use(function (req, res, next) {
  // 真正渲染的事 res.locals
  res.locals.user = req.session.user
  res.locals.success = req.flash('success').toString()
  res.locals.err = req.flash('err').toString()
  next()
})
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
// 解析客户端提价过啦的请求提, 并转成对象赋给req.body
app.use(bodyParser.urlencoded({extended:true}))
app.use('/article',article);
app.use('/user',user);
app.use('/',index);
app.listen(8080);
