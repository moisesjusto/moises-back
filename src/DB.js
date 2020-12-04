const mongoose = require('mongoose');

const URI =process.env.DB
? process.env.DB
:'mongodb://localhost/shopp';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
})
.then(db => console.log('db conet'))