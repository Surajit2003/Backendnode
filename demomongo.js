const express= require('express');
const app=express();

const userModel=require('./mongoosemodel');
// route
app.get('/',(req,res) => {
res.send('hello');
}
)

// create user
app.get('/create', async (req,res) => {
    let created= await userModel.create({
        name:"Hello Helechi",
        stream:"Bba",
        email:"helechi@gmail.com"
        })
        
        res.send(created);
    })
    // update user
    app.get('/update', async (req,res) => {
     let updated =  await userModel.findOneAndUpdate({stream:'Bca'},{name:'Rahul Gandhi'},{new : true})
     res.send(updated);
    })
    // read user
     app.get('/read', async (req,res) => {
       let read = await userModel.find()
        res.send(read);
     })

    // delete user
    app.get('/delete', async (req,res) => {
    let deleted= await userModel.findOneAndDelete({stream:'Bca'});
        res.send('deleted');
    })

app.listen(3000);