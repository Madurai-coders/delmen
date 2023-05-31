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
import SingleSliderWithTrack from "../../../assets/Windows Accessories/SingleSlidingWithTrack.png";
import OpenableWindowSystem from "../../../assets/Retractable Double Door/OpenableWindowSystem.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import OpenableDrVideo from "../../../assets/ProductsVideo/openablesingledr.mp4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import BuyingReq from "../../card_section/Buyingreq";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";
import Callback from "../../card_section/Callback";
function OpenableSingleDr() {
  const [CallBackCard, setCallBackCard] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTab = useMediaQuery({ query: "(min-width: 767px)" });
  const isCard_3 = useMediaQuery({ query: "(min-width: 576px)" });

  return (
    <>
      <div className="RollerDr">
        <div className="container">
          <Navbar_1 />
          {isTab && (
            <>
              <div className="CARDS_3">
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
                        <source src={OpenableDrVideo} type="video/webm" />
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
                        {" "}
                        Openable Single Door System{" "}
                      </h5>

                      <h5 className="product_des mt-4">product description</h5>

                      <h5 className="Product_Title mt-4">
                        Openable Single Door System{" "}
                      </h5>
                      <p className="Product_Exn mt-3">
                        Open able Door It is custom Made for the existing Main
                        door ,utility door as well Balcony Door, This product is
                        mounted adjacent to your existing doors. It is assembled
                        with 2" aluminum Profile with double SS screw Joints and
                        SS 304 Mesh Rust Free. This system has removable hinges
                        and it can be removed from the hinges to wash the door
                        and fix back. This system sticks on magnetv while
                        closing.
                      </p>

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
                            className="ENQUIRY_btn ms-5 "
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
              name="Openable Single Door System"
            />
          )}

          {isMobile && (
            <>
              <div className="row cards_row mt-5">
                <div className="col-12 mt-3">
                  <h5 className="Product_Name ms-3">
                    Openable Single Door System
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
                    <source src={OpenableDrVideo} type="video/webm" />
                  </Video>
                </div>
              </div>

              <div className="col-12 mt-5">
                <h5 className="product_des mt-4">product description</h5>
                <h5 className="Product_Title mt-4">
                  Openable Single Door System{" "}
                </h5>
                <p className="Product_Exn mt-3">
                  Open able Door It is custom Made for the existing Main door
                  ,utility door as well Balcony Door, This product is mounted
                  adjacent to your existing doors. It is assembled with 2"
                  aluminum Profile with double SS screw Joints and SS 304 Mesh
                  Rust Free. This system has removable hinges and it can be
                  removed from the hinges to wash the door and fix back. This
                  system sticks on magnetv while closing.
                </p>
              </div>
              <div className="col-12 text-center d-flex flex-column">
                <Button
                  variant="outlined"
                  className="callback_btn mt-3"
                  onClick={() => setCallBackCard(true)}
                >
                  request to call back
                </Button>
                <Button variant="contained" className="ENQUIRY_btn mt-4">
                  send inquiry
                </Button>
              </div>
            </>
          )}

          <BuyingReq />

          <div className="row justify-content-center cards_row">
            <div className="col-12 text-center">
              <h5 className="other_txt">
                Other Products in 'Retractable Double Door' category
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
export default OpenableSingleDr;
