const cron = require('node-cron');
const subscriber =  require('../model/subscriberdata');
const {getQuotesFromDb} = require('../utils/quoteService');
const {sendMail} = require('../utils/mailer');


function scheduleDailyQuotes() {
    cron.schedule(
        "20 0 * * *",
        async() =>{
            console.log("Daily Quote Scheduler Triggered: ",new Date().toLocaleString());

            try{
                const allSubscriber = await subscriber.find({subscribed:true});
                if(!allSubscriber){
                    console.log("No Subscribers found.");
                    return;
                }

                const quote = await getQuotesFromDb();

                if(!quote){
                    console.log("No Quotes found in the database");
                    return;
                }

                for(let user of allSubscriber){
                    const html = `<div style="font-family: Arial; padding: 20px;">
                            <h2>🌞 Good Morning ${user.name || "Friend"}!</h2>
                            
                            <p style="font-size: 18px; font-style: italic;">
                               "${quote.quote}"
                            </p>

                            <p style="text-align:right; font-weight: bold; margin-top: 10px;">
                                — ${quote.author}
                            </p>

                            <hr style="margin: 20px 0;">
                            <p style="font-size:12px; color:#888;">
                                Daily Quote Service • Automatically delivered at 8 AM
                            </p>
                        </div>
                    `;
                    try{
                        await sendMail({
                            to:user.email,
                            subject:"Your Daily Morning Quote",
                            html
                        });
                        console.log("Quote Send to: ",user.email);
                    }catch(mailErr){
                        console.log("Failed to send to",user.email,"->",mailErr.message);
                    }
                }
            }catch(err){
                console.log("Scheduler Error: ",err.message);
            }
        },
        {timezone:"Asia/Kolkata"}
    );
    console.log("Daily Quote Schduler Initialized at (8 AM IST) ");
}

module.exports= scheduleDailyQuotes;