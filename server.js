let express = require('express');
let app = express();
let index = require('./routes/index');
let user = require('./routes/user');
// 当
app.use('/user',user);
app.use('/',index);
app.listen(8080);
