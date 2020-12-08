const {Router}= require('express');
const Ruta = Router();

//controladores
const {GetUser,PostUser,PutUser,DeleteUser,GetUserID, GetUserP,}= require('../controllers/ControNewUser');


Ruta.get('/User/:id',GetUserP);
Ruta.post('/User',GetUser);
Ruta.post('/UserID',GetUserID);
Ruta.post('/NewUser',PostUser);
Ruta.put('/NewUser/:id',PutUser);
Ruta.delete('/NewUser:/:id',DeleteUser);

module.exports = Ruta;