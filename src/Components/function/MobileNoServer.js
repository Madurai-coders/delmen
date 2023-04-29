const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const path = require("path");
const buildPath = path.join(__dirname, "..", "build");
app.use(express.json());
app.use(express.static(buildPath));

app.post("/Requests", (req, res) => {
  console.log(req.body);

  var transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
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
    <h4 style="color:white;">You have got a Callback Request from your website delmennets.in</h4>
    </div>
    <div style="border-style: ridge">
    <ul style="list-style-type:none;line-height:20px">
        <li>Product Name: ${req.body.name}</li> 
        <li>  Mobile Number: ${req.body.No}</li> 
        </ul>
  </body>
</html>`;

  var mailOption = {
    from: "kaamil@larangel.com", // sender address
    to: "nilapriya5517@gmail.com", // list of receivers
    subject: " You have a new Callback Request", // Subject line
    html: emailBody,
  };

  transporter.sendMail(mailOption, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      res.json({ status: true, respMesg: "Email Sent Successfully" });
    }
  });
});

// listen to the port
app.listen(9000, () => {
  console.log("server start on port 9000");
});
