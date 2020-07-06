let express = require('express');
let { User, Article } = require('../model')
// 调用Router方法可以得到一个路由中间件实例
let router = express.Router();
// 当客户端通过get请求访问/路径的时候，会交由对应的函数来处理
router.get('/',function(req,res){
    const {keyword} = req.query;
    let query = {}
    if (keyword) {
        // query.title = new RegExp(keyword)
        query['$or'] = [
            {title: new RegExp(keyword)},
            {content: new RegExp(keyword)}
        ]
    }
    Article.find(query).populate({ path: 'user', model: User }).exec(function (err, articles) {
        console.log('err', err);
        console.log('articles', articles);
        res.render('index', {title: '首页', keyword, articles});
    })
});

module.exports = router;
