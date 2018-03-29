let express = require('express');

let router = express.Router();

router.get('/add',function(req,res){
    res.send('添加');
});

module.exports = router;