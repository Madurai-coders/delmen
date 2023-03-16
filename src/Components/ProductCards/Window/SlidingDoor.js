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
import WindowSystem from "../../../assets/Windows Accessories/WindowSystem.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import SlidingDrVideo from "../../../assets/ProductsVideo/slidingdr.mp4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import BuyingReq from "../../card_section/Buyingreq";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import StainlessSteel from '../../../assets/Magnetic Insect Screens/stainlesssteel.png';
function SlidingDoor() {
  const [CallBackCard, setCallBackCard] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTab = useMediaQuery({ query: "(min-width: 767px)" });
  const isCard_3 = useMediaQuery({ query: "(min-width: 576px)" });

  return (
    <>
      <div className="RollerDr">
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
                      <source src={SlidingDrVideo} type="video/webm" />
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
                    <h5 className="Product_Title mt-4">Sliding Door System </h5>
                    <p className="Product_Exn mt-3">
                      Sliding Door offered by us is made having robust &
                      beautiful PVC frame with double glazed window panes. It is
                      highly appreciated for having ability to maintain optimum
                      internal temperature according to weather conditions. This
                      door is completely suitable to be employed in houses,
                      bungalows, resorts, and residential apartments. It is
                      hassle-free to install and has been equipped with superior
                      quality bearings & wheels for ensuring smooth & silent
                      movement. Sliding Door is available in different colors &
                      designs as requested by our respected clients.
                    </p>
                    <p className="Product_Feature mt-5">Features</p>
                    <ul>
                      <li className="Product_Points">
                        Good weather resistance
                      </li>
                      <li className="Product_Points">
                        Easy to clean & maintain with help of soft cloth
                      </li>
                      <li className="Product_Points">Highly durable</li>
                    </ul>

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
                <h5 className="Product_Name ms-3">Sliding Door System</h5>
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
                  <source src={SlidingDrVideo} type="video/webm" />
                </Video>
              </div>
            </div>

            <div className="col-12 mt-5">
              <h5 className="product_des mt-4">product description</h5>
              <h5 className="Product_Title mt-4">Sliding Door System </h5>
              <p className="Product_Exn mt-3">
                Sliding Door offered by us is made having robust & beautiful PVC
                frame with double glazed window panes. It is highly appreciated
                for having ability to maintain optimum internal temperature
                according to weather conditions. This door is completely
                suitable to be employed in houses, bungalows, resorts, and
                residential apartments. It is hassle-free to install and has
                been equipped with superior quality bearings & wheels for
                ensuring smooth & silent movement. Sliding Door is available in
                different colors & designs as requested by our respected
                clients.
              </p>
              <p className="Product_Feature mt-5">Features</p>
              <ul>
                <li className="Product_Points">Good weather resistance</li>
                <li className="Product_Points">
                  Easy to clean & maintain with help of soft cloth
                </li>
                <li className="Product_Points">Highly durable</li>
              </ul>

              <p className="Product_Feature mt-5">Price And Quantity</p>
              <ul>
                <li className="Product_Points">
                  Minimum Order Quantity 100 Square Foot
                </li>
                <li className="Product_Points">Price 250 INR/Square Foot</li>
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
                <Button variant="contained" className="ENQUIRY_btn mt-4"
                 sx={{ width: "100%" }}>
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
            <h5 className="other_subtxt mt-4">Minimum Order Quantity : 100</h5>
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
                to="/openabledoorwithmesh"
                style={{ textDecoration: "none" }}
              >
                <img
                  src={StainlessSteel}
                  alt=""
                  className="img-fluid  mt-2 pt-1"
                ></img>
                <h4 className="otherproductcard_title mt-4">
                  Openable Door System<br></br>With Stainless Steel Mesh
                </h4>
              </Link>
            </div>
          </div>
          <div className="col-3 text-center mt-5"></div>
        </div>
        <div className="FOOTER">
          <Footer />
        </div>
      </div>
    </>
  );
}
export default SlidingDoor;
