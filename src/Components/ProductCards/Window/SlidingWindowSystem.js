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
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import SlidingWindowVideo from "../../../assets/ProductsVideo/slidingwindow.mp4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import BuyingReq from "../../card_section/Buyingreq";
import CloseIcon from "@mui/icons-material/Close";
import SlidingDoor from "../../../assets/Windows Accessories/rollerdr.png";
import SingleSliderWithTrack from "../../../assets/Windows Accessories/SingleSlidingWithTrack.png";

import Callback from "../../card_section/Callback";
function SlidingWindowSystem() {
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
                        <source src={SlidingWindowVideo} type="video/webm" />
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
                      <h5 className="Product_Name">Sliding Window System </h5>

                      <h5 className="product_des mt-4">product description</h5>
                      <h5 className="Product_Title mt-4">
                        Sliding Window System{" "}
                      </h5>
                      <p className="Product_Exn mt-3">
                        Sliding Window can be installed to your existing sliding
                        window either inside the house or outside the house. It
                        can be mounted with your existing track or we can create
                        a track adjacent to your sliding system.
                      </p>
                      <p className="Product_Feature mt-5">Features</p>
                      <ul>
                        <li className="Product_Points">
                          Hassle-free fixed without any screws
                        </li>
                        <li className="Product_Points">
                          Locked only with silicon and it has felt groves to
                          make sure there is no gaps between the glass track and
                          the mesh track
                        </li>
                        <li className="Product_Points">
                          The mesh is with stainless steel 304 grade , rust
                          free, long lasting
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
              name="Sliding Window System"
            />
          )}
          {isMobile && (
            <>
              <div className="row cards_row mt-5">
                <div className="col-12 mt-3">
                  <h5 className="Product_Name ms-3">Sliding Window System</h5>
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
                    <source src={SlidingWindowVideo} type="video/webm" />
                  </Video>
                </div>
              </div>

              <div className="col-12 mt-5">
                <h5 className="product_des mt-4">product description</h5>
                <h5 className="Product_Title mt-4">Sliding Window System </h5>
                <p className="Product_Exn mt-3">
                  Sliding Window can be installed to your existing sliding
                  window either inside the house or outside the house. It can be
                  mounted with your existing track or we can create a track
                  adjacent to your sliding system.
                </p>
                <p className="Product_Feature mt-5">Features</p>
                <ul>
                  <li className="Product_Points">
                    Hassle-free fixed without any screws
                  </li>
                  <li className="Product_Points">
                    Locked only with silicon and it has felt groves to make sure
                    there is no gaps between the glass track and the mesh track
                  </li>
                  <li className="Product_Points">
                    The mesh is with stainless steel 304 grade , rust free, long
                    lasting
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

          <div className="row justify-content-center mt-5 cards_row">
            <div className="col-12 text-center">
              <h5 className="other_txt mt-5">
                Other Products in 'Doors/Windows Accessories' category
              </h5>
              <h5 className="other_subtxt mt-4">
                Minimum Order Quantity : 100
              </h5>
            </div>
            {isCard_3 && (
              <>
                <div className="col-lg-3 col-md-4 col-sm-4 col-10 text-center mt-5">
                  <div className="otherproduct_card text-center">
                    <Link to="/slidingdoor" style={{ textDecoration: "none" }}>
                      <img
                        src={SlidingDoor}
                        alt=""
                        className="img-fluid mt-2 pt-1"
                      ></img>
                      <h4 className="otherproductcard_title mt-4">
                        Sliding <br></br>Door
                      </h4>
                    </Link>
                  </div>
                </div>
              </>
            )}
           <div className="col-lg-3 col-md-4 col-sm-4 col-10 text-center mt-5">
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

          </div>
        </div>

        <div className="FOOTER">
          <Footer />
        </div>
      </div>
    </>
  );
}
export default SlidingWindowSystem;
