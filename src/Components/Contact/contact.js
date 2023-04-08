import "../../CSS/contact/contact.css";
import Navbar from "../Navbar/navbar";
import TextField from "@mui/material/TextField";
import Footer from "../Footer/footer";
import React, { useState } from "react";
import axios from "axios";
function Contact() {
  const [msg, setMsg] = useState("");
  const [file, setFile] = useState();

  const [user, setUser] = useState({
    email: "",
    no: "",
    subject: "",
  });

  const { email, no, subject } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // await axios
    //   .post("http://localhost:9000/users/", user)
    //   .then((response) => setMsg(response.data.respMesg));
    // console.log(user);
  

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
