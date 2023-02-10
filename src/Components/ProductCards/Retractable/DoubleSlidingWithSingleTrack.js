import Footer from "../../Footer/footer";
import Navbar_1 from "../../Navbar_1/navbar_1";
import Doubleslidingwithtrack from "../../../assets/CardsImg/doubleslidingdoorwithsingletrack.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import PriceCard from "../../card_section/PriceCard";
import WindowSystem from "../../../assets/Windows Accessories/WindowSystem.png";
import DoubleDoor from "../../../assets/Windows Accessories/DoubleDoor.png";
import SlidingDoor from "../../../assets/Windows Accessories/SlidingDoor.png";
import RetractableDoubleDoor from "../../../assets/Retractable Double Door/RetractableDoubleDoor.png";
import RetractableRollerDoubleDoor from "../../../assets/Retractable Double Door/RollerDoubledr.png";
import OpenableSingleDoorSystem from "../../../assets/Retractable Double Door/OpenableSingleDoorSystem.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
function DoubleSlidingWithSingleTrack() {
  const [pricecard, setpricecard] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTab = useMediaQuery({ query: "(min-width: 767px)" });
  const isCard_1 = useMediaQuery({ query: "(min-width: 992px)" });
  const isCard_3 = useMediaQuery({ query: "(min-width: 576px)" });

  return (
    <>
      <div className="RollerDr">
        <Navbar_1 />
        {isTab && (
          <>
            <div className="CARDS">
              <div className="row mt-5 cards_row">
                <div className="col-5">
                  <div className="Card_1">
                    <img
                      src={Doubleslidingwithtrack}
                      alt=""
                      className="img-fluid"
                    ></img>
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
                      Double Sliding With Single Track System
                    </h5>

                    <h5 className="Square">
                      250 INR<code className="Square_txt">/Square Foot</code>{" "}
                      <Button
                        type="button"
                        className="price_btn ms-4"
                        onClick={() => setpricecard(!pricecard)}
                      >
                        Get a Price/Quote
                      </Button>
                    </h5>
                    <h5 className="product_des mt-4">product description</h5>
                    <h5 className="Product_Title mt-4">
                      Double Sliding With Single Track System
                    </h5>
                    <p className="Product_Exn mt-3">
                      It is made out of 2Aluminium Profile with SS mesh It has
                      Felt Grove to arrest gaps in the contact surface It is
                      assembled with double screw Joints to avoid breakage in
                      the edges and Twist in the frame It is advisable to fix
                      this kind of Sliding Door, to your UPVC Sliding Door as
                      well Aluminium Sliding Systems
                    </p>

                    <p className="Product_Feature mt-5">Price And Quantity</p>
                    <ul>
                      <li className="Product_Points">
                        Minimum Order Quantity 100 Square Foot
                      </li>
                      <li className="Product_Points">
                        Price 250 INR/Square Foot
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
                      <Button variant="outlined" className="callback_btn">
                        request to call back
                      </Button>
                      <Button variant="contained" className="ENQUIRY_btn ms-5">
                        send inquiry
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {pricecard && (
          <>
            <PriceCard PriceCardTitle="Get a price quote for Double Sliding With Single Track System"></PriceCard>
          </>
        )}

        {isMobile && (
          <>
            <div className="row cards_row mt-5">
              <div className="col-12 mt-3">
                <h5 className="Product_Name ms-3">
                  Double Sliding With Single Track System
                </h5>

                <h5 className="Square ms-3">
                  250 INR<code className="Square_txt">/Square Foot</code>
                </h5>
              </div>
              <div className="col-12 text-center mt-5">
                <img
                  src={Doubleslidingwithtrack}
                  alt=""
                  className="img-fluid"
                ></img>
                <div className="mt-5">
                  <Button
                    type="button"
                    className="price_btn"
                    onClick={() => setpricecard(!pricecard)}
                  >
                    Get a Price/Quote
                  </Button>
                </div>
              </div>
            </div>

          
            <div className="col-12 mt-5">
              <h5 className="product_des mt-4">product description</h5>
              <h5 className="Product_Title mt-4">
                Double Sliding With Single Track System
              </h5>
              <p className="Product_Exn mt-3">
                It is made out of 2Aluminium Profile with SS mesh It has Felt
                Grove to arrest gaps in the contact surface It is assembled with
                double screw Joints to avoid breakage in the edges and Twist in
                the frame It is advisable to fix this kind of Sliding Door, to
                your UPVC Sliding Door as well Aluminium Sliding Systems
              </p>

              <p className="Product_Feature mt-5">Price And Quantity</p>
              <ul>
                <li className="Product_Points">
                  Minimum Order Quantity 100 Square Foot
                </li>
                <li className="Product_Points">Price 250 INR/Square Foot</li>
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
              <Button variant="outlined" className="callback_btn mt-3">
                request to call back
              </Button>
              <Button variant="contained" className="ENQUIRY_btn mt-4">
                send inquiry
              </Button>
            </div>
          </>
        )}

         <div className="row justify-content-center cards_row">
          <div className="col-lg-9 col-md-9 col-sm-10 col-11">
            <div className="contactform1">
              <h4 className="contactus_des1 pl-5 pt-5">
                Enter Buying Requirement Details
              </h4>

              <textarea
                className="textarea ml-5 mt-2"
                placeholder="*To Get accurate quotes. Please include product name, order quantity, usage, special requests if any in your inquiry."
              ></textarea>
              <h6 className="attachment1 ml-5 mt-3">+ Add Attachment</h6>
              <div className="row ms-4 mt-4 Card_EMAIL">
                <div className="col-lg-5 col-md-5 col-sm-5 col-11 ms-2 Card_EMAIL">
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    label="Email"
                    variant="outlined"
                    className="email_input1"
                  />
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5 col-11 ms-4 Card_EMAIL1">
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    label="Mobile No"
                    variant="outlined"
                    className="email_input1"
                  />
                </div>
              </div>
              <div className="row mt-5 cards_row">
                <div className="col-11 text-center mt-3">
                  <button type="button" className="btn contact_sendinquiry">
                    Send Inquiry
                  </button>
                </div>
              </div>
              <div className="col-12 text-center">
                <h6 className="contactus_txt1 mt-5 ">
                  "We are accepting local inquiries mostly from Tamil Nadu &
                  Karnataka."
                </h6>
              </div>
            </div>
          </div>
        </div> 
         <div className="row justify-content-center cards_row">
          <div className="col-12 text-center">
            <h5 className="other_txt">
              Other Products in 'Retractable Double Door' category
            </h5>
            <h5 className="other_subtxt mt-4">Minimum Order Quantity : 100</h5>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-8 text-center mt-5">
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
                <h4 className="otherproductcard_title mt-4">Retractable Double Door</h4>
                <h6 className="otherproductcard_des mt-3">250 INR/Square Foot</h6>
              </Link>
            </div>
          </div>
          {isCard_3 && (
            <>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 text-center mt-5">
                <div className="otherproduct_card text-center">
                  <Link
                    to="/rollerdoubledoor"
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src={RetractableRollerDoubleDoor}
                      alt=""
                      className="img-fluid  mt-2 pt-1"
                    ></img>
                    <h4 className="otherproductcard_title mt-4">
                      Retractable Roller Double Door<br></br>System
                    </h4>
                    <h6 className="otherproductcard_des mt-3">250 INR/Square Foot</h6>
                  </Link>
                </div>
              </div>
            </>
          )}
          {isCard_1 && (
            <>
              <div className="col-lg-3 col-md-6 col-6 text-center mt-5">
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
                    <h6 className="otherproductcard_des mt-3">250 INR/Square Foot</h6>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div> 
        <div className="FOOTER">
          <Footer />
        </div>
      </div>
    </>
  );
}
export default DoubleSlidingWithSingleTrack;
