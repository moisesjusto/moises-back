const { Router } = require('express');
const Ruta = Router();

//controladores
const { GetCar,DeleteCar,PostCar, GetCarID, GetCarProg, } = require('../controllers/controCar');

Ruta.get('/Card', GetCar);
Ruta.get('/Card/prog/:id', GetCarProg);
Ruta.get('/Card/:id', GetCarID);
Ruta.post('/Card', PostCar);

Ruta.delete('/Card/:id', DeleteCar);

module.exports = Ruta;