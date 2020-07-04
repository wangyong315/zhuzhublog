let express = require('express');
let router = express.Router();
let { User } = require('../model')
let { checkLogin, checkNotLogin } = require('../auth')

// 用户注册 /user/signup
/**
 * 1 绘制注册页面的模板 （username password email）
 * 2 实现提交的路由 post /user/signup
 * 3 在路由中获得请求体  然后把次用户的信息保存到数据库中
 * 4 保存完毕后跳转到登录页面
 * 
*/

router.get('/signup', checkNotLogin, function(req,res){
    res.render('signup',{title: '注册'});
});

// 注册
router.post('/signup', checkNotLogin, function(req,res){
    let user = req.body; //请求体对象（username password email）
    User.create(user, function (err, doc) {
        if (err) {
            req.flash('err', '用户注册失败')
            res.redirect('back')
        } else {
            req.flash('success', '用户注册成功')
            res.redirect('/user/signin')
        }
    })
});

router.get('/signin', checkNotLogin, function(req,res){
    res.render('signin',{title: '登录'});
});

// 登录
router.post('/signin', checkNotLogin, function(req,res){
    let user = req.body; // 得到用户提交的表单
    User.findOne(user, function (err, doc) {
        if (err) {
            req.flash('err', '用户登录失败')
            res.redirect('back')
        } else {
            if (doc) {
                // 向回话对象中写入属性 user = doc
                req.flash('success', '用户登录成功')
                req.session.user = doc;
               res.redirect('/')
            } else {
                req.flash('err', '用户或者密码错误')
                res.redirect('back')
            }
        }
        
    })
});

// 用户退出登录
router.get('/signout', checkLogin, function(req,res){
    req.session.user = null
    res.redirect('/user/signin')
});

module.exports = router;
