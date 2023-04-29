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
import "../../../CSS/productscards/card_1.css";
import BuyingReq from "../../card_section/Buyingreq";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import SlidingDoor from "../../../assets/Windows Accessories/WindowSystem.png";
import StainlessSteelVideo from "../../../assets/ProductsVideo/stainlesssteel.mp4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import SlidingWindowSystem from "../../../assets/Windows Accessories/rollerwindow.png";
import Callback from "../../card_section/Callback";
function StainlessSteelWithMesh() {
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
                        <source src={StainlessSteelVideo} type="video/webm" />
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
                        Magnetic Net With Stainless Steel Mesh
                      </h5>

                      <h5 className="product_des mt-4">product description</h5>
                      <h5 className="Product_Title mt-4">
                        Magnetic Net With Stainless Steel Mesh
                      </h5>
                      <p className="Product_Exn mt-3">
                        Magnetic Net with Stainless Steel Mesh is considered to
                        be the best option for allowing entry of natural light
                        while keeping the door locked. It is ideal for use in
                        residential apartments, bungalows, and houses. This is a
                        type of double door system which comprises one normal &
                        one mesh door. It can be installed in hassle-free manner
                        during new construction & renovation. Openable Door
                        system with Stainless Steel Mesh has been equipped with
                        high quality metal hinges that ensure smooth & silent
                        movement.
                      </p>
                      <p className="Product_Feature mt-5">Features</p>
                      <ul>
                        <li className="Product_Points">
                          Good structural strength
                        </li>
                        <li className="Product_Points">Highly durable</li>
                        <li className="Product_Points">
                          Comprises a bolt latch for locking
                        </li>
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
              name="Magnetic Net With Stainless Steel Mesh"
            />
          )}
          {isMobile && (
            <>
              <div className="row cards_row mt-5">
                <div className="col-12 mt-3">
                  <h5 className="Product_Name ms-3">
                    Magnetic Net With Stainless Steel Mesh
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
                    <source src={StainlessSteelVideo} type="video/webm" />
                  </Video>
                </div>
              </div>

              <div className="col-12 mt-5">
                <h5 className="product_des mt-4">product description</h5>
                <h5 className="Product_Title mt-4">
                  Magnetic Net With Stainless Steel Mesh
                </h5>
                <p className="Product_Exn mt-3">
                  Magnetic Net With Stainless Steel Mesh is considered to be the
                  best option for allowing entry of natural light while keeping
                  the door locked. It is ideal for use in residential
                  apartments, bungalows, and houses. This is a type of double
                  door system which comprises one normal & one mesh door. It can
                  be installed in hassle-free manner during new construction &
                  renovation. Openable Door system with Stainless Steel Mesh has
                  been equipped with high quality metal hinges that ensure
                  smooth & silent movement.
                </p>
                <p className="Product_Feature mt-5">Features</p>
                <ul>
                  <li className="Product_Points">Good structural strength</li>
                  <li className="Product_Points">Highly durable</li>
                  <li className="Product_Points">
                    Comprises a bolt latch for locking
                  </li>
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
            {isCard_3 && (
              <>
                <div className="col-lg-3 col-md-4 col-sm-4 text-center mt-5">
                  <div className="otherproduct_card text-center">
                    <Link
                      to="/slidingwindowsystem"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={SlidingWindowSystem}
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
          </div>
        </div>

        <div className="FOOTER">
          <Footer />
        </div>
      </div>
    </>
  );
}
export default StainlessSteelWithMesh;
