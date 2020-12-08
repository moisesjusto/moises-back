const Notas = {};


// modelo
const Notes= require('../model/ModelNotes');

Notas.GetNotes= async (req,res)=>{
    const id = req.params.id;
    const ID = {dueño: id}
    const Res = await Notes.find(ID)
    res.json(Res);
};
 

Notas.PostNotes= async (req,res)=>{
    const {name,precio,dueño,url,categoria,descripsion,id}= req.body;
    const O = await Notes.find({id})
    if (O.length === 0) {
        const notas = new Notes({name,precio,dueño,url,categoria,descripsion,id});
        await notas.save(); 
        res.send('ok');
    } else {
        res.send(null);
    }
    
};


Notas.PutNotes= async (req,res)=>{
    const {name,precio,dueño,url,categoria,descripsion,id}=req.body;
    const IID = req.params.id;
    await User.findOneAndUpdate(IID,{name,precio,dueño,url,categoria,descripsion,id});
    res.send(console.log('ok'));
};


Notas.DeleteNotes= async(req,res)=>{
    const IID = req.params.id;
    const ID ={dueño:IID};
    await Notes.deleteMany(ID)
    res.send('removido');
};
 Notas.DeleteNotesP= async(req,res)=>{
    const ID = req.params.id;
    await Notes.findByIdAndDelete(ID)
    res.send('removido');
}; 


module.exports = Notas;