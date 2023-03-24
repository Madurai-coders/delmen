

const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const path = require("path");
const buildPath = path.join(__dirname,  "..", "build");
app.use(express.json());
app.use(express.static(buildPath));

app.post("/users", (req, res) => {
       console.log(req.body)
      
  var transporter = nodemailer.createTransport({
    host: "protonsmtp.hostinger.com",
    port: 587,
    secure: false,

    auth: {
      user: "kaamil@larangel.com",
      pass: "Sujitha312@",
    },
  });

  var mailOptions = {
    from: "nilapriya5517@gmail.com", // sender address
    to: 'suddiselvam11@gmail.com', // list of receivers
    subject: req.body.subject, // Subject line

   
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
res.json({ status: true, respMesg: "Email Sent Successfully" });
    } else {
res.json({ status: true, respMesg: "Email Sent Successfully" });
    }
  });
});

     

// listen to the port
app.listen(9000, () => {
  console.log("server start on port 9000");
});



