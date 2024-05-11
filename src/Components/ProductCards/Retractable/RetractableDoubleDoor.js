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
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import BuyingReq from "../../card_section/Buyingreq";
import CloseIcon from "@mui/icons-material/Close";
import Callback from "../../card_section/Callback";
import RollerDoubleDrVideo from "../../../assets/ProductsVideo/rollerdoubledr.mp4";
import Slidingdr from "../../../assets/Windows Accessories/rollerdr.png";

import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
function RetractableDoubleDoor() {
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
                        <source src={RollerDoubleDrVideo} type="video/mp4" />
                      </Video>
                      <div className=" p-5">
                       
                         
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="Product_Detail mt-3">
                      <h5 className="Product_Name">
                        Retractable Double Door System
                      </h5>
                      <div></div>
                      <ul className="pr-5">
                        <li className="Product_Points">
                          Our specialty is producing top-notch double doors that
                          may be installed on your existing French doors.
                        </li>
                        <li className="Product_Points">
                          This system can only be designed with fiber glass mesh
                          (stiff mesh)
                        </li>
                        <li className="Product_Points">
                          The largest size that may be produced is 3metre by
                          3.5metre in height and width.
                        </li>
                        <li className="Product_Points">
                          This mechanism has a magnet in the middle to secure
                          it.
                        </li>
                      </ul>
                      <p className="Product_Feature mt-5">Features</p>
                      <ul>
                        <li className="Product_Points">
                          Mounted vertically on the left and right sides using a
                          2-inch box section
                        </li>
                      </ul>
                      <p className="Product_Feature mt-5">Advantages</p>
                      <ul>
                        <li className="Product_Points">Easy to operate</li>
                        <li className="Product_Points">Hassel free</li>
                        <li className="Product_Points">
                          It does not take any additional space.
                        </li>
                      </ul>
                      <p className="Product_Feature mt-5">Color Options</p>

                      <ul>
                        <li className="Product_Points">White</li>
                        <li className="Product_Points">Bronze</li>
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
                    <source src={RollerDoubleDrVideo} type="video/mp4" />
                  </Video>
                </div>
              </div>

              <div className="col-12 mt-5">
                <ul className="pr-5">
                  <li className="Product_Points">
                    Our specialty is producing top-notch double doors that may
                    be installed on your existing French doors.
                  </li>
                  <li className="Product_Points">
                    This system can only be designed with fiber glass mesh
                    (stiff mesh)
                  </li>
                  <li className="Product_Points">
                    The largest size that may be produced is 3metre by 3.5metre
                    in height and width.
                  </li>
                  <li className="Product_Points">
                    This mechanism has a magnet in the middle to secure it.
                  </li>
                </ul>
                <p className="Product_Feature mt-5">Features</p>
                <ul>
                  <li className="Product_Points">
                    Mounted vertically on the left and right sides using a
                    2-inch box section
                  </li>
                </ul>
                <p className="Product_Feature mt-5">Advantages</p>
                <ul>
                  <li className="Product_Points">Easy to operate</li>
                  <li className="Product_Points">Hassel free</li>
                  <li className="Product_Points">
                    It does not take any additional space.
                  </li>
                </ul>

                <p className="Product_Feature mt-5">Color Options</p>

                <ul>
                  <li className="Product_Points">White</li>
                  <li className="Product_Points">Bronze</li>
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

export default RetractableDoubleDoor;
