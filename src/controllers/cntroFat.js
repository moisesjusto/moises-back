const Ft = {};


// modelo
const ft= require('../model/modelFat');

Ft.GetFT= async (req,res)=>{
    const Res = await ft.find()
    res.json(Res);
};
Ft.PostFT= async (req,res)=>{
    const {name,precio,dueño,url,categoria,descripsion}= req.body;
    const carr = new ft({name,precio,dueño,url,categoria,descripsion});
    await carr.save();
    res.send('ok');
};

Ft.DeleteFT= async(req,res)=>{
    const IID = req.params.id;
    await ft.findByIdAndRemove(IID);
    res.send('removido');
};

module.exports = Ft;