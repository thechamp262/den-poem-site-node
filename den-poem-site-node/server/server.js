require("./config/config");
const path = require('path');
const hbs = require('hbs');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const {mongoose} = require('./db/mongoose');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT;

const app = express();
//const server = http.createServer(app);


const server = app.listen(port,function(){
  console.log(`Started on at port ${port}`);
});

const io = socketIO().listen(server);

hbs.registerPartials(publicPath + '/views/partials');

app.use(express.static(publicPath));
app.set('views', publicPath + '/views');
app.set('view engine','hbs');



io.on('connection',(socket)=>{console.log('User here!')});

app.get('/',(req,res)=>{
  res.render('admin.hbs');
})

app.get('/login',(req,res)=>{
  res.render('login.hbs',{
    title: 'login',
    css: '#'
  })
})

module.exports = {app};
