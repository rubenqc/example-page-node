const express = require('express');
const router = express.Router();

//Rutas

router.get('/',(req,res)=>{
    //console.log(__dirname) //__dirname nos da la direccion del archivo que lo ejecuta

    // res.sendFile(path.join(__dirname,'views/index.html')); //Esto es para enviar archivos html si queremos enviar archivo ejs se tiene que usar res.render 
    res.render('index.html',{title: 'First Website'}); //al usar render el sabe que ya estamos usando la extension ejs

});

router.get('/contact',(req,res)=>{
    //console.log(__dirname) //__dirname nos da la direccion del archivo que lo ejecuta

    // res.sendFile(path.join(__dirname,'views/index.html')); //Esto es para enviar archivos html si queremos enviar archivo ejs se tiene que usar res.render 
    res.render('contact.html',{title: 'Contact Page'}); //al usar render el sabe que ya estamos usando la extension ejs

});

module.exports = router;