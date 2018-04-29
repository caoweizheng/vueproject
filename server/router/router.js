const user = require('./user.js');

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

// 全局使用body-parser
app.use(bodyParser.urlencoded({exteded:false}));

user.reg(app);

const http = require('http');


module.exports = function(_port = 88){

	// 开启服务器，定义端口
	app.listen(_port);

}