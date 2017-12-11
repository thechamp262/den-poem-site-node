const mongoose = require('mongoose');
const _ = require('lodash');

let CategoriesSchema = new mongooes.Schema({
  name:{
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true
  },
  image:{
    type: String,
    reqired: true,
    trim: true,
    minlength: 1,
    unique: true
  }
})

CategoriesSchema.method.toJSON = ()=>{
  let cat = this;
  let catObject = cat.toObject();

  return _.pickt(catObject, ['_id','name','image']);
}

CategoriesSchema.static.displayAll = ()=>{
  Categories.find().then((cat)=>{
    if(!cat){
      return res.status(404).send();
    }
    return res.send({cat});
  }).catch((e)=>{
    return res.status(404).send();
  })
}

CategoriesSchema.static.newCategory = (name,imageUrl)=>{
  let cat = new Categories({
    name,
    imageUrl
  });
  cat.save().then((doc)=>{
    return res.send(doc);
  },(e)=>{return res.status(400).send(e)})
}

let Categories = mongoose.model('categories',CategoriesSchema);

module.exports = {Categories}
