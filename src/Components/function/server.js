

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
    host: "smtp.hostinger.com",
    port: 587,
    secure: false,
    auth: {
      user: "kaamil@larangel.com",
      pass: "Sujitha312@",
    },
  });

  var mailOptions = {
    from: "kaamil@larangel.com", // sender address
    to: 'kaamil312@gmail.com', // list of receivers
    subject: req.body.subject, // Subject line
    text: 'Hi from your nodemailer project'
   
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });
});

     

// listen to the port
app.listen(9000, () => {
  console.log("server start on port 9000");
});



