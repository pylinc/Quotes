const subscriber = require('../model/subscriberdata');

exports.subscribeController = async (req,res)=>{
    try{

        const {name,email} = req.body;
        
        const user = await subscriber.create({
            name,email
        });
    
        res.json({
            success:true,
            message:"You are Subscribe to daily quotes."
        });
        
    }catch(err){
        res.status(400).json({
            success:false,
            message:err.message,
        });
    }
}