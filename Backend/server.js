const express = require('express');
const app = express();
const cors = require("cors");
const path = require('path');
app.use(cors());


require('dotenv').config();
const quotesroute = require('./routes/route');
app.use(express.json());
const port = process.env.PORT || 2000;

// Serve static files from Frontend/Public directory
app.use(express.static(path.join(__dirname, '../Frontend/Public')));

app.use("/api/v1",quotesroute);

// Serve index.html for root route
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../Frontend/Public/index.html'));
});

app.listen(port,()=>{
    console.log("Server is running on port:",port);
})

const dbConnect = require('./config/database');
dbConnect();

const scheduleDailyQuotes = require('./Schedular/dailQuotes');

scheduleDailyQuotes();

