const nodemailer = require('nodemailer');

require('dotenv').config();

const transporter = nodemailer.createTransport({
    host:process.env.MAIL_HOST,
    port:465,
    secure:true,
    auth:{
        user:process.env.MAIL_USER,
        pass:process.env.MAIL_PASS,
    }
});

async function sendMail({to,subject,html}){
    return transporter.sendMail({
        from:`"Daily Quotes" <${process.env.MAIL_USER}>`,
        to,
        subject,
        html,
    });
}

module.exports = {sendMail};