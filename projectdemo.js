const express=require('express');
const app = express();
const path=require('path');

// data  formater
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// static file viewing in public folder
app.use(express.static(path.join(__dirname,'public')));
// ejs setting
app.set('view engine','ejs');

// routing
app.get('/',function (req,res) {
res.render('index');
});
// dynamic routing by using : (exp 1)
app.get('/hi/:username',function (req,res) {
    res.send(`welcome, ${req.params.username}`);
    });
    // dynamic routing by using : (exp 2)
app.get('/hi/:username/:age',function (req,res) {
    res.send(`Myself, ${req.params.username} my age is ${req.params.age} `);
    });

app.listen(3000,function() {
    console.log('its worked');
});