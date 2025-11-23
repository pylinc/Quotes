const quotesdata = require('../model/quotesdata');

exports.createquotes = async(req,res)=>{
    try{
        const {quote,author} = req.body;

        const response = await quotesdata.create({quote,author});

        res.status(200).json({
            success:true,
            data:response,
            message:"Quote has been created"
        });
    }catch(err){
        console.error(err);
        console.log(err);

        res.status(500).json({
            success:false,
            data:err.message,
            message:"Internal Server Error",
        });
    }
}