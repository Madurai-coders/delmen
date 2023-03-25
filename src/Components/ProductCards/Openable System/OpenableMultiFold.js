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
import RetractableDoubleDoor from "../../../assets/Retractable Double Door/RetractableDoubleDoor.png";
import OpenableSingleDoorSystem from "../../../assets/Retractable Double Door/OpenableSingleDoorSystem.png";
import RetractableRollerDoubleDoor from "../../../assets/Retractable Double Door/RollerDoubledr.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import OpenableMultiFoldVideo from "../../../assets/ProductsVideo/foldingdoor.mp4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";
import BuyingReq from "../../card_section/Buyingreq";

function OpenableMultiFold() {
  const [CallBackCard, setCallBackCard] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTab = useMediaQuery({ query: "(min-width: 767px)" });
  const isCard_1 = useMediaQuery({ query: "(min-width: 992px)" });
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
                      <source src={OpenableMultiFoldVideo} type="video/webm" />
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
                    <h5 className="Product_Name">Openable MultiFold Door</h5>

                    <h5 className="product_des mt-4">product description</h5>

                    <h5 className="Product_Title mt-4">
                      Openable MultiFold Door
                    </h5>
                    <p className="Product_Exn mt-3">
                      Open able Folding Door This product is mounted adjacent to
                      your existing Main door. It is assembled with 2" Aluminum
                      Profile and double SS screw Joint, The Mesh is SS 304 Mesh
                      (Rust Free) This system has removable hinges and it can be
                      removed from the hinges to wash the door and fix back, In
                      general the main doors are made up of wood and the size
                      will be width 3'6" feet X 7 feet Hight. Handling mesh door
                      is a little complicated, We design as per customer request
                      1' feet to 1.5'feet width one fold. and the other fold
                      2'feet to 2.5'feet Advantages of the product both folds
                      can be opened when required.
                    </p>

                    <p className="Product_Feature mt-5">Price And Quantity</p>
                    <ul>

                      <li className="Product_Points">
                        Minimum Order Quantity 100 Square Foot
                      </li>
                    </ul>
                    <p className="Product_Feature mt-5">Trade Information</p>
                    <ul>
                      <li className="Product_Points">
                        Supply Ability 1000 Square Foot Per Day
                      </li>
                      <li className="Product_Points">Delivery Time 1 Week</li>
                    </ul>
                    <div className="d-flex flex-row mt-5 pt-3">
                      <Button
                        variant="outlined"
                        className="callback_btn"
                        onClick={() => setCallBackCard(true)}
                      >
                        request to call back
                      </Button>
                      <Link to="/contactus" style={{ textDecoration: "none" }}>
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
          <>
            <div className="callbackcard text-center">
              <div className="row justify-content-center">
                <div className="col-12 text-end">
                  <IconButton
                    className="me-3 mt-1"
                    onClick={() => setCallBackCard(false)}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
                <h5 className="callback_title mt-2">
                  Add a Mobile Number To Receive Call From<br></br> "DELMEN
                  MOSQUITO SCREENS"
                </h5>
                <div className="col-lg-6 col-md-8 col-sm-8 col-10 mt-3">
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Mobile No"
                    variant="outlined"
                    className="mobile_input mt-4 pt-2"
                  />
                </div>
                <div className="col-lg-7 col-md-8 col-sm-8 col-10 text-center mt-5">
                  <Button type="button" className="Callback_btn me-2">
                    Request To Call Back
                  </Button>
                </div>
              </div>
            </div>
          </>
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
                  <source src={OpenableMultiFoldVideo} type="video/webm" />
                </Video>
              </div>
            </div>

            <div className="col-12 mt-5">
              <h5 className="product_des mt-4">product description</h5>

              <h5 className="Product_Title mt-4">Openable MultiFold Door</h5>
              <p className="Product_Exn mt-3">
                Open able Folding Door This product is mounted adjacent to your
                existing Main door. It is assembled with 2" Aluminum Profile and
                double SS screw Joint, The Mesh is SS 304 Mesh (Rust Free) This
                system has removable hinges and it can be removed from the
                hinges to wash the door and fix back, In general the main doors
                are made up of wood and the size will be width 3'6" feet X 7
                feet Hight. Handling mesh door is a little complicated, We
                design as per customer request 1' feet to 1.5'feet width one
                fold. and the other fold 2'feet to 2.5'feet Advantages of the
                product both folds can be opened when required.
              </p>

              <p className="Product_Feature mt-5">Price And Quantity</p>
              <ul>
                <li className="Product_Points">
                  Minimum Order Quantity 100 Square Foot
                </li>
              </ul>
              <p className="Product_Feature mt-5">Trade Information</p>
              <ul>
                <li className="Product_Points">
                  Supply Ability 1000 Square Foot Per Day
                </li>
                <li className="Product_Points">Delivery Time 1 Week</li>
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
              <Link to="/contactus" style={{ textDecoration: "none"}}>
                <Button variant="contained" className="ENQUIRY_btn mt-4" sx={{width:"100%"}}>
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
            <h5 className="other_subtxt mt-4">Minimum Order Quantity : 100</h5>
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
                      src={RetractableDoubleDoor}
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
                  src={RetractableRollerDoubleDoor}
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
export default OpenableMultiFold;
