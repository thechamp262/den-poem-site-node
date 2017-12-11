const mongoose = require('mongoose');
const _ = require('lodash');

let  PoemSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true
  },
  poem:{
    type: String,
    required: true,
    trim: true,
    minlength;: 1,
    unique: true
  },
  categories:{
    type: Number,
    required: true,
    trim: true,
    minlength: 1,
    unique: true
  },
  author:{
    type: Number,
    required: true,
    trim: true,
    minlength: 1,
    unique: true
  },
  createdAt:{
    type: Number,
    required: true,
    trim: true,
    minlength: 1,
    unique: true
  },
  image:{
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true
  },
  active:{
    type: Boolean,
    required: true,
    unique: true
  }
})

PoemSchema.methods.toJSON = ()=>{
  let poem = this;
  let poemObject = poem.toObject();

  return _.pick(poemObject,['_id','poem','title']);
}

PoemSchema.static.grabByCat = (sectionId)=>{
  let poem = this;
  poem.findOne({
    categories:sectionId,
    active: true
  }).then((poem)=>{
    if(!poem){
      return res.status(404).send();
    }
    res.send({poem});
  }).catch((e)=>{
    res.status(404).send();
  })
}

PoemSchema.static.saveNewPoem = (name,poem,categories,image,active)=>{
  let poem = new Poems({
    name,
    poem,
    categories,
    author: 'Denise Roberts',
    createdAt: new Date().getTime();,
    image,
    active
  })

  poem.save().then((doc)=>{
    return res.status(400).send(doc);
  },(e)=>{
    return res.send(e);
  })
}

let Poems = mongoose.model('poems',PoemSchema);

module.exports = {Poems};
