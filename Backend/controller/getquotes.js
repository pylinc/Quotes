const quotesdata = require('../model/quotesdata');

exports.getQuotes = async (req,res)=>{

    try{
        const quotes = await quotesdata.find();
    
        if(!quotes.length){
            return res.status(404).json({
                message:"No Quotes in the Database"
            });
        }

        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];

        res.json({
            quote: quote?.quote || "No Quote Found",
            author: quote?.author || "Unknown"
        });

    }catch(error){
        return res.status(500).json({
            message:"Server Error"
        });
    }
}
