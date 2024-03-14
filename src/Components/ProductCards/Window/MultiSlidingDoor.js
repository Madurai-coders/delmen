import Footer from "../../Footer/footer";
import Navbar1 from "../../Navbar_1/navbar_1";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import RetractableDoubleDoor from "../../../assets/Retractable Double Door/RetractableDoubleDoor.png";
import OpenableSingleDoorSystem from "../../../assets/Retractable Double Door/OpenableSingleDoorSystem.png";
import RetractableRollerDoubleDoor from "../../../assets/Retractable Double Door/RollerDoubledr.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import ProductVideo from "../../../assets/ProductsVideo/multislidingdr.mp4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import CloseIcon from "@mui/icons-material/Close";
import BuyingReq from "../../card_section/Buyingreq";
import Callback from "../../card_section/Callback";
function MultiSlidingDoor() {
  const [CallBackCard, setCallBackCard] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTab = useMediaQuery({ query: "(min-width: 767px)" });
  const isCard_1 = useMediaQuery({ query: "(min-width: 992px)" });
  const isCard_3 = useMediaQuery({ query: "(min-width: 576px)" });

  return (
    <>
      <div className="RollerDr">
        <div className="container">
          <Navbar1 />

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
                        <source src={ProductVideo} type="video/webm" />
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
                        Multi Sliding Door System
                      </h5>

                      <ul className="pr-5">
                        <li className="Product_Points">
                          It is constructed from 2-inch aluminum profile and
                          304-grade stainless steel mesh.
                        </li>
                        <li className="Product_Points">
                          In order to close gaps in the contact surface, it has
                          felt grove. Double screw joints are used during
                          assembly to prevent twisting in the frame and breaking
                          of the edges.
                        </li>
                        <li className="Product_Points">
                          It is advisable to install this type of sliding door
                          on your aluminum and UPVC multi-sliding doors.
                        </li>
                        <li className="Product_Points">
                          With an extra track, this can be installed next to
                          your current multi-sliding glass door.
                        </li>
                      </ul>
                      <p className="Product_Feature mt-5">Advantages</p>
                      <ul>
                        <li className="Product_Points">
                          Given that SS Mesh is being used, it will be
                          rodent-free.
                        </li>
                        <li className="Product_Points">
                          Our system's mesh is exceptionally stiff and steady.
                        </li>
                      </ul>
                      <p className="Product_Feature mt-5">Color Options</p>
                      <h6 className="product_customize mt-3">
                        Can be customized as per the client’s requirement. Our
                        main-color options are listed below.
                      </h6>
                      <ul>
                        <li className="Product_Points">White</li>
                        <li className="Product_Points">Bronze</li>
                        <li className="Product_Points">Wood finish</li>
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
              name="Multi Sliding Door System"
            />
          )}

          {isMobile && (
            <>
              <div className="row cards_row mt-5">
                <div className="col-12 mt-3">
                  <h5 className="Product_Name ms-3">
                    Multi Sliding Door System
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
                    <source src={ProductVideo} type="video/webm" />
                  </Video>
                </div>
              </div>

              <div className="col-12 mt-5">
                <ul className="pr-5">
                  <li className="Product_Points">
                    It is constructed from 2-inch aluminum profile and 304-grade
                    stainless steel mesh.
                  </li>
                  <li className="Product_Points">
                    In order to close gaps in the contact surface, it has felt
                    grove. Double screw joints are used during assembly to
                    prevent twisting in the frame and breaking of the edges.
                  </li>
                  <li className="Product_Points">
                    It is advisable to install this type of sliding door on your
                    aluminum and UPVC multi-sliding doors.
                  </li>
                  <li className="Product_Points">
                    With an extra track, this can be installed next to your
                    current multi-sliding glass door.
                  </li>
                </ul>
                <p className="Product_Feature mt-5">Advantages</p>
                <ul>
                  <li className="Product_Points">
                    Given that SS Mesh is being used, it will be rodent-free.
                  </li>
                  <li className="Product_Points">
                    Our system's mesh is exceptionally stiff and steady.
                  </li>
                </ul>
                <p className="Product_Feature mt-5">Color Options</p>
                <h6 className="product_customize mt-3">
                  Can be customized as per the client’s requirement. Our
                  main-color options are listed below.
                </h6>
                <ul>
                  <li className="Product_Points">White</li>
                  <li className="Product_Points">Bronze</li>
                  <li className="Product_Points">Wood finish</li>
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
            {isCard_3 && (
              <>
                <div className="col-lg-3 col-md-6 col-sm-6 col-6 text-center mt-5">
                  <div className="otherproduct_card  text-center">
                    <Link
                      to="/retractabledoubledoor"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={RetractableRollerDoubleDoor}
                        alt=""
                        className="img-fluid  mt-2 pt-1"
                      ></img>
                      <h4 className="otherproductcard_title mt-4">
                        Retractable Double Door
                      </h4>
                    </Link>
                  </div>
                </div>
              </>
            )}

            <div className="col-lg-3 col-md-6 col-sm-6 col-10 text-center mt-5">
              <div className="otherproduct_card text-center">
                <Link to="/rollerdoubledoor" style={{ textDecoration: "none" }}>
                  <img
                    src={RetractableDoubleDoor}
                    alt=""
                    className="img-fluid  mt-2 pt-1"
                  ></img>
                  <h4 className="otherproductcard_title mt-4">
                    Retractable Roller Double Door<br></br>System
                  </h4>
                </Link>
              </div>
            </div>

            {isCard_1 && (
              <>
                <div className="col-lg-3 col-md-6 col-sm-6 col-10 text-center mt-5">
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
export default MultiSlidingDoor;
