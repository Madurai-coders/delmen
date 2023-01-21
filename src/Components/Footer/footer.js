import "../../CSS/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="row links">
        <div className="col-12 contact_card text-center">
          <div className="contactcard_des">
            <h2 className="contactcard_title mt-5">Contact Us</h2>
            <h6 className="contactcard_address">
              Mr. L. K. Chandrashekar (Proprietor)
            </h6>
            <h6 className="contactcard_address mt-3">
              No.- 6 First Cross, Raghavendra Layout, Silver Spring<br></br> Road, Opp.
              to Saroj Residency, Munekolala, Bengaluru<br></br> - 560037, Karnataka,
              India
            </h6>
            <button type="button" className="btn btn-secondary contactus_btn mt-3">Contact Us</button>
          </div>
          
          
        </div>
        <div className="col-5">
          <div className="footer_content">
            <h2 className="company_title">
              DELMEN MOSQUITO<br></br> SCREENS
            </h2>
            <p className="footer_txt mt-4">
              "We are accepting local inquiries<br></br> mostly from Tamil Nadu
              &<br></br>
              Karnataka."
            </p>
          </div>
        </div>
        <div className="col-7">
          <div className="link">
            <h6 className="navbar_list ms-5 mt-4 ">Home</h6>
            <h6 className="navbar_list ">Company Profile</h6>
            <h6 className="navbar_list ">Our Product</h6>
            <h6 className="navbar_list">Contact us</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
