import Footer from "../../Footer/footer";
import Navbar1 from "../../Navbar_1/navbar_1";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import BuyingReq from "../../card_section/Buyingreq";
import CloseIcon from "@mui/icons-material/Close";
import Callback from "../../card_section/Callback";
import Slidingdr from "../../../assets/Windows Accessories/rollerdr.png";
import OpenableWindowVideo from "../../../assets/ProductsVideo/openablewindow.mp4";
import OpenableSingleDoorSystem from "../../../assets/Retractable Double Door/OpenableSingleDoorSystem.png";

function OpenableWindow() {
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
                        <source src={OpenableWindowVideo} type="video/mp4" />
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
                      <h5 className="Product_Name">Openable Window System</h5>

                      <ul className="pr-5">
                        <li className="Product_Points">
                          Openable window system can be installed to your wooden
                          windows and casement window in UPVC.
                        </li>
                        <li className="Product_Points">
                          The system is specially designed with screw joints to
                          all four edges of the window frame.
                        </li>
                        <li className="Product_Points">
                          We use SS 304 grade mesh.
                        </li>
                        <li className="Product_Points">
                          This system is mounted with nylon hinges.
                        </li>
                        <li className="Product_Points">
                          Our system of mounting the mesh to the window is
                          different from what is available in the market.
                        </li>
                      </ul>
                      <p className="Product_Feature mt-5">Features</p>
                      <ul>
                        <li className="Product_Points">
                          The mesh remains stiff and steady.
                        </li>
                        <li className="Product_Points">Easy to operate.</li>

                        <li className="Product_Points">
                          Easy to wash and re-attach back on your window.
                        </li>
                      </ul>

                      <p className="Product_Feature mt-5">Color Options</p>

                      <ul>
                        <li className="Product_Points">Bronze anodized</li>
                        <li className="Product_Points">Powder coated white</li>
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
              name="Openable Window System"
            />
          )}

          {isMobile && (
            <>
              <div className="row cards_row mt-5">
                <div className="col-12 mt-3">
                  <h5 className="Product_Name ms-3">Openable Window System</h5>
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
                    <source src={OpenableWindowVideo} type="video/mp4" />
                  </Video>
                </div>
              </div>

              <div className="col-12 mt-5">
                <ul className="pr-5">
                  <li className="Product_Points">
                    Openable window system can be installed to your wooden
                    windows and casement window in UPVC.
                  </li>
                  <li className="Product_Points">
                    The system is specially designed with screw joints to all
                    four edges of the window frame.
                  </li>
                  <li className="Product_Points">We use SS 304 grade mesh.</li>
                  <li className="Product_Points">
                    This system is mounted with nylon hinges.
                  </li>
                  <li className="Product_Points">
                    Our system of mounting the mesh to the window is different
                    from what is available in the market.
                  </li>
                </ul>
                <p className="Product_Feature mt-5">Features</p>
                <ul>
                  <li className="Product_Points">
                    The mesh remains stiff and steady.
                  </li>
                  <li className="Product_Points">Easy to operate.</li>

                  <li className="Product_Points">
                    Easy to wash and re-attach back on your window.
                  </li>
                </ul>

                <p className="Product_Feature mt-5">Color Options</p>

                <ul>
                  <li className="Product_Points">Bronze anodized</li>
                  <li className="Product_Points">Powder coated white</li>
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
export default OpenableWindow;
