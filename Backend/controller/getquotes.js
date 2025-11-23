const quotesdata = require('../model/quotesdata');

exports.getQuotes = async (req,res)=>{

    try{

        const quotes = await quotesdata.find();
    
        if(!quotes.length){
            return res.status(404).json({
                success:false,
                message:"No Quotes in the Databse"
            });
        }
        // console.log(quotes);
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        console.log(quote);
        res.json({
            success:true,
            message:quote.quote,
            author:quote.author
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:"Server Error"
        });
    }
}