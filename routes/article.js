let express = require('express');
let { checkLogin, checkNotLogin } = require('../auth')
let { Article } = require('../model')

let router = express.Router();

router.get('/add', checkLogin, function(req,res){
    res.render('article/add',{title: '发表文章', article: {}});
});

router.post('/add', checkLogin, function(req,res){
    let article = req.body;
    article.user = req.session.user._id
    Article.create(article, function (err, doc) {
        if (err) {
            req.flash('err', err)
            res.redirect('back')
        } else {
            req.flash('success', '文章发表成功')
            res.redirect('/')
        }
    })
});

router.get('/detail/:_id', checkLogin, function(req,res){
    const _id  = req.params._id
    Article.findById(_id, function(err, article) {
        if (err) {
            req.flash('err', err)
            res.redirect('back')
        } else {
            res.render('article/detail',{title: '文章详情', article});
        }
    })
});

router.get('/delete/:_id', checkLogin, function(req,res){
    const _id  = req.params._id
    Article.remove({_id}, function(err, article) {
        if (err) {
            req.flash('err', err)
            res.redirect('back')
        } else {
            req.flash('success', '删除文章成功')
            res.redirect('/')
        }
    })
});

router.get('/update/:_id', checkLogin, function(req,res){
    const _id  = req.params._id
    Article.findById(_id, function(err, article) {
        if (err) {
            req.flash('err', err)
            res.redirect('back')
        } else {
            res.render('article/add',{title: '文章详情', article});
        }
    })
});


router.post('/update/:_id', checkLogin, function(req,res){
    const _id  = req.params._id
    let article = req.body;
    Article.update({_id}, req.body, function (err, doc) {
        if (err) {
            req.flash('err', err)
            res.redirect('back')
        } else {
            req.flash('success', '文章更新成功')
            res.redirect('/article/detail/'+_id)
        }
    })
});

module.exports = router;