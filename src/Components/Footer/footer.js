import "../../CSS/footer/footer.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Footer() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTab = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className="footer pt-5">
      <div className="row links cards_row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 contact_card text-center">
          <div className="contactcard_des">
            <h2 className="contactcard_title mt-5">Contact Us</h2>
            <h6 className="contactcard_address">
              Mr. L. K. Chandrashekar (Proprietor)
            </h6>
            <h6 className="contactcard_address mt-3">
              No.- 6 First Cross, Raghavendra Layout, Silver Spring<br></br>{" "}
              Road, Opp. to Saroj Residency, Munekolala, Bengaluru<br></br> -
              560037, Karnataka, India
            </h6>
            <Link to="/contactus" style={{ textDecoration: "none" }}>
              <button
                type="button"
                className="btn btn-secondary contactus_btn mt-3"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 col-12">
          <div className="footer_content">
            {isTab && (
              <>
                <h2 className="company_title">
                  DELMEN MOSQUITO<br></br> SCREENS
                </h2>
              </>
            )}
             {isMobile && (
              <>
                <h2 className="company_title">
                  DELMEN MOSQUITO SCREENS
                </h2>
              </>
            )}
            <p className="footer_txt mt-4">
              "We are accepting local inquiries<br></br> mostly from Tamil Nadu
              &<br></br>
              Karnataka."
            </p>
          </div>
        </div>
        <div className="col-lg-7 col-md-7 col-sm-12 col-12">
          <div className="link">
            <Link to="/" style={{ textDecoration: "none" }}>
              <h6 className="navbar_list ms-5 mt-4 ">Home</h6>
            </Link>
            <Link to="/companyprofile" style={{ textDecoration: "none" }}>

            <h6 className="navbar_list ">Company Profile</h6></Link>
            <Link to="/ourproducts" style={{ textDecoration: "none" }}>

            <h6 className="navbar_list ">Our Product</h6></Link>
            <Link to="/contactus" style={{ textDecoration: "none" }}>
              <h6 className="navbar_list">Contact us</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
