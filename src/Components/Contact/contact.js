import "../../CSS/contact/contact.css";
import Navbar from "../Navbar/navbar";
import TextField from "@mui/material/TextField";
import Footer from "../Footer/footer";
function Contact() {
  return (
    <>
      <div className="contact">
        <Navbar />

        <div className="contacttitle mt-5">
          <h1 className="contactustitle mt-5 pt-5">Contact Us</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-9">
            <div className="contactform">
              <h4 className="contactus_des pl-5 pt-5">
                Describe Your BUYING Requirement
              </h4>
              <div className="des">
              <p className="contactus_detail pl-5">
                Tips on getting accurate quotes. Please include product name,
                order quantity, usage, special requests if any in your inquiry.
              </p>
              </div>
              <textarea className="text_area ml-5 mt-2"></textarea>
              <h6 className="attachment ml-5 mt-3">+ Add Attachment</h6>
              <div className="d-flex flex-row ms-4 mt-4">
                <div className="col-5 email ms-2">
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    label="Email"
                    variant="outlined"
                    className="email_input"
                  />
                </div>
                <div className="col-5 email ms-4">
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
                  <button type="button" className="btn contact_sendinquiry">
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
    </>
  );
}

export default Contact;
