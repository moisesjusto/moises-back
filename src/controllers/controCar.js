const Card = {};


// modelo
const card= require('../model/modelCar');

Card.GetCar= async (req,res)=>{
    const Res = await card.find(); 
    res.json(Res);
};

Card.GetCarProg= async (req,res)=>{
    const ID = req.params.id;
    const Res = await card.findById(ID); 
    res.json(Res);
};

Card.GetCarID= async (req,res)=>{
    const IID = req.params.id;
    const ID = {dueño:IID}
    const Res = await card.find(ID)
    res.json(Res);
};

Card.PostCar= async (req,res)=>{
    const {arr,dueño}= req.body;
    const O = {arr:arr,dueño};
    const carr = new card(O);
    await carr.save();
    res.send('ok');
};


Card.DeleteCar= async(req,res)=>{
    const IID = req.params.id;
    await card.findByIdAndRemove(IID);
    res.send('removido');
};

module.exports = Card;