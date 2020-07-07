let express = require('express');
let { User, Article } = require('../model')
// 调用Router方法可以得到一个路由中间件实例
let router = express.Router();
// 当客户端通过get请求访问/路径的时候，会交由对应的函数来处理
router.get('/',function(req,res){
    let {keyword, pageSize, pageNum} = req.query;
    pageNum = isNaN(pageNum) ? 1 : parseInt(pageNum)
    pageSize = isNaN(pageSize) ? 3 : parseInt(pageSize)
    let query = {}
    if (keyword) {
        // query.title = new RegExp(keyword)
        query['$or'] = [
            {title: new RegExp(keyword)},
            {content: new RegExp(keyword)}
        ]
    }
    console.log('pageNum', pageNum);
    console.log('pageSize', pageSize);
    
    Article.count(query, function(err, count) {
        Article.find(query).sort({createAt: -1}).skip((pageNum - 1) * pageSize).limit(pageSize).populate({ path: 'user', model: User }).exec(function (err, articles) {
            console.log('err', err);
            console.log('articles', articles);
            res.render('index', {
                title: '首页', 
                keyword,
                pageNum,
                pageSize,
                totalPages: Math.ceil(count/pageSize),
                articles
            });
        })
    })
});

module.exports = router;
