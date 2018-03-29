let express = require('express');
let router = express.Router();

router.get('/signup',function(req,res){
    res.send('注册');
});
router.get('/signin',function(req,res){
    res.send('登录');
});
router.get('/signout',function(req,res){
    res.send('注销');
});

module.exports = router;
