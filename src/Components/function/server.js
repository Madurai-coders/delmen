const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const path = require("path");
const buildPath = path.join(__dirname, "..", "build");
app.use(express.json());
app.use(express.static(buildPath));

app.post("/users", (req, res) => {
  console.log(req.body);

  var transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 587,
    secure: false,
    auth: {
      // user: "kaamil@larangel.com",
      // pass: "Sujitha312@",
      user: "delmenclient@larangel.com",
      pass: "Delmen123@",
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
    from: "delmenclient@larangel.com", // sender address
    to: "nilapriya5517@gmail.com", // list of receivers
    subject: "You have a new Contact Request", // Subject line
    html: emailBody,
  };
  var ClientmailOptions = {
    from: "delmenclient@larangel.com", // sender address
    to: req.body.email, // list of receivers
    subject: "Request Confirmation from Delmen",

    html: `    <div style="padding:5px 10px;background-color:#1c1c1c">
    <h3 style="color:white;">Dear Customer,</h3>
    <h3 style="color:white;">Thanks for reaching out to Delmen nets.</h3>
    <h3 style="color:white;">Your request has been received and our team will get back to you as soonas possible.</h3>
    <p style="color:white;line-height:6px;padding-top:20px">Regards,</p>
    <p  style="color:white;line-height:6px">Delmen nets</p></div>
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
