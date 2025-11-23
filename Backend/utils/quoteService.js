const quotesdata = require('../model/quotesdata');

exports.getQuotesFromDb = async () =>{
    const count = await quotesdata.countDocuments();

    if(count===0){
        return null;
    }
    const random = Math.floor(Math.random() * count);
    const quote = await quotesdata.findOne().skip(random);

    return quote;
}