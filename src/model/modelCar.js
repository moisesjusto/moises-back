const {Schema,model}= require('mongoose');


const Card = new Schema({
    dueño: {type:String},
    arr: {type:Array}
   /*  name: {type:String},
    precio: {type:String},
    url: {type:String},
    descripsio: {type:String},
    categoria: {type:String}, */
},{
    timestamps:true
});


module.exports = model('Card',Card);