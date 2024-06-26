import "../../CSS/footer/footer.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import CallIcon from "@mui/icons-material/Call";
function Footer() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTab = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className="footer">
      <div className="container">
        <div className="row links cards_row">
          <div className="contact_card col-12">
            <div className="d-flex flex-row p-0 m-0">
              <div className="col-5">
                <div className="contactcard_des ms-5 ps-3">
                  <h3 className="contactcard_title mt-5">Contact Us</h3>
                  <h5 className="contactcard_tit pt-4 mt-3">
                    <p>
                      <b>Delmen Mosquito screens</b>
                    </p>
                    <p>Mr. L. K. Chandrasekar (Proprietor)</p>
                  </h5>
                  <h6 className="mt-3 callicon">
                    <CallIcon className="CALL" />
                    <span className="ms-1 call_no">9845374254</span>
                  </h6>
                  <h6 className="contactcard_address mt-3">
                    No. 6, First Cross, Raghavendra Layout,<br></br> Silver
                    Spring Road, Munekolala, Marathahalli,<br></br> Opp. to Saroj
                    Residency, Bengaluru, Karnataka 560037
                  </h6>
                </div>
              </div>

              <div className="dealer mt-4 col-3 me-3 p-0">
                <h6 className="contactcard_tit pt-4 mt-3">
                  Delmen Mosquito screens Branch Office
                </h6>
                <h6 className="contactcard_addr pt-1">Nanjappa</h6>
                <h6 className="callicon1 mt-3 pt-1">
                  <CallIcon className="CALL" />
                  <span className="ms-1 call_no">8095116488</span>
                </h6>
                <h6 className="contactcard_address mt-3">
                  31, 1st Block, 2nd Main, Bhavani Layout<br></br>
                  Banashankari 3rd stage,<br></br>Bangalore-560085
                </h6>
              </div>

              <div className="dealer mt-4 col-3 p-0">
                <h6 className="contactcard_tit pt-4 mt-3">
                  Our Authorized Dealer
                </h6>
                <h6 className="contactcard_addr pt-1">Kandaswamy</h6>
                <h6 className="callicon1 mt-3 pt-1">
                  <CallIcon className="CALL" />
                  <span className="ms-1 call_no">8056035572</span>
                </h6>
                <h6 className="contactcard_address mt-3">
                  AVM Life Style Porur,<br></br>
                  147A Roja street, Sathya narayana puram,
                  Mowlivakkam, Porur
                </h6>
              </div>
            </div>
            <div className="col-lg-10 col-md-11 col-12 text-end contactus_btncol">
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
        </div>
        <div className="row cards_row">
          <div className="col-lg-6 col-md-5 col-sm-12 col-12">
            <div className="footer_content">
              {isTab && (
                <>
                  <h2 className="company_title">
                    DELMEN MOSQUITO SCREENS
                  </h2>
                </>
              )}
              {isMobile && (
                <>
                  <h2 className="company_title">DELMEN MOSQUITO SCREENS</h2>
                </>
              )}
              <p className="footer_txt">
                "We are accepting local inquiries mostly from Tamil
                Nadu & Karnataka"
              </p>
            </div>
          </div>
        </div>
        <div className="row cards_row">
          <div className="col-lg-7 col-md-7 col-sm-12 col-12">
            <div className="link">
              <Link to="/" style={{ textDecoration: "none" }}>
                <h6 className="navbar_list ms-5">Home</h6>
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
    </div>
  );
}

export default Footer;
