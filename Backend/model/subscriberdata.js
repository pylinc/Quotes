const mongoose = require('mongoose');


const subscribeData = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    subscribed:{
        type:Boolean,
        default:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }

});

module.exports = mongoose.model("subscriber",subscribeData);

