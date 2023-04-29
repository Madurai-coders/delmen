import "../../../CSS/productscards/card_1.css";
import Navbar_1 from "../../Navbar_1/navbar_1";
import Footer from "../../Footer/footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import SingleSliderWithTrack from "../../../assets/Windows Accessories/SingleSlidingWithTrack.png";
import MagneticNet from "../../../assets/Retractable Double Door/MagneticNet.png";
import OpenableWindowSystem from "../../../assets/Retractable Double Door/OpenableWindowSystem.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import RollerWindowVideo from "../../../assets/ProductsVideo/Roller window.mp4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import BuyingReq from "../../card_section/Buyingreq";
import CloseIcon from "@mui/icons-material/Close";
import Callback from "../../card_section/Callback";
function RollerWindow() {
  const [CallBackCard, setCallBackCard] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTab = useMediaQuery({ query: "(min-width: 767px)" });
  const isCard_3 = useMediaQuery({ query: "(min-width: 576px)" });

  return (
    <>
      <div className="retractable">
        <div className="container">
          <Navbar_1></Navbar_1>
          {isTab && (
            <>
              <div className="CARDS_4">
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
                        <source src={RollerWindowVideo} type="video/webm" />
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
                        Retractable Roller Window
                      </h5>

                      <h5 className="product_des mt-4">product description</h5>
                      <p className="Product_Exn mt-3">
                        Roller window this product can be installed on the
                        existing wooden windows as well on UPVC Casement windows
                        advantage of this product it can be used as in need if
                        not it will be in the roll form inside the net box This
                        Product comes with Fiberglass Stiff mesh only
                      </p>
                      <h5 className="Product_Title mt-4">
                        Retractable Roller Window{" "}
                      </h5>
                      <p className="Product_Exn mt-3">
                        We are the manufacturers of Retractable Roller Window
                        systems
                      </p>
                      <p className="Product_Feature mt-5">
                        Advantage of the Roller Window system:
                      </p>
                      <ul>
                        <li className="Product_Points">
                          This can be used on to any existing Doors, which is
                          made out of wood UPVC or Aluminium
                        </li>
                        <li className="Product_Points">
                          It can be operated from left to right or Right to left
                        </li>
                        <li className="Product_Points">
                          Easy to operate, it has self cleaning Brush to clean
                          the mesh
                        </li>
                      </ul>
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
                            sx={{ width: "100%" }}
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
              name="Retractable Roller Window"
            />
          )}

          {isMobile && (
            <>
              <div className="row cards_row mt-5">
                <div className="col-12 mt-3">
                  <h5 className="Product_Name ms-3">
                    Retractable Roller Window System
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
                    <source src={RollerWindowVideo} type="video/webm" />
                  </Video>
                </div>
              </div>

              <div className="col-12 mt-5">
                <h5 className="product_des mt-4">product description</h5>
                <p className="Product_Exn mt-3">
                  Roller window this product can be installed on the existing
                  wooden windows as well on UPVC Casement windows advantage of
                  this product it can be used as in need if not it will be in
                  the roll form inside the net box This Product comes with
                  Fiberglass Stiff mesh only
                </p>
                <h5 className="Product_Title mt-4">
                  Retractable Roller Window{" "}
                </h5>
                <p className="Product_Exn mt-3">
                  We are the manufacturers of Retractable Roller Window systems
                </p>
                <p className="Product_Feature mt-5">
                  Advantage of the Roller Window system:
                </p>
                <ul>
                  <li className="Product_Points">
                    This can be used on to any existing Doors, which is made out
                    of wood UPVC or Aluminium
                  </li>
                  <li className="Product_Points">
                    It can be operated from left to right or Right to left
                  </li>
                  <li className="Product_Points">
                    Easy to operate, it has self cleaning Brush to clean the
                    mesh
                  </li>
                </ul>
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
            <div className="col-lg-3 col-md-6 col-sm-6 col-10 text-center mt-5">
              <div className="otherproduct_card text-center ms-5">
                <Link to="/openablewindow" style={{ textDecoration: "none" }}>
                  <img
                    src={OpenableWindowSystem}
                    alt=""
                    className="img-fluid  mt-2 pt-1"
                  ></img>
                  <h4 className="otherproductcard_title mt-4">
                    Openable Window<br></br> System
                  </h4>
                </Link>
              </div>
            </div>
            {isCard_3 && (
              <>
                <div className="col-lg-3 col-md-6 col-sm-6 col-6 text-center mt-5">
                  <div className="otherproduct_card text-center ms-4">
                    <Link
                      to="/singlesliderwithtrack"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={SingleSliderWithTrack}
                        alt=""
                        className="img-fluid  mt-2 pt-1"
                      ></img>
                      <h4 className="otherproductcard_title mt-4">
                        Single Slider With<br></br> Track
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

export default RollerWindow;
