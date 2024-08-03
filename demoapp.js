const express=require('express');
const app=express();
const path=require('path');
const userModel=require('./models/user');
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res) =>{
  res.render('demoscript');  
})

app.get('/read',(req,res) =>{
  res.render('read');  
})

app.post('/create', async (req,res) =>{
let {name,image,email} = req.body;
let create = await userModel.create({
  name:name,
  image:image,
  email:email
}) 
res.send(create);
})

app.listen(3000);