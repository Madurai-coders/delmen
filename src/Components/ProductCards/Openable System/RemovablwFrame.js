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
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import BuyingReq from "../../card_section/Buyingreq";
import CloseIcon from "@mui/icons-material/Close";
import Callback from "../../card_section/Callback";
import RemovableFrameVideo from "../../../assets/ProductsVideo/removableframe.mp4";
import Slidingdr from "../../../assets/Windows Accessories/rollerdr.png";

import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
function RemovableFrameWithMagnet() {
  const [CallBackCard, setCallBackCard] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTab = useMediaQuery({ query: "(min-width: 767px)" });

  return (
    <>
      <div className="retractable">
        <div className="container">
          <Navbar1 />
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
                        <source src={RemovableFrameVideo} type="video/mp4" />
                      </Video>
                      <div className="p-5">
                       
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="Product_Detail mt-3">
                      <h5 className="Product_Name">
                        Quick Removable Frame with Magnet
                      </h5>
                      <div></div>

                      <h6 className="Product_Points">
                        This Product is fabricated with one inch profile along
                        with SS 304 grade mesh
                      </h6>

                      <p className="Product_Feature mt-5">Features</p>
                      <ul>
                        <li className="Product_Points">
                          This system can be removed and re-attached easily
                        </li>
                        <li className="Product_Points">
                          It can be wash and dried in sunlight for certain
                          duration.
                        </li>
                      </ul>
                      <p className="Product_Feature mt-5">Color Options</p>

                      <ul>
                        <li className="Product_Points">Bronze</li>
                        <li className="Product_Points">White</li>
                      </ul>
                      <h6 className="product_customize mt-3">
                        Can be customized as per the client’s requirement.
                      </h6>

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
                    Quick Removable Frame with Magnet
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
                    <source src={RemovableFrameVideo} type="video/mp4" />
                  </Video>
                </div>
              </div>

              <div className="col-12 mt-5">
                <h6 className="Product_Points">
                  This Product is fabricated with one inch profile along with SS
                  304 grade mesh
                </h6>

                <p className="Product_Feature mt-5">Features</p>
                <ul>
                  <li className="Product_Points">
                    This system can be removed and re-attached easily
                  </li>
                  <li className="Product_Points">
                    It can be wash and dried in sunlight for certain duration.
                  </li>
                </ul>
                <p className="Product_Feature mt-5">Color Options</p>

                <ul>
                  <li className="Product_Points">Bronze</li>
                  <li className="Product_Points">White</li>
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

export default RemovableFrameWithMagnet;
