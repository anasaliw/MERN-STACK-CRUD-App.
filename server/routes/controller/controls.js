import User from "../../model/schema.js";

export const add_post=async(req,res)=>{
    const userDetails=req.body;

    const saveUser=new User(userDetails);
    try {
       await saveUser.save();
       res.status(201).json(saveUser); 
       console.log('added to db')
        
    } catch (error) {
        res.status(409).json({message:error.message})
        
    }
    
}

export const getAllUsers= async(req,res)=>{
    try {
        const users=await User.find({});
        res.status(200).json(users);
        console.log('Fetched Users Successfully')       
    } catch (error) {
        res.status(404).json({message:error.message});
    }

}


//Edit Section
export const getSingleData=async(req ,res) => {
    const id=req.params.id;
    try {
        const user=await User.findById(id);
        res.status(200).json(user)
        
    } catch (error) {
        res.status(400).json({message:error.message})        
    }
}

export const editSingleData=async(req,res)=>{
    const user=req.body;
    const editData=new User(user)
try {
    await User.updateOne({_id:req.params.id},editData)
    res.status(201).json(editData);
} catch (error) {
    res.status(409).json({message:error.message});
}
}

//Deleting Section
export const deleteUser=async(req,res)=>{
    try {
        await User.deleteOne({_id:req.params.id})
        res.status(201).json({Delete:'User Delete Successfully '})
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}