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
import OpenableWindowSystem from "../../../assets/Retractable Double Door/OpenableWindowSystem.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import BuyingReq from "../../card_section/Buyingreq";
import CloseIcon from "@mui/icons-material/Close";
import Callback from "../../card_section/Callback";
import RollerDoubleDrVideo from "../../../assets/ProductsVideo/rollerdoubledr.mp4";

import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
function RetractableDoubleDoor() {
  const [PriceCard, setPriceCard] = useState(false);
  const [CallBackCard, setCallBackCard] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTab = useMediaQuery({ query: "(min-width: 767px)" });
  const isCard_1 = useMediaQuery({ query: "(min-width: 992px)" });
  const isCard_3 = useMediaQuery({ query: "(min-width: 276px)" });

  const Items = [
    {
      value: "USD",
      label: "Kilogram",
    },
    {
      value: "EUR",
      label: "Nos",
    },
    {
      value: "BTC",
      label: "Pieces",
    },
    {
      value: "JPY",
      label: "Tons",
    },
    {
      value: "JP",
      label: "Units",
    },
  ];
  const [pricequote, setpricequote] = useState({
    Email: "not_selected",
    MobileNo: "not_selected",
  });

  return (
    <>
      <div className="retractable">
        <div className="container">
          <Navbar_1></Navbar_1>
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
                        <source src={RollerDoubleDrVideo} type="video/webm" />
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
                        Retractable Double Door System
                      </h5>
                      <div></div>
                      <h5 className="product_des mt-4">product description</h5>
                      <h5 className="Product_Title mt-4">
                        Double Retractable Roller Door{" "}
                      </h5>
                      <p className="Product_Exn mt-3">
                        We are specialized in manufacturing superior quality
                        double doors, which can be mounted to your existing
                        french windows. This system comes with only fiber glass mesh (stiff mesh) . The maximum size which can be fabricated
                        (Hieght 3000mm x Width 3500mm )This system works
                        vertically from left to Right or Right to Left
                      </p>
                      <p className="Product_Feature mt-5">Features</p>
                      <ul>
                        <li className="Product_Points">
                          It doesnt take any additional space. Mounted with 2 inch box section , left and right side vertically.
                        </li>
                        <li className="Product_Points">
                          Easy to operate
                        </li>
                        <li className="Product_Points">Hassle Free</li>
                      </ul>
                    
                      <div className="d-flex flex-row">
                        <Button
                          variant="outlined"
                          className="callback_btn mt-5 pt-3"
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
                            className="ENQUIRY_btn ms-5 mt-5 pt-3"
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
              name="Retractable Double Door System"
            />
          )}

          {isMobile && (
            <>
              <div className="row cards_row mt-5">
                <div className="col-12 mt-3">
                  <h5 className="Product_Name ms-3">
                    Retractable Double Door System
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
                        <source src={RollerDoubleDrVideo} type="video/webm" />
                      </Video>
                </div>
              </div>

              <div className="col-12 mt-5">
                <h5 className="product_des mt-4">product description</h5>
                <h5 className="Product_Title mt-4">
                  Double Retractable Roller Door{" "}
                </h5>
                <p className="Product_Exn mt-3">
                        We are specialized in manufacturing superior quality
                        double doors, which can be mounted to your existing
                        french windows. This system comes with only fiber glass mesh (stiff mesh) . The maximum size which can be fabricated
                        (Hieght 3000mm x Width 3500mm )This system works
                        vertically from left to Right or Right to Left
                      </p>
                      <p className="Product_Feature mt-5">Features</p>
                      <ul>
                        <li className="Product_Points">
                          It doesnt take any additional space. Mounted with 2 inch box section , left and right side vertically.
                        </li>
                        <li className="Product_Points">
                          Easy to operate
                        </li>
                        <li className="Product_Points">Hassle Free</li>
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
             
            </div>
            {isCard_1 && (
              <>
                <div className="col-lg-3 col-md-6 col-sm-6 text-center mt-5">
                  <div className="otherproduct_card  text-center ms-5">
                    <Link
                      to="/openablewindow"
                      style={{ textDecoration: "none" }}
                    >
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
              </>
            )}
            {isCard_3 && (
              <>
                <div className="col-lg-3 col-md-6 col-sm-6 col-6 text-center mt-5">
                  <div className="otherproduct_card  text-center ms-4">
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

export default RetractableDoubleDoor;
