const userRouter = require('./routes/user.js');
const bp=require('body-parser');
const express = require('express');
var app = express();
app.listen(8000);
app.use(bp.urlencoded({
	extended:false
}));
app.use(express.static('public'));
app.use('/user',userRouter);
