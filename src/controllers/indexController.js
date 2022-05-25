const db = require('../database/models');

const controlador= {

    index:(req, res)=>{
        db.movies.findAll()
        .then((movies) => {
            let listMovies = [];
            for (movie of movies){
                
             //   let rutaImg = "/img/"+ producto.imagen
                let moviesHome ={
                    id: movie.id,
                    title: movie.title,
                    year: movie.year,
                }
                listMovies.push(moviesHome);
            }            
            console.log(listMovies)
        res.render("main/index", {movies: listMovies})
    }) 
}}

module.exports= controlador;