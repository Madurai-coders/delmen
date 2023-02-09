import "../../CSS/homepage/products.css";
import MultiSlidingDoor from "../../assets/OurProducts/sliding dr.png";
import OpenableSingleDoor from "../../assets/OurProducts/openablesingledoor.png";
import SlidingWindow from "../../assets/OurProducts/slidingwindow.png";
import MagneticNet from "../../assets/OurProducts/magneticnet.png";
import RetractableRollerDoubleDoor from "../../assets/OurProducts/retractablerollerdoubledoor.png";
import MagneticInsectScreens from "../../assets/OurProducts/magneticinsectscreens.png";
import DoubleSlidingDoorWithSingleTrack from "../../assets/OurProducts/doubleslidingdoorwithsingletrack.png";
import RetractableDoubleDoor from "../../assets/OurProducts/retractabledoubledoor.png";
import { Link } from "react-router-dom";
function Products() {
  return (
    <>
      <div className="ourproducts mt-5">
        <div className="row cards_row justify-content-center">
          <div className="col-12 text-center">
            <h2 className="product_title">OUR PRODUCTS</h2>
          </div>
          <div className="col-4 d-flex flex-column pt-5 text-center">
            <div className="product_img ms-5">
              <div class="img-container text-center">
                <Link to="/multislidingdr" style={{ textDecoration: "none" }}>
                  <img
                    src={MultiSlidingDoor}
                    alt=""
                    className="img-fluid mb-5 zoom-img img_1"
                  ></img>
                  <div class="hover-text">multi sliding door</div>
                </Link>
              </div>
              <div class="img-container text-center">
                <Link to="/openablesingledr" style={{ textDecoration: "none" }}>
                  <img
                    src={OpenableSingleDoor}
                    alt=""
                    className="img-fluid mb-4 pt-3 zoom-img pimg_1"
                  ></img>
                  <div class="hover-text">openable single door system</div>
                </Link>
              </div>
              <div class="img-container text-center">
                <Link to="/slidingwindow" style={{ textDecoration: "none" }}>
                  <img
                    src={SlidingWindow}
                    alt=""
                    className="img-fluid  zoom-img pimg_1"
                  ></img>
                  <div class="hover-text">sliding window</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-4 d-flex flex-column pt-5 text-center">
            <div className="product_img">
              <div class="img-container text-center">
                <Link
                  to="/magneticinsectscreens"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={MagneticNet}
                    alt=""
                    className="img-fluid zoom-img pimg_2"
                  ></img>
                  <div class="hover-text">magnetic insect screen</div>
                </Link>
              </div>
              <div class="img-container text-center">
                <Link to="/rollerdoubledoor" style={{ textDecoration: "none" }}>
                  <img
                    src={RetractableRollerDoubleDoor}
                    alt=""
                    className="img-fluid mt-4 pt-3 zoom-img pimg_2"
                  ></img>
                  <div class="hover-text">Retractable roller double Door</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-4 d-flex flex-column pt-5 text-center">
            <div className="product_img">
              <div class="img-container text-center">
                <Link to="/magneticnet" style={{ textDecoration: "none" }}>
                  <img
                    src={MagneticInsectScreens}
                    alt=""
                    className="img-fluid mb-5 pimg_3  zoom-img"
                  ></img>
                  <div class="hover-text txt1">Magnetic net</div>
                </Link>
              </div>
              <div class="img-container text-center">
                <Link to="/slidingdoor" style={{ textDecoration: "none" }}>
                  <img
                    src={DoubleSlidingDoorWithSingleTrack}
                    alt=""
                    className="mb-4 img-fluid  zoom-img pimg_3"
                  ></img>
                  <div class="hover-text txt1"> Sliding door</div>
                </Link>
              </div>
              <div class="img-container text-center">
                <Link
                  to="/doubleslidingwithsingletrack"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={RetractableDoubleDoor}
                    alt=""
                    className="img-fluid pt-1  zoom-img pimg_3"
                  ></img>
                  <div class="hover-text txt1">
                    double sliding door with single track
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
