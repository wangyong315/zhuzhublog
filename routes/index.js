let express = require('express');
let { Article } = require('../model')
// 调用Router方法可以得到一个路由中间件实例
let router = express.Router();
// 当客户端通过get请求访问/路径的时候，会交由对应的函数来处理
router.get('/',function(req,res){
    Article.find().exec(function(err, articles) {
        console.log('err', err);
        console.log('articles', articles);
        res.render('index', {title: '首页', articles});
    })
    // Article.find({}, populate('user'), function (err, articles) {
    //     res.render('index', {title: '首页', articles});
    // })
});

module.exports = router;
