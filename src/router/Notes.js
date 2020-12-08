const { Router } = require('express');
const Ruta = Router();

//controladores
const { GetNotes, PostNotes, PutNotes, DeleteNotes , DeleteNotesP  } = require('../controllers/contronotas');

Ruta.get('/Notes/:id', GetNotes);
Ruta.post('/Notes', PostNotes);
Ruta.put('/Notes/:id', PutNotes);
Ruta.delete('/Notes/:id', DeleteNotes);
Ruta.delete('/Notes/P/:id', DeleteNotesP);


module.exports = Ruta;