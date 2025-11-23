const express = require('express');
const app = express();

require('dotenv').config();
const quotesroute = require('./routes/route');
app.use(express.json());
const port = process.env.PORT || 2000;

app.listen(port,()=>{
    console.log("Server is running on port:",port);
})

app.use("/api/v1",quotesroute);
app.use('/',(req,res)=>{
    // res.send('index.html');
    res.send("<h1>This is home page</h1>");
});

const dbConnect = require('./config/database');
dbConnect();

const scheduleDailyQuotes = require('./Scheduler/dailQuotes');

scheduleDailyQuotes();

