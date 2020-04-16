const express = require('express');
const users = require('./users');
const app = express();

app.use(express.json());

app.get('/users', (req, res)=>{
 
    
    res.status(200).json(users);
    
});


//listening to server
app.listen(4000)
console.log('Server is running at port 4000');
