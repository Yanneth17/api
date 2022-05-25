const movieController = require("../controllers/movieController");
const express =require("express")
const router = express.Router()
const path = require("path");


// //*** ENRUTADOR PARA DETALLE DE UNA PELICULA***/ 
router.get("/detail/:id", movieController.detail)

//*** ENRUTADOR PARA CREAR UN PRODUCTO DE LA COLECCIÓN***/
router.get("/create", movieController.create)
router.post("/store", movieController.store)

//*** ENRUTADOR PARA EDITAR UN PRODUCTO  DE LA COLECCIÓN***/
router.get("/edit/:id", movieController.edit)
router.put("/edit/:id", movieController.update)

//*** ENRUTADOR PARA BORRAR UN PRODUCTO DE LA COLECCIÓN***/ 
router.delete('/delete/:id', movieController.destroy);

module.exports= router;