let express = require('express');
let router = express.Router();

router.get('/signup',function(req,res){
    res.render('signup',{title: '注册'});
});
router.get('/signin',function(req,res){
    res.render('signin',{title: '登录'});
});
router.get('/signout',function(req,res){
    res.render('signout',{title: '注销'});
});

module.exports = router;
