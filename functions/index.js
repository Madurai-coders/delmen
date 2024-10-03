const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());


  const noreplyId= process.env.REACT_APP_NO_REPLY_MAIL
  const enquiryId= process.env.REACT_APP_ENQUIRE_ID
  const  noreplyPass = process.env.REACT_APP_NO_REPLY_PASS



app.post("/users", (req, res) => {
  var arr = [];
  var files = req.body.attachment;

  for (let i = 0; i < files.length; i++) {
    arr.push({
      ...files[i],
      content: Buffer.from(files[i].content, "base64"),
    });
  }

  var transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 587,
    secure: false,
    auth: {
      user: noreplyId,
      pass: noreplyPass,
    },
  });

  const emailBody = `<html>
    <body>
      <div style="padding:0px 20px;">
        <h3>Hi Sir/Madam,</h3>
        <h4>You have got a customer inquiry from your website delmennets.in</h4>
        <p>Customer details are as follows:</p>
      </div>
      <div style="border-style: ridge">
        <ul style="list-style-type:none;line-height:20px">
          <li>Email: ${req.body.email}</li> 
          <li>Mobile Number: ${req.body.no}</li> 
        </ul>
        <h4>Customer Request:</h4>
        <h4>${req.body.subject}</h4>
      </div>
      <p>Regards,</p>
      <p>Larangel</p>
      <p>Your web technology partner</p>
    </body>
  </html>`;

  var mailOptions = {
    from: noreplyId,
    to: enquiryId,
    subject: "You have a new Contact Request",
    html: emailBody,
    attachments: [...arr],
  };

  var ClientmailOptions = {
    from: noreplyId,
    to: req.body.email,
    subject: "Request Confirmation from Delmen",
    html: `
      <div style="padding:10px;border-style: ridge">
        <p>I can confirm that we have received your request</p>
        <h3>Your Details</h3>
        <ul>
          <li>Mob No: ${req.body.no}</li>
          <li>Subject: ${req.body.subject}</li>
        </ul>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
      res.status(500).json({ status: false, error: err });
    } else {
      transporter.sendMail(ClientmailOptions, function (err, data) {
        if (err) {
          console.log("Error " + err);
          res.status(500).json({ status: false, error: err });
        } else {
          res.json({ status: true, respMesg: "Email Sent Successfully" });
        }
      });
    }
  });
});

app.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sitemap.xml'));
});

exports.api = functions.https.onRequest(app);
