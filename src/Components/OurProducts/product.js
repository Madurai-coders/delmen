import "../../CSS/ourproducts/products.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
// import RetractableDoubleDoor from "../../assets/Retractable Double Door/RetractableDoubleDoor.png";
import RetractableRollerDoubleDoor from "../../assets/Retractable Double Door/RollerDoubledr.png";
import OpenableSingleDoorSystem from "../../assets/Retractable Double Door/OpenableSingleDoorSystem.png";
// import SingleSliderWithTrack from "../../assets/Windows Accessories/SingleSlidingWithTrack.png";
import OpenableWindowSystem from "../../assets/Windows Accessories/OpenableWindow.png";
import SlidingWindowSystem from "../../assets/Retractable Double Door/SlidingWindowSystem.png";
import Navbar1 from "../Navbar_1/navbar_1";
// import SlidingWindowMesh from "../../assets/Windows Accessories/slidingwindowmesh.png";
import MagneticInsect from "../../assets/Magnetic Insect Screens/magneticinsect.png";
import OpenableDoubleDoor from "../../assets/Retractable Double Door/OpenableDoubleDoor.png";
// import OpenableMultiFoldDoor from "../../assets/Retractable Double Door/multifolddoor.png";
import MultiSlidingDoor from "../../assets/Windows Accessories/MultiSlidingDoor.png";
import Slidingdr from "../../assets/Windows Accessories/rollerdr.png";
import SlidingDoor from "../../assets/Retractable Double Door/slidingdoor.png";
import RemovableFrame from "../../assets/Magnetic Insect Screens/RemovableFrame.png";
import Rollerwindow from '../../assets/Windows Accessories/rollerwindow.png';
import Patiospace from '../../assets/Magnetic Insect Screens/Patiospace.png';
function OurProduct() {
  return (
    <>
      <div className="ourProducts">
        <div className="container">
          <Navbar1></Navbar1>
          <div className="container-fluid mt-5">
            <div className="d-flex flex-row mt-5">
              <div className="tables1 ms-5 mt-5">
                <div className="products_table">
                  <div className="ms-4">
                    <h5 className="products_name pt-3">Magnetic Net</h5>
                    <Link
                      to="/MagneticInsectScreens"
                      style={{ textDecoration: "none" }}
                    >
                      <h6 className="names">
                        Magnetic Net With Fiber Glass Mesh
                      </h6>
                    </Link>
                    <Link
                      to="/PatioSpace"
                      style={{ textDecoration: "none" }}
                    >
                      <h6 className="names">
                     Stainless steel Mesh with Frame for Patio Space

                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="LISTS_1 ms-5 ps-5">
                <div className="row mt-5 justify-content-start product_list">
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12 card_list">
                    <div className="card-1 text-center">
                      <Link
                        to="/MagneticInsectScreens"
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={MagneticInsect}
                          alt=""
                          className="img-fluid  mt-2 pt-1"
                        ></img>
                        <h4 className="card1-title mt-4">
                          Magnetic Net with<br></br> Fiber Glass Mesh
                        </h4>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12 card_list">
                    <div className="card-1 text-center">
                      <Link
                        to="/PatioSpace"
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={Patiospace}
                          alt=""
                          className="img-fluid  mt-2 pt-1"
                        ></img>
                        <h4 className="card1-title mt-4">
                        Stainless steel Mesh with<br></br> Frame for Patio Space
                        </h4>
                      </Link>
                    </div>
                  </div>
                  <div className="col-4 text-center"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid mt-5">
            <div className="d-flex flex-row mt-5">
              <div className="tables ms-5 mt-5">
                <div className="products_table2">
                  <div className="ms-4">
                    <h5 className="products_name pt-3">Retractable Door</h5>
                    <Link
                      to="/retractabledoubledoor"
                      style={{ textDecoration: "none" }}
                    >
                      <h6 className="names">Retractable Double Door</h6>
                    </Link>
                    <Link
                      to="/rollerdoubledoor"
                      style={{ textDecoration: "none" }}
                    >
                      <h6 className="names">Retractable Roller Door</h6>
                    </Link>

                    <Link to="/rollerwindow" style={{ textDecoration: "none" }}>
                      <h6 className="names">Retractable Roller Window</h6>
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
                          src={RetractableRollerDoubleDoor}
                          alt=""
                          className="img-fluid  mt-2 pt-1"
                        ></img>
                        <h4 className="card1-title mt-4">
                          Retractable Double<br></br> Door
                        </h4>
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
                          src={Slidingdr}
                          alt=""
                          className="img-fluid  mt-2 pt-1"
                        ></img>
                        <h4 className="card1-title mt-4">
                          Retractable roller <br></br> Door
                        </h4>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12  card_list mt">
                    <div className="card-1 text-center cc">
                      <Link
                        to="/rollerwindow"
                        style={{ textDecoration: "none" }}
                      >
                        <img  src={Rollerwindow} alt="" className="img-fluid  mt-2 pt-1"></img>
                        <h4 className="card1-title mt-4">
                          Retractable roller Window
                        </h4>
                      </Link>
                    </div>
                  </div>
                  <div className="col-4 text-center"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid mt-5">
            <div className="d-flex flex-row">
              <div className="tables1 ms-5 mt-5">
                <div className="products_table3">
                  <div className="ms-4">
                    <h5 className="products_name pt-3">Sliding System</h5>
                    <Link
                      to="/slidingwindowsystem"
                      style={{ textDecoration: "none" }}
                    >
                      <h6 className="names">Sliding Window System</h6>
                    </Link>
                    {/* <Link
                      to="/singlesliderwithtrack"
                      style={{ textDecoration: "none" }}
                    >
                      <h6 className="names">Single slider with Track</h6>
                    </Link> */}

                    <Link to="/slidingdoor" style={{ textDecoration: "none" }}>
                      <h6 className="names">Sliding door</h6>
                    </Link>
                    {/* <Link
                      to="/slidingwindowmesh"
                      style={{ textDecoration: "none" }}
                    >
                      <h6 className="names">Sliding Window Mesh</h6>
                    </Link> */}
                    <Link
                      to="/multislidingdr"
                      style={{ textDecoration: "none" }}
                    >
                      <h6 className="names">Multi Sliding Door</h6>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="LISTS_1 ms-5 ps-5">
                <div className="row mt-5 justify-content-center product_list">
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                    <div className="card-1 text-center ms-5">
                      <Link
                        to="/slidingwindowsystem"
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={SlidingWindowSystem}
                          alt=""
                          className="img-fluid  mt-2 pt-1"
                        ></img>
                        <h4 className="card1-title mt-4">
                          Sliding Window<br></br>System
                        </h4>
                      </Link>
                    </div>
                  </div>
                  {/* <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center cc">
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
                      </Link>
                    </div>
                  </div> */}

                  <div className="col-lg-4 col-md-6 col-sm-12 col-12  card_list">
                    <div className="card-1 text-center cc">
                      <Link
                        to="/slidingdoor"
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={SlidingDoor}
                          alt=""
                          className="img-fluid mt-2 pt-1"
                        ></img>

                        <h4 className="card1-title mt-4">
                          Sliding <br></br>Door
                        </h4>
                      </Link>
                    </div>
                  </div>
                  {/* 
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center mt-5 mt">
                    <div className="card-1 text-center ms-4 cc">
                      <Link
                        to="/slidingwindowmesh"
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={SlidingWindowMesh}
                          alt=""
                          className="img-fluid  mt-2 pt-1"
                        ></img>
                        <h4 className="card1-title mt-4">
                          Sliding Window Mesh
                        </h4>
                      </Link>
                    </div>
                  </div> */}

                  <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center cc mt">
                    <div className="card-1 text-center ms-4">
                      <Link
                        to="/multislidingdr"
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={MultiSlidingDoor}
                          alt=""
                          className="img-fluid  mt-2 pt-1"
                        ></img>
                        <h4 className="card1-title mt-4">Multi Sliding Door</h4>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid mt-5">
            <div className="d-flex flex-row">
              <div className="tables1 ms-5 mt-5">
                <div className="products_table2">
                  <div className="ms-4">
                    <h5 className="products_name pt-3">Openable System</h5>
                    <Link
                      to="/openablewindow"
                      style={{ textDecoration: "none" }}
                    >
                      <h6 className="names">Openable Window System</h6>
                    </Link>
                    <Link
                      to="/openablesingledr"
                      style={{ textDecoration: "none" }}
                    >
                      <h6 className="names">
                        Openable Single Door<br></br>System
                      </h6>
                    </Link>
                    <Link
                      to="/openabledoubledoor"
                      style={{ textDecoration: "none" }}
                    >
                      <h6 className="names">
                        Openable Double Door<br></br>System
                      </h6>
                    </Link>
                     <Link
                      to="/RemovableFrame"
                      style={{ textDecoration: "none" }}
                    >
                      <h6 className="names">
                      Quick Removable Frame with Magnet
                      </h6>
                    </Link>
                    {/* <Link
                      to="/fixedopenable"
                      style={{ textDecoration: "none" }}
                    >
                      <h6 className="names">Fixed Openable</h6>
                    </Link> */}

                    {/* <Link
                      to="/openablemultifolddoor"
                      style={{ textDecoration: "none" }}
                    >
                      <h6 className="names">
                        Openable MultiFold Door<br></br>System
                      </h6>
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="LISTS_1 ms-5 ps-5">
                <div className="row mt-5 justify-content-center product_list">
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center cc">
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
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                    <div className="card-1 text-center ms-4">
                      <Link
                        to="/openablesingledr"
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={OpenableSingleDoorSystem}
                          alt=""
                          className="img-fluid  mt-2 pt-1"
                        ></img>
                        <h4 className="card1-title mt-4">
                          Openable Single Door <br></br>System
                        </h4>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center cc">
                    <div className="card-1 text-center ms-5">
                      <Link
                        to="/openabledoubledoor"
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={OpenableDoubleDoor}
                          alt=""
                      
                          className="img-fluid  mt-2 pt-1"
                        ></img>
                        <h4 className="card1-title mt-4">
                          Openable Double Door<br></br> System
                        </h4>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center mt-4">
                    <div className="card-1 text-center ms-4">
                      <Link
                        to="/RemovableFrame"
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={RemovableFrame}
                          alt=""
                          className="img-fluid  mt-2 pt-1"
                        ></img>
                        <h4 className="card1-title mt-4">
                         Quick Removable Frame with Magnet
                        </h4>
                      </Link>
                    </div>
                  </div>
                  <div className="col-4"></div>
                  <div className="col-4"></div>

                  {/* <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center cc mt-5">
                    <div className="card-1 text-center ms-5">
                      <Link
                        to="/openablemultifolddoor"
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={OpenableMultiFoldDoor}
                          alt=""
                          className="img-fluid  mt-2 pt-1"
                        ></img>
                        <h4 className="card1-title mt-4">
                          Openable MultiFold Door<br></br> System
                        </h4>
                      </Link>
                    </div>
                  </div> */}
                </div>
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

export default OurProduct;
