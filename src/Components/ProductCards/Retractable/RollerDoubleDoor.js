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
import RetractableRollerDoubleDoor from "../../../assets/Retractable Double Door/RollerDoubledr.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import RollerDrVideo from "../../../assets/ProductsVideo/rollerdr.mp4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import BuyingReq from "../../card_section/Buyingreq";
import CloseIcon from "@mui/icons-material/Close";
import Callback from "../../card_section/Callback";
function RollerDoubleDoor() {
  const [CallBackCard, setCallBackCard] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTab = useMediaQuery({ query: "(min-width: 767px)" });

  const handleWhatsAppClick = () => {
    // Direct to WhatsApp with your number
    window.location.href = 'https://wa.me/9342883487'; // Replace 1234567890 with your WhatsApp number
  };
  return (
    <>
      <div className="retractable">
        <div className="container">
          <Navbar1 />
          {isTab && (
            <>
              <div className="CARDS_4">
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
                        <source src={RollerDrVideo} type="video/mp4" />
                      </Video>
                      <div className="p-5">
                        
                          
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="Product_Detail mt-3">
                      <h5 className="Product_Name">
                        Retractable Roller Door System
                      </h5>
                      <ul className="pr-5">
                        <li className="Product_Points">
                          Retractable Roller Door System is specifically
                          designed to fit the existing doors.
                        </li>
                        <li className="Product_Points">
                          This product can be installed on already-existing
                          backyard, balcony and utility doors.
                        </li>
                        <li className="Product_Points">
                          This system is compatible with any type of door,
                          whether it is made of wood, UPVC or aluminum.
                        </li>
                        <li className="Product_Points">
                          Fiberglass mesh (stiff mesh) and aluminum profiles are
                          used in the fabrication of the system. Every time you
                          use the system, a brush is incorporated to clean the
                          mesh.
                        </li>
                      </ul>

                      <p className="Product_Feature mt-5">Advantages</p>
                      <ul>
                        <li className="Product_Points">
                          It is a system that doesn't take up much space.
                        </li>
                        <li className="Product_Points">
                          It's quite simple to use, provides a high level of
                          transparency in the mesh and has a nice sturdy
                          appearance.
                        </li>
                        <li className="Product_Points">
                          This system is compatible with any type of door,
                          whether it is made of wood, UPVC or aluminum.
                        </li>
                        <li className="Product_Points">
                          It can be operated from left to right or right to
                          left.
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
                        <Link to="/contactus">
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
              name="Retractable Roller Double Door System"
            />
          )}

          {isMobile && (
            <>
              <div className="row cards_row mt-5">
                <div className="col-12 mt-3">
                  <h5 className="Product_Name ms-3">
                    Retractable Roller Door System
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
                    <source src={RollerDrVideo} type="video/mp4" />
                  </Video>
                </div>
              </div>

              <div className="col-12 mt-5">
                <ul className="pr-5">
                  <li className="Product_Points">
                    Retractable Roller Door System is specifically designed to
                    fit the existing doors.
                  </li>
                  <li className="Product_Points">
                    This product can be installed on already-existing backyard,
                    balcony and utility doors.
                  </li>
                  <li className="Product_Points">
                    This system is compatible with any type of door, whether it
                    is made of wood, UPVC or aluminum.
                  </li>
                  <li className="Product_Points">
                    Fiberglass mesh (stiff mesh) and aluminum profiles are used
                    in the fabrication of the system. Every time you use the
                    system, a brush is incorporated to clean the mesh.
                  </li>
                </ul>
                <p className="Product_Feature mt-5">Advantages</p>
                <ul>
                  <li className="Product_Points">
                    It is a system that doesn't take up much space.
                  </li>
                  <li className="Product_Points">
                    It's quite simple to use, provides a high level of
                    transparency in the mesh and has a nice sturdy appearance.
                  </li>
                  <li className="Product_Points">
                    This system is compatible with any type of door, whether it
                    is made of wood, UPVC or aluminum.
                  </li>
                  <li className="Product_Points">
                    It can be operated from left to right or right to left.
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
                Other Products in 'Retractable Door' category
              </h5>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-10 text-center mt-5">
              <div className="otherproduct_card text-center ms-5">
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
                    Retractable Double<br></br>Door
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

export default RollerDoubleDoor;
