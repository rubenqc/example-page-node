const express = require('express');
const app = express(); //esta constante app en realidad es el servidor.
const path = require('path'); //el modulo path esta preparado para trabajar con directorios, lo que hace es unir directorios y depues verifica si esta en windows o linux


//Configuraciones
app.set('port',3000);
app.set('views', path.join(__dirname+'/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs'); //view engine: es motor de vista o motor de plantilla
                               //no necesito importar 'ejs' es por lo general express tiene una integracion con ejs, y como es un motor de plantilla que el ya conoce, ya no es necesario instanciarlo

//Middleware

// Rutas
app.use(require('./routes/index'));

//Archivos estaticos

app.use(express.static(path.join(__dirname,'/public'))); //publicar esta carpeta public desde el navegador, aqui podriamos incluir fotos, videos, cualquier archivo que el navegador pueda pedir y pueda obtener


//Escuchando el servidor
app.listen(app.get('port'), () => { //Este el numero del puerto donde esta levantado el servicio
    console.log('Servidor en puerto ',app.get('port'));
});