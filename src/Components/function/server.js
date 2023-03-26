

const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const cors = require("cors");
const multer  = require('multer');
const upload = multer({
  storage: multer.memoryStorage()
});
app.use(cors());
const path = require("path");
const buildPath = path.join(__dirname, "..", "build");
app.use(express.json());
app.use(express.static(buildPath));

app.post("/users",upload.single('myfile'), (req, res) => {
  console.log(req.body);

  var transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 587,
    secure: false,
    auth: {
      user: "delmenclient@larangel.com",
      pass: "Delmen123@",
    },
  });

  var mailOptions = {
    from: "delmenclient@larangel.com", // sender address
    to: "nilapriya5517@gmail.com", // list of receivers
   subject:'You have a new Contact Request',
    html: `
    <div style="padding:10px;border-style: ridge">
    <p>New contact request.</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Email: ${req.body.data.email}</li>
        <li>Mob No: ${req.body.data.no}</li>
        <li>Subject: ${req.body.data.subject}</li>
    </ul>
    `,
    attachments: [{
      filename: req.file.originalname,
      content: req.file.buffer

    }]
  };
  var ClientmailOptions = {
    from: "delmenclient@larangel.com", // sender address
    to: req.body.data.email, // list of receivers
    subject:'Request Confirmation from Delmen',

    html: `
    <div style="padding:10px;border-style: ridge">
    <p>I can confirm that we have received your request</p>
    <h3>Your Details</h3>
    <ul>
        
        <li>Mob No: ${req.body.data.no}</li>
        <li style="fontsize:11px">Subject: ${req.body.data.subject}</li>
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
