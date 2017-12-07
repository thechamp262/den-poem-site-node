require("./config/config");

const express = require('express');
const {mongoose} = require('./db/mongoose');

const app = express();
const port = process.env.PORT;

app.listen(port,function(){
  console.log(`Started on at port ${port}`);
});

module.exports = {app};
