require("./config/config");
const path = require('path');
const hbs = require('hbs');
const express = require('express');
const {mongoose} = require('./db/mongoose');

const app = express();
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT;

hbs.registerPartials(publicPath + '/views/partials');

app.use(express.static('public'));
app.set('views', publicPath + '/views');
app.set('view engine','hbs');


app.get('/',(req,res)=>{
  res.render('admin.hbs');
})

app.listen(port,function(){
  console.log(`Started on at port ${port}`);
});

module.exports = {app};
