var express = require('express');
var router = express.Router();


const credentials = {
    username: 'admin@gmail.com',
    password: 'admin'
}

router.post('/login',(req,res)=>{
 if(req.body.email === credentials.username && req.body.password === credentials.password){
    req.session.user = req.body.email
    //  res.redirect('/dashboard');
     res.end('login succesfull')
 }else{
        res.end('Invalid Username or Password');
 }
})

module.exports = router;