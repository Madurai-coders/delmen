import "../../CSS/homepage/products.css";
import MultiSlidingDoor from "../../assets/Windows Accessories/MultiSlidingDoor.png";
import OpenableSingleDoor from "../../assets/OurProducts/openablesingledoor.png";
import MagneticNet from "../../assets/OurProducts/magneticnet.png";
import RetractableDoubleDoor from "../../assets/OurProducts/retractabledoubledoor.png";
import Openabledbdr from "../../assets/Retractable Double Door/OpenableDoubleDoor.png";
import RollerDoor from "../../assets/Windows Accessories/rollerdr.png";
import SlidingDoor from "../../assets/Retractable Double Door/slidingdoor.png";
import SlidingWindow from "../../assets/Retractable Double Door/SlidingWindowSystem.png";
import OpenableWindow from "../../assets/Windows Accessories/OpenableWindow.png";
import Rollerwindow from "../../assets/Windows Accessories/rollerwindow.png";
import Patiospace from "../../assets/Magnetic Insect Screens/Patiospace.png";
import RemovableFrame from "../../assets/Magnetic Insect Screens/RemovableFrame.png";
import { Link } from "react-router-dom";
function Products() {
  return (
    <>
      <div className="ourproducts">
        <div className="row cards_row justify-content-center">
          <div className="col-12 text-center">
            <h2 className="product_title">OUR PRODUCTS</h2>
          </div>
        </div>
        <div className="pro">
        <div className="row justify-content-center mt-4">
          <div className="col-lg-3  col-md-3 col-6 text-center img-container">
            <Link
              to="/magneticinsectscreens"
              style={{ textDecoration: "none" }}
            >
              <img
                src={MagneticNet}
                alt=""
                className="img-fluid zoom-img"
              ></img>
              <div class="hover-text">Magnetic Insect Screen </div>
            </Link>
          </div>

          <div class="col-lg-3  col-md-3 col-6 img-container text-center">
            <Link to="/openablewindow" style={{ textDecoration: "none" }}>
              <img
                src={OpenableWindow}
                alt=""
                className="img-fluid  zoom-img"
              ></img>
              <div class="hover-text">Openable Window</div>
            </Link>
          </div>

          <div class="col-lg-3  col-md-3 col-6 img-container text-center">
            <Link to="/rollerwindow" style={{ textDecoration: "none" }}>
              <img
                src={Rollerwindow}
                alt=""
                className="img-fluid zoom-img mtimg"
              ></img>
              <div class="hover-text">Retractable Roller Window</div>
            </Link>
          </div>

          <div class="col-lg-3  col-md-3 col-6 img-container text-center">
            <Link to="/slidingwindowsystem" style={{ textDecoration: "none" }}>
              <img
                src={SlidingWindow}
                alt=""
                className="img-fluid zoom-img mtimg"
              ></img>
              <div class="hover-text">sliding window</div>
            </Link>
          </div>
        </div>
       

        <div className="row justify-content-center mt-4">
          <div className="col-lg-3  col-md-3 col-6 text-center img-container">
            <Link to="/slidingdoor" style={{ textDecoration: "none" }}>
              <img
                src={SlidingDoor}
                alt=""
                className="img-fluid zoom-img"
              ></img>
              <div class="hover-text txt1">
                Sliding Door<br></br>System
              </div>
            </Link>
          </div>

          <div className="col-lg-3  col-md-3 col-6 text-center img-container">
            <Link to="/multislidingdr" style={{ textDecoration: "none" }}>
              <img
                src={MultiSlidingDoor}
                alt=""
                className="img-fluid zoom-img"
              ></img>
              <div class="hover-text">Multi Sliding Door</div>
            </Link>
          </div>
          <div className="col-lg-3  col-md-3 col-6 text-center img-container">
            <Link to="/openablesingledr" style={{ textDecoration: "none" }}>
              <img
                src={OpenableSingleDoor}
                alt=""
                className="img-fluid zoom-img mtimg"
              ></img>
              <div className="hover-text">openable single door system</div>
            </Link>
          </div>

          <div className="col-lg-3  col-md-3 col-6 text-center img-container">
            <Link to="/openabledoubledoor" style={{ textDecoration: "none" }}>
              <img
                src={Openabledbdr}
                alt=""
                className="img-fluid zoom-img mtimg"
              ></img>
              <div class="hover-text">
                Openable Double<br></br> Door System
              </div>
            </Link>
          </div>
        </div>




        <div className="row justify-content-center mt-4">
          <div className="col-lg-3 col-md-3 col-6 text-center img-container">
            <Link to="/rollerdoubledoor" style={{ textDecoration: "none" }}>
              <img src={RollerDoor} alt="" className="img-fluid zoom-img"></img>
              <div class="hover-text txt1">
                Retractable Roller<br></br> Door{" "}
              </div>
            </Link>
          </div>
          <div className="col-lg-3  col-md-3 col-6 text-center img-container">
            <Link
              to="/retractabledoubledoor"
              style={{ textDecoration: "none" }}
            >
              <img
                src={RetractableDoubleDoor}
                alt=""
                className="img-fluid zoom-img"
              ></img>
              <div class="hover-text">Retractable Double Door</div>
            </Link>
          </div>

          <div className="col-lg-3  col-md-3 col-6 text-center img-container">
            <Link to="/PatioSpace" style={{ textDecoration: "none" }}>
              <img src={Patiospace} alt="" className="img-flui zoom-img mtimg"></img>
              <div class="hover-text">
                Stainless steel Mesh with Frame for Patio Space
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-3 col-6 text-center img-container">
            <Link to="/RemovableFrame" style={{ textDecoration: "none" }}>
              <img
                src={RemovableFrame}
                alt=""
                className="img-fluid zoom-img mtimg"
              ></img>
              <div class="hover-text">Quick Removable Frame with Magnet</div>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Products;
