import Footer from "../../Footer/footer";
import Navbar_1 from "../../Navbar_1/navbar_1";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useMediaQuery } from "react-responsive";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import "../../../CSS/productscards/card_1.css";
import BuyingReq from "../../card_section/Buyingreq";
import { Link } from "react-router-dom";
import Callback from "../../card_section/Callback";
import MagneticInsectVideo from "../../../assets/ProductsVideo/magneticinsect.mp4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
function MagneticInsect() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTab = useMediaQuery({ query: "(min-width: 767px)" });
  const [CallBackCard, setCallBackCard] = useState(false);

  return (
    <>
      <div className="RollerDr">
        <div className="container">
          <Navbar_1 />
          {isTab && (
            <>
              <div className="CARDS_3">
                <div className="row mt-5">
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
                        <source src={MagneticInsectVideo} type="video/webm" />
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
                      <h5 className="Product_Name">Magnetic Insect Screens</h5>

                      {/* <h5 className="product_des mt-4">product description</h5>
                      <h5 className="Product_Title mt-4">
                        Magnetic Insect Screens
                      </h5> */}
                      <p className="Product_Exn mt-3">
                        Magnetic Insect Screen is fabricated with fiber glass
                        mesh. It is specifically designed to fit existing
                        wooden, aluminum, or UPVC windows. Using a flexible
                        magnetic strip with fiber glass mesh, they create a
                        complete seal around the window.
                      </p>
                      <p className="Product_Feature mt-5">Features</p>
                      <ul>
                        <li className="Product_Points">
                          Easy to clean and reattach it back to on window
                        </li>
                        <li className="Product_Points">
                          No wrinkles on the mesh
                        </li>
                        <li className="Product_Points">
                          No dust accumulation due to no static charge in fiber
                          glass mesh.
                        </li>
                        <li className="Product_Points">Does not sag</li>
                      </ul>
                      <p className="Product_Feature mt-5">Color Options</p>

                      <ul>
                        <li className="Product_Points">Black</li>
                        <li className="Product_Points">White</li>
                        <h6 className="Product_Featur">
                          Can be customized as per the client’s requirement.
                        </h6>
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
              name="Magnetic Insect Screens"
            />
          )}

          {isMobile && (
            <>
              <div className="row cards_row mt-5">
                <div className="col-12 mt-3">
                  <h5 className="Product_Name ms-5">Magnetic Insect Screens</h5>
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
                    <source src={MagneticInsectVideo} type="video/webm" />
                  </Video>
                </div>
              </div>

              <div className="col-12 mt-5">
                <h5 className="product_des mt-4">product description</h5>
                <h5 className="Product_Title mt-4">Magnetic Insect Screens</h5>
                <p className="Product_Exn mt-3">
                  Magnetic Insect screen is fabricated with fiber glass mesh and
                  it is custom made for existing windows made out of wooden ,
                  aluminium or UPVC . They form a complete seal around the
                  window using flexible magnetic strip with fiber glass mesh.
                  This product has no wrinkles, dust accumulation or does not
                  sag when installed.
                </p>
                <p className="Product_Feature mt-5">Features</p>
                <ul>
                  <li className="Product_Points">
                    Easy to clean and fix back to window
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
        </div>

        <Footer />
      </div>
    </>
  );
}
export default MagneticInsect;
