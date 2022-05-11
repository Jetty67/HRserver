const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Expose-Headers, Platform, Token, Uid');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, HEAD');
    res.header('Content-Type', 'application/json; charset=utf-8');
    next();
  });
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  //这是为了api模块话管理，前面的是API请求时的路径，后面时处理API请求的文件位置
  app.use('/text/login', require(__dirname + '/module/login'));

//监听的端口号可更改
app.listen(8090, () => {
    console.log('express listen port 8090');
  });
  
