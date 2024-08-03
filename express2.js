// data using json format from form data using postman
app.use(express.json());

// data using ejs format
app.use(express.urlencoded({extended:true}));

