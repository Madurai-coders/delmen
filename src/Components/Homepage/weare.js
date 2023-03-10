import "../../CSS/homepage/weare.css";
import Since from "../../assets/HomePage/about.svg";
import { Link } from "react-router-dom";
import '../script/script';
function Weare() {
  return (
    <>
      <div className="weare mt-5">
        <div className="row mt-5 cards_row">
          <div className="col-3">
            <img src={Since} alt="" className="img-fluid"></img>
          </div>
          <div className="col-9">
            <div className="aboutus d-flex flex-column mt-5 pt-5 ms-2">
              <h2 className="about_title mt-5">WHO WE ARE?</h2>
              <div className="about_content mt-4">
                <p className="about_des">
                  We, Delmen Mosquito ScreensTM, started our business in the
                  year 1999. We are the first people to introduce magnetic
                  mosquito nets in India to offer quality products and have
                  become one of the most trusted manufacturers, importers and
                  suppliers of Magnetic Insect Screens and Retractable Roller
                  System for existing Windows and Doors.
                </p>

                <p className="about_des1">
                  We are expertise in designing insects screens, which can be
                  installed over the Windows and Doors to restrict unwanted
                  entry of mosquitoes and insects. In pursuit of excellence, we
                  always perform product development in close interaction with
                  the market and ensure that our products meet the specific
                  requirements of the customers. Our team of product development
                  is on continual mission to review the existing products and
                  improve/substitute them with superior alternatives as
                  available.
                </p>
                <Link
                  to={{
                    pathname: "/advantage",
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <button
                    href="readmore"
                    type="button"
                    className="btn btn-secondary readmore_btn mt-5"
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weare;
