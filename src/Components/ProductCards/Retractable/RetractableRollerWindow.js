import "../../../CSS/productscards/card_1.css";
import Navbar1 from "../../Navbar_1/navbar_1";
import Footer from "../../Footer/footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import SingleSliderWithTrack from "../../../assets/Windows Accessories/SingleSlidingWithTrack.png";
import OpenableWindowSystem from "../../../assets/Retractable Double Door/OpenableWindowSystem.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import RollerWindowVideo from "../../../assets/ProductsVideo/Roller window.mp4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import BuyingReq from "../../card_section/Buyingreq";
import CloseIcon from "@mui/icons-material/Close";
import Callback from "../../card_section/Callback";
import Slidingdr from "../../../assets/Windows Accessories/rollerdr.png";

function RollerWindow() {
  const [CallBackCard, setCallBackCard] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTab = useMediaQuery({ query: "(min-width: 767px)" });
  const isCard_3 = useMediaQuery({ query: "(min-width: 576px)" });

  return (
    <>
      <div className="retractable">
        <div className="container">
          <Navbar1 />
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

                      <p className="Product_Exn mt-3">
                        This product is manufactured with aluminum profiles and
                        fiber glass mesh. It is designed to mount on wooden,
                        aluminum and UPVC windows.
                      </p>

                      <p className="Product_Feature mt-5">Features</p>
                      <ul>
                        <li className="Product_Points">
                          This retractable roller window can be used only when
                          required.
                        </li>

                        <li className="Product_Points">
                          It has a brush to clean the mesh every time the system
                          is operated.
                        </li>
                        <li className="Product_Points">
                          This system comes with fiberglass mesh only.
                        </li>
                      </ul>
                      <p className="Product_Feature mt-5">Color Options</p>

                      <ul>
                        <li className="Product_Points">Bronze anodized</li>
                      </ul>
                      <h6 className="product_customize mt-3">
                        Can be customized as per the client’s requirement.
                      </h6>

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
                <p className="Product_Exn mt-3">
                  This product is manufactured with aluminum profiles and fiber
                  glass mesh. It is designed to mount on wooden, aluminum and
                  UPVC windows.
                </p>

                <p className="Product_Feature mt-5">Features</p>
                <ul>
                  <li className="Product_Points">
                    This retractable roller window can be used only when
                    required.
                  </li>

                  <li className="Product_Points">
                    It has a brush to clean the mesh every time the system is
                    operated.
                  </li>
                  <li className="Product_Points">
                    This system comes with fiberglass mesh only.
                  </li>
                </ul>
                <p className="Product_Feature mt-5">Color Options</p>

                <ul>
                  <li className="Product_Points">Bronze anodized</li>
                </ul>
                <h6 className="product_customize mt-3">
                  Can be customized as per the client’s requirement.
                </h6>
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
                Other Products in 'Retractable Door' category
              </h5>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 text-center mt-5">
              <div className="otherproduct_card  text-center ms-5">
                <Link to="/rollerdoubledoor" style={{ textDecoration: "none" }}>
                  <img
                    src={Slidingdr}
                    alt=""
                    className="img-fluid  mt-2 pt-1"
                  ></img>
                  <h4 className="otherproductcard_title mt-4">
                    Retractable Roller<br></br>Door
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

export default RollerWindow;
