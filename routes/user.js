let express = require('express');
let router = express.Router();
let { User } = require('../model')

// 用户注册 /user/signup
/**
 * 1 绘制注册页面的模板 （username password email）
 * 2 实现提交的路由 post /user/signup
 * 3 在路由中获得请求体  然后把次用户的信息保存到数据库中
 * 4 保存完毕后跳转到登录页面
 * 
*/

router.get('/signup',function(req,res){
    res.render('signup',{title: '注册'});
});

router.post('/signup',function(req,res){
    let user = req.body; //请求体对象（username password email）
    User.create(user, function (err, doc) {
        if (err) {
            res.redirect('back')
        } else {
            res.redirect('/user/signin')
        }
        
    })
});

router.get('/signin',function(req,res){
    res.render('signin',{title: '登录'});
});
router.get('/signout',function(req,res){
    res.render('signout',{title: '注销'});
});

module.exports = router;
