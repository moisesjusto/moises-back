const {Schema,model}= require('mongoose');


const Notes = new Schema({
    id: {type:String},
    name: {type:String},
    precio: {type:String},
    url: {type:String},
    descripsio: {type:String,},
    dueño: {type:String},
    categoria: {type:String},
},{
    timestamps:true
});

module.exports = model('Notes',Notes);