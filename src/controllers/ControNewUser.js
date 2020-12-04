const Userss = {};


// modelo
const User= require('../model/ModelNewUser');

//getUserPedido
Userss.GetUserP= async (req,res)=>{
    const ID = req.params.id;
    const Res = await User.findById(ID)
    res.json(Res);
};
//getUser
Userss.GetUser= async (req,res)=>{
    const {email,password}= req.body;
    const Res = await User.findOne({email,password})
    res.json(Res);
};

//getUserId
Userss.GetUserID= async (req,res)=>{
    const {_id}= req.body;
    const Res = await User.findOne({_id})
    res.json(Res);
};

//postUser
Userss.PostUser= async (req,res)=>{
    const {email,password,name,lastname,provincia,sector,calle,tel}= req.body;
    const user = new User({email,password,name,lastname,provincia,sector,calle,tel});
    console.log(user);
    await user.save();
    res.json(user);
};

//PutUser
Userss.PutUser= async (req,res)=>{
    const {email,password,name,lastname,provincia,sector,calle,tel,_id}=req.body;
    const OK = await User.findOneAndUpdate(_id,{email,password,name,lastname,provincia,sector,calle,tel});
    await OK.save();
    res.send('ok');
};

//DeleteUser
Userss.DeleteUser= async(req,res)=>{
    const IID = req.params.id;
    await User.findByIdAndRemove(IID);
    res.send('removido');
};


module.exports = Userss;