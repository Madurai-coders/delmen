import Footer from "../../Footer/footer";
import Navbar1 from "../../Navbar_1/navbar_1";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import OpenableSingleDoorSystem from "../../../assets/Retractable Double Door/OpenableSingleDoorSystem.png";

import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import OpenableDoubleDrVideo from "../../../assets/ProductsVideo/openabledoubledr.mp4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import CloseIcon from "@mui/icons-material/Close";
import BuyingReq from "../../card_section/Buyingreq";
import Callback from "../../card_section/Callback";
function OpenableDoubleDoor() {
  const [CallBackCard, setCallBackCard] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTab = useMediaQuery({ query: "(min-width: 767px)" });

  return (
    <>
      <div className="RollerDr">
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
                        <source src={OpenableDoubleDrVideo} type="video/mp4" />
                      </Video>
                      <div className="p-5">
                       
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="Product_Detail mt-3">
                      <h5 className="Product_Name">
                        Openable Double Door System
                      </h5>
                      <ul className="pr-5">
                        <li className="Product_Points">
                          Custom made for the existing main door, utility door
                          and balcony door.
                        </li>
                        <li className="Product_Points">
                          It has a felt grove to stop gaps in the contact
                          surface and is constructed from a 2-inch aluminum
                          profile with SS 304 mesh.
                        </li>
                        
                        <li className="Product_Points">
                          This system is recommended for doors having width
                          above 4 feet.
                        </li>
                      </ul>

                      <p className="Product_Feature mt-5">Advantages</p>
                      <ul>
                        <li className="Product_Points">
                          Simple to use; You can take the system apart from the
                          hinges to wash and re-attach.
                        </li>
                      </ul>
                      <p className="Product_Feature mt-5">Color Options</p>
                     
                      <ul>
                        <li className="Product_Points">White</li>
                        <li className="Product_Points">Bronze</li>
                        <li className="Product_Points">Wood finish</li>
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
              name="Openable Double Door System"
            />
          )}

          {isMobile && (
            <>
              <div className="row cards_row mt-5">
                <div className="col-12 mt-3">
                  <h5 className="Product_Name ms-3">
                    Openable Double Door System
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
                    <source src={OpenableDoubleDrVideo} type="video/mp4" />
                  </Video>
                </div>
              </div>

              <div className="col-12 mt-5">
               
                <ul className="pr-5">
                  <li className="Product_Points">
                    Custom made for the existing main door, utility door and
                    balcony door.
                  </li>
                  <li className="Product_Points">
                    It has a felt grove to stop gaps in the contact surface and
                    is constructed from a 2-inch aluminum profile with SS 304
                    mesh.
                  </li>
                 
                  <li className="Product_Points">
                    This system is recommended for doors having width above 4
                    feet.
                  </li>
                </ul>

                <p className="Product_Feature mt-5">Advantages</p>
                <ul>
                  <li className="Product_Points">
                    Simple to use; You can take the system apart from the hinges
                    to wash and re-attach.
                  </li>
                </ul>
                <p className="Product_Feature mt-5">Color Options</p>
               
                <ul>
                  <li className="Product_Points">White</li>
                  <li className="Product_Points">Bronze</li>
                  <li className="Product_Points">Wood finish</li>
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
                Other Products in 'Openable System' category
              </h5>
            </div>

            <div className="col-lg-3 col-md-5 col-sm-5 col-10 text-center mt-5">
              <div className="otherproduct_card text-center">
                <Link to="/openablesingledr" style={{ textDecoration: "none" }}>
                  <img
                    src={OpenableSingleDoorSystem}
                    alt=""
                    className="img-fluid  mt-2 pt-1"
                  ></img>
                  <h4 className="otherproductcard_title mt-4">
                    Openable Single Door<br></br>System
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
export default OpenableDoubleDoor;
