let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.Types.ObjectId;

mongoose.connect('mongodb://127.0.0.1/2020blog')

// 定义用户集合的骨架模型，规定了用户集合中文档的属性和类型
let UserSchame = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  avatar: String, 
})

// 定义用户模型
let User = mongoose.model('user', UserSchame)

exports.User = User

let ArticleSchame = new mongoose.Schema({
  title: String,
  content: String,
  createAt: {
    type: Date,
    default: Date.now()
  },
  // user是外键，
  user: {
    type: ObjectId,
    ref: 'User'
  }
})

// 定义用户模型
let Article = mongoose.model('article', ArticleSchame)

exports.Article = Article
