const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = ()=>{
    
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Connection is stable");
    }).catch((err)=>{
        console.log("Error hai bhaiya");
        console.error(err);
        process.exit(1);
    })
}

module.exports = dbConnect;