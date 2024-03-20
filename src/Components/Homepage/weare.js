import "../../CSS/homepage/weare.css";
import Since from "../../assets/HomePage/about.svg";
import { Link } from "react-router-dom";
import "../script/script";
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
              <h2 className="about_title mt-5">ABOUT US</h2>
              <div className="about_content mt-4">
                <p className="about_des">
                  Our company, Delmen Mosquito Screens™, was founded in 1999. We
                  are the first in India to introduce magnetic mosquito nets and
                  have since grown to become one of the most reputable
                  manufacturers of magnetic insect screens, retractable roller
                  systems, and sliding and openable systems for windows and
                  doors.
                </p>

                <p className="about_des1">
                  Customized end-to-end solutions for insect screens are offered
                  by Delmen Mosquito Screens. We specialize in installing
                  mosquito screens for doors and windows. We constantly conduct
                  product development in close consultation with the market in
                  an effort to achieve perfection, making sure that our products
                  and services meet the specific requirements of our clients.
                  Our product development team is on a continual mission to
                  review the existing products and improvise them with superior
                  alternatives as available.
                </p>
                <Link
                  to={{
                    pathname: "/Readmore",
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
