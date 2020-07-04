let mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/2020blog')

// 定义用户集合的骨架模型，规定了用户集合中文档的属性和类型
let UserSchame = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
})

// 定义用户模型
let User = mongoose.model('user', UserSchame)

exports.User = User

