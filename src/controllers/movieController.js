const db = require('../database/models');

const controller = {

// Detalle de una pelicula
    detail:(req, res) => {
        db.movies.findAll()
        .then((movies) => {

            let idMovie= req.params.id;
            let foundMovie =null
            let detailMovie = [];
            for (movie of movies){
                
                if(movie.id==idMovie){
                    // let rutaImg = "/img/"+ movie.imagen
                        let movieHome ={
                            id: movie.id,
                            nombre: movie.title,
                            year: movie.year,
                        }
                    detailMovie.push(movieHome);
                    foundMovie= movie;
                    break;    
                }   
            }
            console.log(detailMovie) 
            
            res.render("movies/detail.ejs",{movie: foundMovie})
        }
        //  else {
        //     res.render('movies/404', { 
        //         message: {
        //             class: 'error-message',
        //             title: 'Inexistente',
        //             desc: 'El movie que buscas ya no existe y tal vez nunca exista.'
        //         }
        //     });
        // }
        )
    },

    //Redirecciona a la vista de crear una pelicula
     create: (req, res) => {
         res.render('movies/create');
     },

     //Crear una pelicula
    store: (req, res) => {
        db.movies.create({
            title: req.body.title,
            description: req.body.description,
            year: req.body.year,
    }); 
        res.redirect("/home")
        console.log(movieNuevo)
        //res.redirect('movies/' + productId);
    },

    //Redirecciona a la vista de la pelicula a editar
    edit: (req, res) => {
        db.movies.findAll()
        .then((movies) => {
        let idMovie= req.params.id;
        for(let movie of movies){
            if (movie.id== idMovie){
                foundMovie= movie;
                break;
            }
        }
        console.log(foundMovie)
        res.render("movies/edit.ejs",{movie: foundMovie})
    })     
        // } else {
        //     res.render('movies/404', { 
        //         message: {
        //             class: 'error-message',
        //             title: 'Inexistente',
        //             desc: 'El movie que buscas ya no existe, nunca existió y tal vez nunca exista.'
        //         }
        //     });
        // }
    },

    //Edita la pelicula y guarda los nuevos cambios
    update:(req, res)=>{
    
        let movieEdit = req.body;
        let idMovie = req.params.id;
    
            db.movies.update(
                {
                title: movieEdit.title,
                description: movieEdit.description,
                year: movieEdit.year,
                }, 

            { where: {id: idMovie} }

            ).then(()=>{
                res.redirect("/home")
            })
    },
    
    destroy:(req, res)=>{
        let idMovie= req.params.id;
            db.movies.destroy (
                { where: {id: idMovie} })
                .then(()=>{
                    res.redirect("/home")
                })
    },
}

module.exports = controller;