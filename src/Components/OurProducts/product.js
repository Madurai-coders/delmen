import "../../CSS/ourproducts/products.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import RetractableDoubleDoor from "../../assets/Retractable Double Door/RetractableDoubleDoor.png";
import RetractableRollerDoubleDoor from "../../assets/Retractable Double Door/RollerDoubledr.png";
import OpenableSingleDoorSystem from "../../assets/Retractable Double Door/OpenableSingleDoorSystem.png";
import MultiSlidingDoor from "../../assets/Retractable Double Door/MultiSlidingDoor.png";
import SingleSliderWithTrack from "../../assets/Retractable Double Door/SingleSliderWithTrack.png";
import MagneticNet from "../../assets/Retractable Double Door/MagneticNet.png";
import OpenableWindowSystem from "../../assets/Retractable Double Door/OpenableWindowSystem.png";
import SlidingWindowSystem from "../../assets/Retractable Double Door/SlidingWindowSystem.png";
import OpenableDoubleDoorSystem from "../../assets/Retractable Double Door/OpenableDoubleDoorSystem.png";
import DoubleSlidingDoorWithSingleTrack from "../../assets/Retractable Double Door/DoubleSlidingDoorWithSingleTrack.png";
import WindowSystem from "../../assets/Windows Accessories/WindowSystem.png";
import DoubleDoor from "../../assets/Windows Accessories/DoubleDoor.png";
import SlidingDoor from "../../assets/Windows Accessories/SlidingDoor.png";
import StainlessSteel from "../../assets/Windows Accessories/StainlessSteel.png";
import MESH from "../../assets/Magnetic Insect Screens/MESH.png";
import Navbar_1 from "../Navbar_1/navbar_1";
function Product() {
  return (
    <>
      <div className="ourProducts">
        <Navbar_1 />
        <div className="container-fluid mt-5">
          <div className="d-flex flex-row mt-5">
            <div className="tables ms-5 mt-5">
              <div className="products_table">
                <div className="ms-4">
                  <h5 className="products_name pt-3">
                    Retractable Double Door
                  </h5>
                  <Link
                    to="/retractabledoubledoor"
                    style={{ textDecoration: "none" }}
                  >
                    <h6 className="names">Retractable double Door</h6>
                  </Link>
                  <Link
                    to="/rollerdoubledoor"
                    style={{ textDecoration: "none" }}
                  >
                    <h6 className="names">Retractable roller double Door</h6>
                  </Link>

                  <Link
                    to="/openablesingledr"
                    style={{ textDecoration: "none" }}
                  >
                    <h6 className="names">Openable single Door System</h6>
                  </Link>
                  <Link to="/multislidingdr" style={{ textDecoration: "none" }}>
                    <h6 className="names">multi sliding door System</h6>
                  </Link>
                  <Link
                    to="/singlesliderwithtrack"
                    style={{ textDecoration: "none" }}
                  >
                    <h6 className="names">Single slider with track</h6>
                  </Link>
                  <Link to="/magneticnet" style={{ textDecoration: "none" }}>
                    <h6 className="names">Magnetic net</h6>
                  </Link>
                  <Link to="/openablewindow" style={{ textDecoration: "none" }}>
                    <h6 className="names">Openable window System</h6>
                  </Link>
                  <Link to="/slidingwindow" style={{ textDecoration: "none" }}>
                    <h6 className="names">sliding window mesh</h6>
                  </Link>
                  <Link
                    to="/openabledoubledoor"
                    style={{ textDecoration: "none" }}
                  >
                    <h6 className="names">Openable double door system</h6>
                  </Link>
                  <Link
                    to="/doubleslidingwithsingletrack"
                    style={{ textDecoration: "none" }}
                  >
                    <h6 className="names">
                      Double sliding door with single track
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
            <div className="LISTS ms-5 ps-5">
              <div className="row mt-5 justify-content-center product_list">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-1 text-center ms-5">
                    <Link
                      to="/retractabledoubledoor"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={RetractableDoubleDoor}
                        alt=""
                        className="img-fluid  mt-2 pt-1"
                      ></img>
                      <h4 className="card1-title mt-4">
                        Retractable double<br></br> Door
                      </h4>
                      <h6 className="card1-des mt-3">250 INR/Square Foot</h6>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12  card_list">
                  <div className="card-1 text-center cc">
                    <Link
                      to="/rollerdoubledoor"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={RetractableRollerDoubleDoor}
                        alt=""
                        className="img-fluid  mt-2 pt-1"
                      ></img>
                      <h4 className="card1-title mt-4">
                        Retractable roller double<br></br> Door
                      </h4>
                      <h6 className="card1-des mt-3">250 INR/Square Foot</h6>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12  card_list">
                  <div className="card-1 text-center mt">
                    <Link
                      to="/openablesingledr"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={OpenableSingleDoorSystem}
                        alt=""
                        className="img-fluid mt-2 pt-1"
                      ></img>
                      <h4 className="card1-title mt-4">
                        openable single door<br></br> system
                      </h4>
                      <h6 className="card1-des mt-3">250 INR/Square Foot</h6>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center mt-5 cc">
                  <div className="card-1 text-center ms-5">
                    <Link
                      to="/multislidingdr"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={MultiSlidingDoor}
                        alt=""
                        className="img-fluid  mt-2 pt-1"
                      ></img>
                      <h4 className="card1-title mt-4">
                        Multi Sliding<br></br> Door
                      </h4>
                      <h6 className="card1-des mt-3">250 INR/Square Foot</h6>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center  mt-5 cc">
                  <div className="card-1 text-center ms-4">
                    <Link
                      to="/singlesliderwithtrack"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={SingleSliderWithTrack}
                        alt=""
                        className="img-fluid  mt-2 pt-1"
                      ></img>
                      <h4 className="card1-title mt-4">
                        Single Slider With<br></br> Track
                      </h4>
                      <h6 className="card1-des mt-3">250 INR/Square Foot</h6>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center mt-5 cc">
                  <div className="card-1 text-center">
                    <Link to="/magneticnet" style={{ textDecoration: "none" }}>
                      <img
                        src={MagneticNet}
                        alt=""
                        className="img-fluid mt-2 pt-1"
                      ></img>
                      <h4 className="card1-title mt-4">
                        Magnetic<br></br> Net
                      </h4>
                      <h6 className="card1-des mt-3">250 INR/Square Foot</h6>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center mt-5 cc">
                  <div className="card-1 text-center ms-5">
                    <Link
                      to="/openablewindow"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={OpenableWindowSystem}
                        alt=""
                        className="img-fluid  mt-2 pt-1"
                      ></img>
                      <h4 className="card1-title mt-4">
                        Openable Window<br></br> System
                      </h4>
                      <h6 className="card1-des mt-3">250 INR/Square Foot</h6>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center mt-5 cc">
                  <div className="card-1 text-center ms-5">
                    <Link
                      to="/slidingwindow"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={SlidingWindowSystem}
                        alt=""
                        className="img-fluid  mt-2 pt-1"
                      ></img>
                      <h4 className="card1-title mt-4">
                        Sliding Window<br></br>mesh
                      </h4>
                      <h6 className="card1-des mt-3">250 INR/Square Foot</h6>{" "}
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center mt-5 cc">
                  <div className="card-1 text-center ms-5">
                    <Link
                      to="/openabledoubledoor"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={OpenableDoubleDoorSystem}
                        alt=""
                        className="img-fluid  mt-2 pt-1"
                      ></img>
                      <h4 className="card1-title mt-4">
                        Openable Double Door<br></br> System
                      </h4>
                      <h6 className="card1-des mt-3">250 INR/Square Foot</h6>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center mt-5 cc">
                  {" "}
                  <div className="card-1 text-center ms-5">
                    <Link
                      to="/doubleslidingwithsingletrack"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={DoubleSlidingDoorWithSingleTrack}
                        alt=""
                        className="img-fluid  mt-2 pt-1"
                      ></img>
                      <h4 className="card1-title mt-4">
                        Double Sliding Door<br></br> With Single Track
                      </h4>
                      <h6 className="card1-des mt-3">250 INR/Square Foot</h6>{" "}
                    </Link>
                  </div>
                </div>
                <div className="col-4 text-center"></div>
                <div className="col-4 text-center"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5">
          <div className="d-flex flex-row">
            <div className="tables1 ms-5 mt-5">
              <div className="products_table1">
                <div className="ms-4">
                  <h5 className="products_name pt-3">
                    Doors/windows accessories{" "}
                  </h5>
                  <Link
                    to="/slidingwindowsystem"
                    style={{ textDecoration: "none" }}
                  >
                    <h6 className="names">Sliding Window System</h6>
                  </Link>
                  <Link to="/slidingdoor" style={{ textDecoration: "none" }}>
                    <h6 className="names">Sliding door</h6>
                  </Link>
                  <Link
                    to="/openabledoorwithmesh"
                    style={{ textDecoration: "none" }}
                  >
                    <h6 className="names">
                      openable door system with stainless steel mesh
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
            <div className="LISTS_1 ms-5 ps-5">
              <div className="row mt-5 justify-content-center product_list">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 card_list">
                  <div className="card-1 text-center ms-5">
                    <Link
                      to="/slidingwindowsystem"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={WindowSystem}
                        alt=""
                        className="img-fluid  mt-2 pt-1"
                      ></img>
                      <h4 className="card1-title mt-4">
                        Sliding Window<br></br> System
                      </h4>
                      <h6 className="card1-des mt-3">250 INR/Square Foot</h6>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 col-12  card_list">
                  <div className="card-1 text-center cc">
                    <Link to="/slidingdoor" style={{ textDecoration: "none" }}>
                      <img
                        src={SlidingDoor}
                        alt=""
                        className="img-fluid mt-2 pt-1"
                      ></img>
                      <h4 className="card1-title mt-4">
                        Sliding <br></br>Door
                      </h4>
                      <h6 className="card1-des mt-3">250 INR/Square Foot</h6>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                  <div className="card-1 text-center mt">
                    <Link
                      to="/openabledoorwithmesh"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={StainlessSteel}
                        alt=""
                        className="img-fluid  mt-2 pt-1"
                      ></img>
                      <h4 className="card1-title mt-4">
                        openable door system<br></br> with stainless steel mesh
                      </h4>
                      <h6 className="card1-des mt-3">250 INR/Square Foot</h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-5 pt-5">
          <div className="d-flex flex-row">
            <div className="tables1 ms-5 mt-5">
              <div className="products_table2">
                <div className="ms-4">
                  <h5 className="products_name pt-3">Magnetic Screen</h5>
                  <Link
                    to="/MagneticInsectScreens"
                    style={{ textDecoration: "none" }}
                  >
                    <h6 className="names">magnetic insect screen</h6>
                  </Link>
                </div>
              </div>
            </div>
            <div className="LISTS_1 ms-5 ps-5">
              <div className="row mt-5 justify-content-center product_list">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 card_list">
                  <div className="card-1 text-center ms-5">
                    <Link
                      to="/MagneticInsectScreens"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={MESH}
                        alt=""
                        className="img-fluid  mt-2 pt-1"
                      ></img>
                      <h4 className="card1-title mt-4">
                        Magnetic Insect Screens with<br></br> Fiber Glass Mesh
                      </h4>
                      <h6 className="card1-des mt-3">250 INR/Square Foot</h6>
                    </Link>
                  </div>
                </div>
                <div className="col-4 text-center"></div>
                <div className="col-4 text-center"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="FOOTER">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Product;
