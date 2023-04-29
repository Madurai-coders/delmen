import Footer from "../../Footer/footer";
import Navbar_1 from "../../Navbar_1/navbar_1";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import RetractableDoubleDoor from "../../../assets/Retractable Double Door/RetractableDoubleDoor.png";
import OpenableSingleDoorSystem from "../../../assets/Retractable Double Door/OpenableSingleDoorSystem.png";
import RetractableRollerDoubleDoor from "../../../assets/Retractable Double Door/RollerDoubledr.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import SlidingWindowMeshVideo from "../../../assets/ProductsVideo/slidingwindowmesh.mp4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import BuyingReq from "../../card_section/Buyingreq";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import SlidingDoor from "../../../assets/Windows Accessories/WindowSystem.png";
import StainlessSteel from "../../../assets/Magnetic Insect Screens/stainlesssteel.png";
import Callback from "../../card_section/Callback";
function SlidingWindowMesh() {
  const [CallBackCard, setCallBackCard] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTab = useMediaQuery({ query: "(min-width: 767px)" });
  const isCard_1 = useMediaQuery({ query: "(min-width: 992px)" });
  const isCard_3 = useMediaQuery({ query: "(min-width: 576px)" });

  return (
    <>
      <div className="RollerDr">
        <div className="container">
          <Navbar_1 />
          {isTab && (
            <>
              <div className="CARDS_2">
                <div className="row mt-5 cards_row">
                  <div className="col-5">
                    <div className="Card_1">
                      <Video
                        loop
                        controls={[
                          "PlayPause",
                          "Seek",
                          "Time",
                          "Volume",
                          "Fullscreen",
                        ]}
                      >
                        <source
                          src={SlidingWindowMeshVideo}
                          type="video/webm"
                        />
                      </Video>

                      <div className="share p-5">
                        <h6 className="share_txt">Share Your Product</h6>
                        <div className="Icons d-flex flex-row">
                          <IconButton>
                            <FacebookRoundedIcon className="facebook" />
                          </IconButton>
                          <IconButton>
                            <TwitterIcon className="twitter" />
                          </IconButton>
                          <IconButton>
                            <LinkedInIcon className="linkedin" />
                          </IconButton>
                          <IconButton>
                            <WhatsAppIcon className="whatsapp" />
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="Product_Detail mt-3">
                      <h5 className="Product_Name">
                        Sliding Window Mesh System
                      </h5>

                      <h5 className="product_des mt-4">product description</h5>
                      <p className="Product_Exn mt-3">
                        Sliding Window Mesh it is custom made for the existing
                        sliding window.we can create track adjacent to your
                        existing window
                      </p>
                      <h5 className="Product_Title mt-4">
                        Sliding Window System
                      </h5>
                      <p className="Product_Exn mt-3">
                        It is made out of 2Aluminium Profile with SS 304 mesh It
                        has Felt Grove to arrest gaps in the contact surface It
                        is assembled with double screw Joints to avoid breakage
                        in the edges and Twist in the frame It is advisable to
                        fix this kind of Sliding Windows, to your UPVC sliding
                        windows as well aluminium sliding systems
                      </p>

                      <p className="Product_Feature mt-5">Price And Quantity</p>
                      <ul>
                        <li className="Product_Points">
                          Minimum Order Quantity 100 Square Foot
                        </li>
                      </ul>
                      <p className="Product_Feature mt-5">Trade Information</p>
                      <ul>
                        <li className="Product_Points">
                          Supply Ability 1000 Square Foot Per Day
                        </li>
                        <li className="Product_Points">Delivery Time 1 Week</li>
                      </ul>
                      <div className="d-flex flex-row mt-5 pt-3">
                        <Button
                          variant="outlined"
                          className="callback_btn"
                          onClick={() => setCallBackCard(true)}
                        >
                          request to call back
                        </Button>
                        <Link
                          to="/contactus"
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            variant="contained"
                            className="ENQUIRY_btn ms-5"
                          >
                            send inquiry
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {CallBackCard && (
            <Callback
              icon={
                <CloseIcon onClick={() => setCallBackCard(false)}></CloseIcon>
              }
              name="Sliding Window Mesh System"
            />
          )}

          {isMobile && (
            <>
              <div className="row cards_row mt-5">
                <div className="col-12 mt-3">
                  <h5 className="Product_Name ms-3">
                    Sliding Window Mesh System
                  </h5>

                  <h5 className="Square ms-3">
                    250 INR<code className="Square_txt">/Square Foot</code>
                  </h5>
                </div>
                <div className="col-12 text-center mt-5">
                  <Video
                    loop
                    controls={[
                      "PlayPause",
                      "Seek",
                      "Time",
                      "Volume",
                      "Fullscreen",
                    ]}
                  >
                    <source src={SlidingWindowMeshVideo} type="video/webm" />
                  </Video>
                </div>
              </div>

              <div className="col-12 mt-5">
                <h5 className="product_des mt-4">product description</h5>
                <p className="Product_Exn mt-3">
                  Sliding Window Mesh it is custom made for the existing sliding
                  window.we can create track adjacent to your existing window
                </p>
                <p className="Product_Exn mt-3">
                  Sliding Window Mesh System it is custom made for existing
                  Sliding Window.
                </p>
                <h5 className="Product_Title mt-4">Sliding Window System</h5>
                <p className="Product_Exn mt-3">
                  It is made out of 2Aluminium Profile with SS 304 mesh It has
                  Felt Grove to arrest gaps in the contact surface It is
                  assembled with double screw Joints to avoid breakage in the
                  edges and Twist in the frame It is advisable to fix this kind
                  of Sliding Windows, to your UPVC sliding windows as well
                  aluminium sliding systems
                </p>

                <p className="Product_Feature mt-5">Price And Quantity</p>
                <ul>
                  <li className="Product_Points">
                    Minimum Order Quantity 100 Square Foot
                  </li>
                </ul>
                <p className="Product_Feature mt-5">Trade Information</p>
                <ul>
                  <li className="Product_Points">
                    Supply Ability 1000 Square Foot Per Day
                  </li>
                  <li className="Product_Points">Delivery Time 1 Week</li>
                </ul>
              </div>
              <div className="col-12 text-center d-flex flex-column">
                <Button
                  variant="outlined"
                  className="callback_btn mt-3"
                  onClick={() => setCallBackCard(true)}
                >
                  request to call back
                </Button>
                <Link to="/contactus" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    className="ENQUIRY_btn mt-4"
                    sx={{ width: "100%" }}
                  >
                    send inquiry
                  </Button>
                </Link>
              </div>
            </>
          )}

          <BuyingReq />

          <div className="row justify-content-center cards_row">
            <div className="col-12 text-center">
              <h5 className="other_txt">
                Other Products in 'Retractable Double Door' category
              </h5>
              <h5 className="other_subtxt mt-4">
                Minimum Order Quantity : 100
              </h5>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-8 text-center mt-5">
              <div className="otherproduct_card  text-center">
                <Link
                  to="/retractabledoubledoor"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={RetractableDoubleDoor}
                    alt=""
                    className="img-fluid  mt-2 pt-1"
                  ></img>
                  <h4 className="otherproductcard_title mt-4">
                    Retractable Double Door
                  </h4>
                </Link>
              </div>
            </div>
            {isCard_3 && (
              <>
                <div className="col-lg-3 col-md-6 col-sm-6 col-6 text-center mt-5">
                  <div className="otherproduct_card text-center">
                    <Link
                      to="/rollerdoubledoor"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={RetractableRollerDoubleDoor}
                        alt=""
                        className="img-fluid  mt-2 pt-1"
                      ></img>
                      <h4 className="otherproductcard_title mt-4">
                        Retractable Roller Double Door<br></br>System
                      </h4>
                    </Link>
                  </div>
                </div>
              </>
            )}
            {isCard_1 && (
              <>
                <div className="col-lg-3 col-md-6 col-6 text-center mt-5">
                  <div className="otherproduct_card  text-center">
                    <Link
                      to="/openablesingledr"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={OpenableSingleDoorSystem}
                        alt=""
                        className="img-fluid mt-2 pt-1"
                      ></img>
                      <h4 className="otherproductcard_title mt-4">
                        openable single door<br></br> system
                      </h4>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="FOOTER">
          <Footer />
        </div>
      </div>
    </>
  );
}
export default SlidingWindowMesh;
