const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

server.listen(process.env.PORT || 3030);

var nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    port: 645,
    host: "smtp.gmail.com",
    auth: {
        user: "rishirajpandey1977@gmail.com",
        pass: "ihzskexhlcifdajt",
    },
    secure:true,
});