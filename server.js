require('dotenv').config()
const express = require("express")
const axios = require('axios').default;
const cors = require("cors")
const bodyParser = require("body-parser")
"use strict";
const nodemailer = require('nodemailer');


const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname+"/public_html"))




app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public_html/index.html")
})

app.post("/new-lead", (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message



    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
    
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
        host: "mail.godoyexd.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.USER, // generated ethereal user
            pass: "THds47uoXRNBQ", // generated ethereal password
        },
        });
    
        // send mail with defined transport object
        let info = await transporter.sendMail({
        from: name+ "<test@godoyexd.com>", // sender address
        to: "cv123760@gmail.com", // list of receivers
        subject: "New Contact request", // Subject line
        text: "Hello world?", // plain text body
        html: "<p><em>name: </em>"+name+"</p><p><em>email: </em>"+email+"</p><p><em>message: </em>"+message+"</p> ", // html body
        });
    
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
    
    main().catch(console.error);})

app.listen(3005, () => {
    console.log("server is running on port 3005")
})