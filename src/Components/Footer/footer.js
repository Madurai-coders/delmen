import "../../CSS/footer/footer.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import CallIcon from "@mui/icons-material/Call";
function Footer() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTab = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className="footer pt-5">
      <div className="row links cards_row">
        <div className="contact_card col-12">
          <div className="d-flex flex-row">
          <div className="col-6">
          <div className="contactcard_des">

            <h3 className="contactcard_title mt-5">Contact Us</h3>
            <h6 className="contactcard_address">
              Mr. L. K. Chandrashekar (Proprietor)
            </h6>
            <h6 className="mt-3 callicon">
              <CallIcon className="CALL" />
              <span className="ms-1 call_no">8035063278</span>
            </h6>
            <h6 className="contactcard_address mt-3">
              No.- 6 First Cross, Raghavendra Layout,<br></br> Silver Spring
              Road, Opp. to Saroj Residency,<br></br>Munekolala, Bengaluru -
              560037,<br></br> Karnataka, India
            </h6>
            </div>
            </div>

            <div className="dealer mt-4 col-6">
            <h4 className="contactcard_tit pt-4 mt-3">Our Authorized Dealer</h4>
            <h6 className="contactcard_addr pt-1">
            Kandaswamy
            </h6>
            <h6 className="callicon1 mt-3 pt-1">
              <CallIcon className="CALL" />
              <span className="ms-1 call_no">9442031069,9442031069</span>
            </h6>
            <h6 className="contactcard_address mt-3">
            AVM Life Style Porur, Chennai
            </h6>
            </div>
            </div>
            <div className="col-lg-10 col-md-11 col-11 text-end contactus_btncol">
            <Link to="/contactus" style={{ textDecoration: "none" }}>
              <button
                type="button"
                className="btn btn-secondary contactus_btn"
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
                <h2 className="company_title">DELMEN MOSQUITO SCREENS</h2>
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
              <h6 className="navbar_list ">Company Profile</h6>
            </Link>
            <Link to="/ourproducts" style={{ textDecoration: "none" }}>
              <h6 className="navbar_list ">Our Product</h6>
            </Link>
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
