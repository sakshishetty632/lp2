const express = require('express');
const path = require('path');
const app =express();
app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
    res.sendFile(('/index.html'));
});
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname +'/public/about.html'));
});
app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname +'/public/signup.html'));
});
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`The Server is running at ${PORT}`);
});