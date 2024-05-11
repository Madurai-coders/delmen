import Footer from "../../Footer/footer";
import Navbar1 from "../../Navbar_1/navbar_1";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import WindowSystem from "../../../assets/Windows Accessories/rollerdr.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import BuyingReq from "../../card_section/Buyingreq";
import CloseIcon from "@mui/icons-material/Close";
import MultiSlidingDoor from "../../../assets/Windows Accessories/MultiSlidingDoor.png";
import Callback from "../../card_section/Callback";
import SlidingVideo from "../../../assets/ProductsVideo/slidingdoor.mp4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
function SlidingDoor() {
  const [CallBackCard, setCallBackCard] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTab = useMediaQuery({ query: "(min-width: 767px)" });
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
                        <source src={SlidingVideo} type="video/mp4" />
                      </Video>

                      <div className="p-5">
                       
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="Product_Detail mt-3">
                      <h5 className="Product_Name">Sliding Door System </h5>
                      <ul className="pr-5">
                        <li className="Product_Points">
                          Aluminum two-inch profiles are used to make the
                          sliding door system.
                        </li>
                        <li className="Product_Points">
                          This system can be built to fit your exact
                          specifications based on the sliding door system you
                          currently have.
                        </li>
                        <li className="Product_Points">
                          This framework may be installed on your current track
                          or a new track can be built next to your sliding door
                          system.
                        </li>
                        <li className="Product_Points">
                          It comes with grade 304 stainless steel mesh.
                        </li>
                      </ul>

                      <p className="Product_Feature mt-5">Features</p>
                      <ul>
                        <li className="Product_Points">
                          Both the mechanism and the mesh have high durability.
                        </li>
                        <li className="Product_Points">
                          The system has a very high degree of transparency
                          since the mesh is firmly and tightly attached to the
                          profile.
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
              name="Sliding Door System"
            />
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
                    <source src={SlidingVideo} type="video/mp4" />
                  </Video>
                </div>
              </div>

              <div className="col-12 mt-5">
                <ul className="pr-5">
                  <li className="Product_Points">
                    Aluminum two-inch profiles are used to make the sliding door
                    system.
                  </li>
                  <li className="Product_Points">
                    This system can be built to fit your exact specifications
                    based on the sliding door system you currently have.
                  </li>
                  <li className="Product_Points">
                    This framework may be installed on your current track or a
                    new track can be built next to your sliding door system.
                  </li>
                  <li className="Product_Points">
                    It comes with grade 304 stainless steel mesh.
                  </li>
                </ul>

                <p className="Product_Feature mt-5">Features</p>
                <ul>
                  <li className="Product_Points">
                    Both the mechanism and the mesh have high durability.
                  </li>
                  <li className="Product_Points">
                    The system has a very high degree of transparency since the
                    mesh is firmly and tightly attached to the profile.
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
                Other Products in 'Doors/Windows Accessories' category
              </h5>
            </div>

            <div className="col-lg-3 col-md-5 col-sm-5 col-10 text-center mt-5">
              <div className="otherproduct_card text-center">
                <Link to="/multislidingdr" style={{ textDecoration: "none" }}>
                  <img
                    src={MultiSlidingDoor}
                    alt=""
                    className="img-fluid  mt-2 pt-1"
                  ></img>
                  <h4 className="otherproductcard_title mt-4">
                    Multi Sliding Door
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
export default SlidingDoor;
