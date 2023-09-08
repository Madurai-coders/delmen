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
import WindowSystem from "../../../assets/Windows Accessories/rollerdr.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import BuyingReq from "../../card_section/Buyingreq";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import SingleSliderWithTrack from "../../../assets/Windows Accessories/SingleSlidingWithTrack.png";
import Callback from "../../card_section/Callback";
import SlidingVideo from "../../../assets/ProductsVideo/slidingdoor.mp4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
function SlidingDoor() {
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
                    <source src={SlidingVideo} type="video/webm" />
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
                      <h5 className="Product_Name">Sliding Door System </h5>

                      <h5 className="product_des mt-4">product description</h5>
                      <h5 className="Product_Title mt-4">
                        Sliding Door System{" "}
                      </h5>
                      <p className="Product_Exn mt-3">
                        Sliding door system is made out of aluminium 2inch
                        profiles . This system can be fabricated to your
                        precised size as per your existing sliding door system.
                        This system comes with stainless steel mesh grade 304
                        and can be installed on your existing track or a track
                        can be created adjacent to your sliding door system.
                      </p>
                      <p className="Product_Feature mt-5">Features</p>
                      <ul>
                        <li className="Product_Points">
                          The mesh and the system has high durability
                        </li>
                        <li className="Product_Points">
                          By having the mesh mounted very tight and firm on the
                          profile , the transparency of the system is very high
                        </li>
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
              name="Sliding Door System"
            />
          )}

          {isMobile && (
            <>
              <div className="row cards_row mt-5">
                <div className="col-12 mt-3">
                  <h5 className="Product_Name ms-3">Sliding Door System</h5>
                </div>
                <div className="col-12 text-center mt-5">
                 {/* video */}
                </div>
              </div>

              <div className="col-12 mt-5">
                <h5 className="product_des mt-4">product description</h5>
                <h5 className="Product_Title mt-4">Sliding Door System </h5>
                <p className="Product_Exn mt-3">
                  Sliding door system is made out of aluminium 2inch profiles .
                  This system can be fabricated to your precised size as per
                  your existing sliding door system. This system comes with
                  stainless steel mesh grade 304 and can be installed on your
                  existing track or a track can be created adjacent to your
                  sliding door system.
                </p>
                <p className="Product_Feature mt-5">Features</p>
                <ul>
                  <li className="Product_Points">
                    The mesh and the system has high durability
                  </li>
                  <li className="Product_Points">
                    By having the mesh mounted very tight and firm on the
                    profile , the transparency of the system is very high
                  </li>
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
                Other Products in 'Doors/Windows Accessories' category
              </h5>
             
            </div>
            <div className="col-2"></div>
            {isCard_3 && (
              <>
                <div className="col-lg-4 col-md-4 col-sm-4 col-10 text-center mt-5">
                  <div className="otherproduct_card  text-center">
                    <Link
                      to="/slidingwindowsystem"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={WindowSystem}
                        alt=""
                        className="img-fluid  mt-2 pt-1"
                      ></img>
                      <h4 className="otherproductcard_title mt-4">
                        Sliding Window<br></br> System
                      </h4>
                    </Link>
                  </div>
                </div>
              </>
            )}
            <div className="col-lg-4 col-md-4 col-sm-4 col-10 text-center mt-5">
              <div className="otherproduct_card text-center">
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
                  Single Slider With Track
                  </h4>
                </Link>
              </div>
            </div>
            <div className="col-3 text-center mt-5"></div>
          </div>
        </div>

        <div className="FOOTER">
          <Footer />
        </div>
      </div>
    </>
  );
}
export default SlidingDoor;
