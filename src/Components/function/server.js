

const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(cors());
const path = require("path");
const buildPath = path.join(__dirname, "..", "build");
app.use(express.json());
app.use(express.static(buildPath));

app.post("/users", (req, res) => {
  console.log(req.body);
  array.forEach(element => {
    
  });

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
    to: "kaamil312@gmail.com", // list of receivers
   subject:'You have a new Contact Request',
    html: `
    <div style="padding:10px;border-style: ridge">
    <p>New contact request.</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Email: ${req.body.email}</li>
        <li>Mob No: ${req.body.no}</li>
        <li>Subject: ${req.body.subject}</li>
    </ul>
    `,
    attachments: [
        {
        filename: 'img' + ".jpg",
        contentType:  'image/jpeg',
        content: Buffer.from(req.body.image, 'base64'),
        }
    ]
  };

  var ClientmailOptions = {
    from: "kaamil@larangel.com", // sender address
    to: "kaamil312@gmail.com", // list of receivers
    subject:'Request Confirmation from Delmen',

    html: `
    <div style="padding:10px;border-style: ridge">
    <p>I can confirm that we have received your request</p>
    <h3>Your Details</h3>
    <ul>
        
        <li>Mob No: ${req.body.no}</li>
        <li style="fontsize:11px">Subject: ${req.body.subject}</li>
    </ul>
    `,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      transporter.sendMail(ClientmailOptions, function (err, data) {
        if (err) {
          console.log("Error " + err);
        } else {
          res.json({ status: true, respMesg: "Email Sent Successfully" });
        }
      });
    }
  });
});

// listen to the port
app.listen(9000, () => {
  console.log("server start on port 9000");
});
