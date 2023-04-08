import "../../CSS/contact/contact.css";
import Navbar from "../Navbar/navbar";
import TextField from "@mui/material/TextField";
import Footer from "../Footer/footer";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

import Lottie from "react-lottie";
import Email from "../Json/Email.json";
function Contact() {
  // const Email = useRef(null);
  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: Email.current,
  //     renderer: "svg",
  //     autoplay: true,
  //     loop: true,
  //     animationData: require("../Json/Email.json"),
  //   });
  // }, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Email,
  };

  const [msg, setMsg] = useState("");
  const [file, setFile] = useState();
  const [errormsg, setErrormsg] = useState(false);
  const [successmsg, setSuccessmsg] = useState(false);

  const [user, setUser] = useState({
    email: "",
    no: "",
    subject: "",
  });

  const { email, no, subject } = user;

  const OnSubmit = async (e) => {
    e.preventDefault();
  
    if (user.email && user.no && user.subject !== "") {
      setUser({
        email: "",
        no: "",
        subject: "",
      });
      setErrormsg(false);
      setSuccessmsg(true);
      setTimeout(() => {
        setSuccessmsg(false);
      }, 4000);
      await axios
        .post("http://localhost:9000/users/", user)
        .then((response) => setMsg(response.data.respMesg));
      console.log(user);
    

    // let fd = new FormData();
    // fd.append('myfile', file);
    // fd.append('email',user.email);
    // fd.append('no',user.no);
    // fd.append('subject',user.subject);

    // let fd = new FormData();
    // fd.append('myfile', file);
    // fd.append('email',user.email);
    // fd.append('no',user.no);
    // fd.append('subject',user.subject);

    axios.post("http://localhost:9000/users", user )
     .then((response) => setMsg(response.data.respMesg));
    // try {
    //   await axios.post("http://localhost:9000/users", { file });
    // }
    // catch (error) {
    //   console.log(error);
    // }
    // }
    
  }

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result.split(',')[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  }
  const  onChange = async(event) => {

    const selectedFile = event.target.files;
    console.log(selectedFile)
//     var base64= await fileToBase64(selectedFile)
//     setUser({...user,image:base64})
//   console.log(base64)
  }

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
                <textarea
                  className="text_area ml-5 mt-2"
                  name="subject"
                  value={user.subject}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      subject: e.target.value,
                    })
                  }
                ></textarea>
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
                      value={user.email}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          email: e.target.value,
                        })
                      }
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
                      value={user.no}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          no: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <input
                multiple 
                name='files[]'
          type='file'
          accept='.jpg, .png, .jpeg'
          onChange={onChange}
        />

                {successmsg && (
                  <div className="Email">
                  <div className="emailbox text-center">
                    <div className="emailsend text-center">
                      <div className="emailanimation mt-3">
                        <Lottie options={defaultOptions}></Lottie>
                      </div>
                      <h5 className="msg mt-3">
                        Your message has been delivered.
                      </h5></div>
                      </div>
                      <div className="sendbox">

                    </div>
                  </div>
                )}

                <div className="row mt-5 cards_row">
                  <div className="col-lg-3 col-md-2 col-sm-2 col-1"></div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-11 text-center mt-3">
                    {errormsg && (
                      <h5 className="errormsg_txt ps-4">
                        Some fields are incorrect. Please check and try again.
                      </h5>
                    )}
                  </div>
                </div>

                <div className="row cards_row">
                  <div className="col-11 text-center">
                    <Button
                      variant="contained"
                      onClick={OnSubmit}
                      type="submit"
                      className="contact_sendinquiry"
                    >
                      Send Inquiry
                    </Button>
                  </div>
                </div>
                <div className="row mt-5 cards_row">
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
