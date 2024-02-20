const express = require('express');
const category = require('./routes/category')
const path = require('path'); // Import the path module

// Create an instance of the express server
const app = express();
//use the middelware body parser in express
app.use(express.json())

app.use('/category' , category)
app.post('/create',(req,res)=>{
    console.log(req.body)
})
app.get('/products' ,(req,res)=>{
    res.send([{id:1,name:"sachin"},{id:2,name:"saurv"}])

})
app.get('/template' ,(req,res)=>{
    res.redirect('/products')

})

app.get('/', function(req, res) {
    // res.send("<h1>hello world</h1>")
    // res.send({id:1,name:"sachin"})
    // res.json({id:1,name:"sachin"})  
    //res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(5000, () => {
    console.log("First server is running on port 5000");
});
