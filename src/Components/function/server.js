const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use(cors());
const path = require("path");
const buildPath = path.join(__dirname, "..", "build");
app.use(express.json());
app.use(express.static(buildPath));

app.post("/users", (req, res) => {
  console.log(req.body);

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
      user: "kaamil@larangel.com",
      pass: "Sujitha312@",
    },
  });

  const emailBody = `<html>
  <body>

    <div style="padding:0px 20px;">
    <h3 style="color:white;">Hi Sir,</h3>
    <h4 style="color:white;">You have got a customer inquiry from your website delmennets.in</h4>
    <p>Customer details are as follows</p></div>

    <div style="border-style: ridge">
    <ul style="list-style-type:none;line-height:20px">
        <li>Email: ${req.body.email}</li> 
        <li>  Mobile Number: ${req.body.no}</li> 
        </ul>
        <h4 style="margin-left:10px;color:white"> Customer Request is as follows</h4>
        <h4 style="padding:0 30px">${req.body.subject}</h4> 
    </div>
    
    <p style="color:white;line-height:10px">Regards,</p>
    <p  style="color:white;line-height:10px">Larangel</p>
    <p  style="color:white;line-height:10px">Your web technology partner</p>
  
  </body>
</html>`;

  var mailOptions = {
    from: "kaamil@larangel.com", // sender address/no reply mail id
    to: "nilapriya5517@gmail.com", // list of receivers/delmen mail id
    subject: "You have a new Contact Request",
    html: emailBody,
    attachments: [...arr],
  };

  var ClientmailOptions = {
    from: "kaamil@larangel.com", // sender address
    to: req.body.email, // list of receivers
    subject: "Request Confirmation from Delmen",
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
