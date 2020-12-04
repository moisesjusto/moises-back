const {Router}= require('express');
const Ruta = Router();

//controladores
const {GetFT,DeleteFT,PostFT}= require('../controllers/cntroFat');

Ruta.get('/FT',GetFT);
Ruta.post('/FT',PostFT);
Ruta.delete('/FT',DeleteFT);


module.exports = Ruta;