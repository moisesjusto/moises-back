const {Schema,model}= require('mongoose');


const FT = new Schema({
    id: {type:String, required:true},
    consumo: {type:String, required:true},
    cantidad: {type:String, required:true},
    descripsio: {type:String, required:true},
    tipoDpag: {type:String, required:true},
},{
    timestamps:true
});

module.exports = model('faturas',FT);