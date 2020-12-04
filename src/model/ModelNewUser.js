const { Schema, model } = require('mongoose');


const Userr = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    provincia: { type: String, required: true },
    sector: { type: String, required: true },
    calle: { type: String, required: true },
    tel: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = model('Users', Userr);