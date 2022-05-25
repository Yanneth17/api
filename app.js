const indexRoutes = require('./src/routes/indexRoutes');  //Enrutador
const moviesRoutes = require('./src/routes/moviesRoutes');  //Enrutador
const express = require('express');
const path = require('path');
const ejs = require('ejs')
const methodOverride =  require('method-override'); //Pasar poder usar los métodos PUT y DELETE sobreescribiendo el método POST

const app = express();

app.set('view engine', 'ejs'); // View Engine - Seteo el motor de plantillas ejs

app.use(express.static(path.join(__dirname,'./public'))); //Public estatica 
app.use(express.static(path.resolve(__dirname, './views'))); //views estatica 

app.use(express.urlencoded({ extended: true })); //Especifica transferencia de información por el body en peticiones 
app.use(express.json()); // Instalacion de express.json Metodo POST

app.use(methodOverride('_method')); // instalación del metodo Override Método PUT Y DELETE

app.use("/", indexRoutes)
app.use("/movies", moviesRoutes)

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, '/views/index.html'))
// })

app.get('/home', (req,res) =>{
    res.send("Hola, estamos en el home");
});

app.listen(3009, function() { 
    console.log("Servidor con Express en el puerto 3009")
}); //Levantar el servidor en un puerto especifico 

