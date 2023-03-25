import "../../CSS/contact/contact.css";
import Navbar from "../Navbar/navbar";
import TextField from "@mui/material/TextField";
import Footer from "../Footer/footer";
import React, { useState } from "react";
import axios from "axios";
function Contact() {
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState({
    to: "",
    subject: "",
  });

  const { to, subject } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:9000/users/", user)
      .then((response) => setMsg(response.data.respMesg));
    console.log(user);
  };

  return (
    <>
      <div className="contact">
        <div className="container">
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
                    Tips on getting accurate quotes. Please include product
                    name, order quantity, usage, special requests if any in your
                    inquiry.
                  </p>
                </div>
                <textarea className="text_area ml-5 mt-2"></textarea>
                <h6 className="attachment ml-5 mt-3">+ Add Attachment</h6>

                <div className="row ms-4 mt-4 EMAIL">
                  <div className="col-lg-5 col-md-5 col-sm-5 col-10 ms-3 ">
                    <TextField
                      name="to"
                      id="outlined-basic"
                      fullWidth
                      label="Email"
                      variant="outlined"
                      className="email_input"
                      value={user.to}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="col-lg-5 col-md-5 col-sm-5 col-10 email ms-4">
                    <TextField
                      name="subject"
                      id="outlined-basic"
                      fullWidth
                      label="Mobile No"
                      variant="outlined"
                      className="email_input"
                      value={subject}
                      onChange={onInputChange}
                    />
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-11 text-center mt-3">
                    <button
                      onClick={onSubmit}
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
        </div>
        <div className="mt-5 pt-5">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Contact;
