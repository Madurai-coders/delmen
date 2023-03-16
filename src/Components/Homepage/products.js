import "../../CSS/homepage/products.css";
import MultiSlidingDoor from "../../assets/Windows Accessories/MultiSlidingDoor.png";
import OpenableSingleDoor from "../../assets/OurProducts/openablesingledoor.png";
import SlidingWindow from "../../assets/Windows Accessories/rollerwindow.png";
import MagneticNet from "../../assets/OurProducts/magneticnet.png";
import RetractableRollerDoubleDoor from "../../assets/OurProducts/retractablerollerdoubledoor.png";
import DoubleSlidingDoorWithSingleTrack from "../../assets/OurProducts/doubleslidingdoorwithsingletrack.png";
import RetractableDoubleDoor from "../../assets/OurProducts/retractabledoubledoor.png";
import Openabledbdr from '../../assets/Retractable Double Door/OpenableDoubleDoor.png';
import OpenableMulti from '../../assets/Retractable Double Door/multifolddoor.png'
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
                <Link to="/stainlesssteelwithmesh" style={{ textDecoration: "none" }}>
                  <img
                    src={MagneticNet}
                    alt=""
                    className="img-fluid zoom-img"
                  ></img>
                  <div class="hover-text">Magnetic Net</div>
                </Link>
              </div>
              <div class="img-container text-center">
                <Link to="/openablesingledr" style={{ textDecoration: "none" }}>
                  <img
                    src={OpenableSingleDoor}
                    alt=""
                    className="img-fluid mt-4 zoom-img"
                  ></img>
                  <div class="hover-text">openable single door system</div>
                </Link>
              </div>
              <div class="img-container text-center">
                <Link to="/multislidingdr" style={{ textDecoration: "none" }}>
                  <img
                    src={MultiSlidingDoor}
                    alt=""
                    className="img-fluid mt-4 zoom-img"
                  ></img>
                  <div class="hover-text">Multi Sliding Door</div>
                </Link>
              </div>
             
            </div>
          </div>
          <div className="col-4 d-flex flex-column pt-5 text-center">
            <div className="product_img">
            <div class="img-container text-center">
                <Link to="/slidingwindow" style={{ textDecoration: "none" }}>
                  <img
                    src={SlidingWindow}
                    alt=""
                    className="img-fluid zoom-img"
                  ></img>
                  <div class="hover-text">sliding window</div>
                </Link>
              </div>
              <div class="img-container text-center">
                <Link to="/rollerdoubledoor" style={{ textDecoration: "none" }}>
                  <img
                    src={RetractableRollerDoubleDoor}
                    alt=""
                    className="img-fluid mt-4 zoom-img"
                  ></img>
                  <div class="hover-text">Retractable roller double Door</div>
                </Link>
              </div>
              <div class="img-container text-center">
                <Link to="/openabledoubledoor" style={{ textDecoration: "none" }}>
                  <img
                    src={Openabledbdr}
                    alt=""
                    className="img-fluid mt-4 zoom-img"
                  ></img>
                  <div class="hover-text">Openable Double Door</div>
                </Link>
              </div>
             
            </div>
          </div>
          <div className="col-4 d-flex flex-column pt-5 text-center">
            <div className="product_img">
              
              <div class="img-container text-center">
                <Link to="/slidingdoor" style={{ textDecoration: "none" }}>
                  <img
                    src={DoubleSlidingDoorWithSingleTrack}
                    alt=""
                    className="img-fluid  zoom-img"
                  ></img>
                  <div class="hover-text txt1"> Sliding door</div>
                </Link>
              </div>
              <div class="img-container text-center">
                <Link
                  to="/retractabledoubledoor"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={RetractableDoubleDoor}
                    alt=""
                    className="img-fluid zoom-img mt-4"
                  ></img>
                  <div class="hover-text txt1">
                  Retractable Double Door
                  </div>
                </Link>
              </div>
              <div class="img-container text-center">
                <Link
                  to="/openablemultifolddoor"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={OpenableMulti}
                    alt=""
                    className="img-fluid zoom-img mt-4"
                  ></img>
                  <div class="hover-text txt1">
                  Openable MultiFol Door
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
