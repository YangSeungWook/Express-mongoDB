//실행은 nodemon main.js    == 실시간 감지

var express = require('express');
var app = express();
var user = require('./routes/user.js');

//morgan 로그~ 미들웨어
// var morgan = require('morgan');
// app.use(morgan('dev'));


//기본 로그 만들어 보기
// var myLogger = function (req, res, next) {
//     console.log(req.url);
//     next();
// };
// app.use(myLogger);


//json형태로 로그 보여줌
var bodyParser= require('body-parser');
app.use(bodyParser.json());


//먼저 실행되서 우선권을 갖음
app.use('/', express.static('public'));

//우선권 없으므로 실행 안됨 아래는
app.get('/', function (req, res) {
    res.send('Hello World')
});

app.use('/user', user);

app.listen(3000, function () {
    console.log('Example App is listening on port 3000');
})
