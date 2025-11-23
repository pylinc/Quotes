const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    quote:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model("quotesdata",dataSchema);