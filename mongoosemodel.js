const mongoose= require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/mongoprac`);
const Schema=mongoose.Schema({
    name:String,
    stream:String,
    email:String
})
 module.exports=mongoose.model('user',Schema);