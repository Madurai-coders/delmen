import "../../CSS/contact/contact.css";
import Navbar from "../Navbar/navbar";
import TextField from "@mui/material/TextField";
import Footer from "../Footer/footer";
import React, { useState } from "react";
import axios from "axios";

function Contact() {
  // const [msg, setMsg] = useState("");
  // const [user, setUser] = useState({
  //   to: "",
  //   subject: "",
  //   description: "",
  // });

  // const { to, subject, description } = user;
  // const onInputChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   await axios
  //     .post("http://localhost:5000/users/", user)
  //     .then((response) => setMsg(response.data.respMesg));
  // };
  return (
    <>
      <div className="contact">
        <Navbar />

        <div className="contacttitle mt-5" id="email-form">
          <h1 className="contactustitle mt-5 pt-5">Contact Us</h1>
        </div>
        <div className="row justify-content-center cards_row">
          <div className="col-lg-9 col-md-10 col-sm-11 col-11">
            <div className="contactform">
              <h4 className="contactus_des pl-5 pt-5">
                Describe Your BUYING Requirement
              </h4>
              <div className="des">
                <p className="contactus_detail pl-5">
                  Tips on getting accurate quotes. Please include product name,
                  order quantity, usage, special requests if any in your
                  inquiry.
                </p>
              </div>
              <textarea className="text_area ml-5 mt-2"></textarea>
              <h6 className="attachment ml-5 mt-3">+ Add Attachment</h6>

              <div className="row ms-4 mt-4 EMAIL">
                <div className="col-lg-5 col-md-5 col-sm-5 col-10 ms-3 ">
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    label="Email"
                    variant="outlined"
                    className="email_input"
                  />
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5 col-10 email ms-4">
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    label="Mobile No"
                    variant="outlined"
                    className="email_input"
                  />
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-11 text-center mt-3">
                  <button
                    type="submit"
                    className="btn contact_sendinquiry"
                  >
                    Send Inquiry
                  </button>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12 text-center">
                  <h6 className="contactus_txt">
                    "We are accepting local inquiries mostly from Tamil Nadu &
                    Karnataka."
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 pt-5">
          <Footer />
        </div>
      </div> 
      {/* <form id="contact-form">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required></input>

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required></input>

        <label for="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>

      <div id="message-container"></div> */}
{/* 
      <div className="container">
        <h3 className="text-center text-success mb-2 mt-4">
          Email Send using React and Node{" "}
        </h3>
        <h6 className="text-secondary text-center mb-4 mt-1">
          By Improve Programming Logic
        </h6>
        <div class="row">
          <div className="col-sm-4 mx-auto shadow p-5">
            <h4 className="text-center mb-2">Send E Mail </h4>
            <p class="mb-3 mt-2" style={{ color: "green", marginLeft: "57px" }}>
              <b>{msg}</b>
            </p>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="To"
                name="to"
                onChange={onInputChange}
                value={user.to}
              />
            </div>
            <div className="form-group  mb-4 ">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Subject"
                name="subject"
                onChange={onInputChange}
                value={subject}
              />
            </div>
            <div className="form-group  mb-4">
              <textarea
                type="text"
                className="form-control form-control-lg"
                placeholder="Description"
                name="description"
                onChange={onInputChange}
                value={description}
              />
            </div>

            <button
              onClick={onSubmit}
              className="btn btn-primary btn-block "
              style={{ marginLeft: "100px" }}
            >
              Send Mail
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Contact;
