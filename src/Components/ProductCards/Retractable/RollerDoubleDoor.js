import "../../../CSS/productscards/card_1.css";
import Navbar_1 from "../../Navbar_1/navbar_1";
import Footer from "../../Footer/footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import SingleSliderWithTrack from "../../../assets/Retractable Double Door/SingleSliderWithTrack.png";
import MagneticNet from "../../../assets/Retractable Double Door/MagneticNet.png";
import OpenableWindowSystem from "../../../assets/Retractable Double Door/OpenableWindowSystem.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import RollerDoubleDrVideo from "../../../assets/ProductsVideo/rollerdoubledr.mp4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import BuyingReq from "../../card_section/Buyingreq";
import CloseIcon from "@mui/icons-material/Close";
function RollerDoubleDoor() {
  const [PriceCard, setPriceCard] = useState(false);
  const [CallBackCard, setCallBackCard] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTab = useMediaQuery({ query: "(min-width: 767px)" });
  const isCard_1 = useMediaQuery({ query: "(min-width: 992px)" });
  const isCard_3 = useMediaQuery({ query: "(min-width: 576px)" });
  const Items = [
    {
      value: "USD",
      label: "Kilogram",
    },
    {
      value: "EUR",
      label: "Nos",
    },
    {
      value: "BTC",
      label: "Pieces",
    },
    {
      value: "JPY",
      label: "Tons",
    },
    {
      value: "JP",
      label: "Units",
    },
  ];
  const [pricequote, setpricequote] = useState({
    Email: "not_selected",
    MobileNo: "not_selected",
  });
  return (
    <>
      <div className="retractable">
        <Navbar_1></Navbar_1>
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
                      <source src={RollerDoubleDrVideo} type="video/webm" />
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
                      Retractable Roller Double Door System
                    </h5>
                    <h5 className="Square">
                      250 INR<code className="Square_txt">/Square Foot</code>
                      <Button
                        type="button"
                        className="price_btn ms-4"
                        onClick={() => setPriceCard(true)}
                      >
                        Get a Price/Quote
                      </Button>
                    </h5>
                    <h5 className="product_des mt-4">product description</h5>
                    <p className="Product_Exn mt-3">
                      Roller double door it is custom made for the existing
                      french door as well sliding doors. This product is easy to
                      operate and mounted adjacent to your existing French door.
                    </p>
                    <h5 className="Product_Title mt-4">
                      Retractable Roller Double Door{" "}
                    </h5>
                    <p className="Product_Exn mt-3">
                      We are the manufacturers of Retractable Roller Door
                      systems
                    </p>
                    <p className="Product_Feature mt-5">
                      Advantage of the Roller door system:
                    </p>
                    <ul>
                      <li className="Product_Points">
                        This can be used on to any existing Doors, which is made
                        out of wood UPVC or Aluminium
                      </li>
                      <li className="Product_Points">
                        It can be operated from left to right or Right to left
                      </li>
                      <li className="Product_Points">
                        Easy to operate, it has self cleaning Brush to clean the
                        mesh
                      </li>
                    </ul>
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
                      <Button
                        variant="outlined"
                        className="callback_btn"
                        onClick={() => setCallBackCard(true)}
                      >
                        request to call back
                      </Button>
                      <Button
                        variant="contained"
                        className="ENQUIRY_btn ms-5"
                        onClick={() => setPriceCard(true)}
                      >
                        send inquiry
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        
        {PriceCard && (
          <>
            <div className="Pricecard ms-1">
              <div className="row">
                <div className="col-12 text-end">
                  <IconButton
                    className="me-3 mt-2"
                    onClick={() => setPriceCard(false)}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
                <div className="col-12 text-center">
                  <h5 className="Card_Title mt-5">
                    Get A Price Quote For Retractable Roller Double Door System
                  </h5>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5 col-10 ms-4">
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    label="Email"
                    variant="outlined"
                    className="email_input ms-5 mt-4 pt-2"
                    value={
                      pricequote.Email !== "not_selected"
                        ? pricequote.Email
                        : ""
                    }
                    onBlur={(e) =>
                      setpricequote({
                        ...pricequote,
                        Email: e.target.value,
                      })
                    }
                    onChange={(e) =>
                      setpricequote({
                        ...pricequote,
                        Email: e.target.value,
                      })
                    }
                    error={!pricequote.Email}
                    helperText={!pricequote.Email ? "Please enter Email" : ""}
                  />
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5 col-10 txt">
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    label="Mobile No"
                    variant="outlined"
                    className="email_input ms-5 mt-4 pt-2"
                    value={
                      pricequote.MobileNo !== "not_selected"
                        ? pricequote.MobileNo
                        : ""
                    }
                    onBlur={(e) =>
                      setpricequote({
                        ...pricequote,
                        MobileNo: e.target.value,
                      })
                    }
                    onChange={(e) =>
                      setpricequote({
                        ...pricequote,
                        MobileNo: e.target.value,
                      })
                    }
                    error={!pricequote.MobileNo}
                    helperText={
                      !pricequote.MobileNo ? "Please enter MobileNo" : ""
                    }
                  />
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5 col-10 ms-4">
                  <TextField
                    fullWidth
                    id="outlined-number"
                    label="Enter Quantity"
                    type="number"
                    className="email_input ms-5 mt-4 pt-2"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5 col-10 txt">
                  <TextField
                    id="outlined-select-currency"
                    select
                    fullWidth
                    label="Select Unit"
                    defaultValue=""
                    className="email_input ms-5 mt-4 pt-2"
                  >
                    {Items.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div className="col-12 text-center">
                  <Button variant="contained" className="Req_btn mt-5">
                    Request Quote
                  </Button>
                </div>
                <div className="col-12 text-center p-4">
                  <h6 className="price_quotes">
                    "We are accepting local inquiries mostly from Tamil Nadu &
                    Karnataka."
                  </h6>
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
                  Retractable Roller Double Door System
                </h5>
                <h5 className="Square ms-3">
                  250 INR<code className="Square_txt">/Square Foot</code>
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
                  <source src={RollerDoubleDrVideo} type="video/webm" />
                </Video>
                <div className="mt-5">
                  <Button
                    type="button"
                    className="price_btn"
                    onClick={() => setPriceCard(true)}
                  >
                    Get a Price/Quote
                  </Button>
                </div>
              </div>
            </div>

            <div className="col-12 mt-5">
              <h5 className="product_des mt-4">product description</h5>
              <p className="Product_Exn mt-3">
                Roller double door it is custom made for the existing french
                door as well sliding doors. This product is easy to operate and
                mounted adjacent to your existing French door.
              </p>
              <h5 className="Product_Title mt-4">
                Retractable Roller Double Door{" "}
              </h5>
              <p className="Product_Exn mt-3">
                We are the manufacturers of Retractable Roller Door systems
              </p>
              <p className="Product_Feature mt-5">
                Advantage of the Roller door system:
              </p>
              <ul>
                <li className="Product_Points">
                  This can be used on to any existing Doors, which is made out
                  of wood UPVC or Aluminium
                </li>
                <li className="Product_Points">
                  It can be operated from left to right or Right to left
                </li>
                <li className="Product_Points">
                  Easy to operate, it has self cleaning Brush to clean the mesh
                </li>
              </ul>
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
              <Button
                variant="outlined"
                className="callback_btn mt-3"
                onClick={() => setCallBackCard(true)}
              >
                > request to call back
              </Button>
              <Button
                variant="contained"
                className="ENQUIRY_btn mt-4"
                onClick={() => setPriceCard(true)}
              >
                send inquiry
              </Button>
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
          <div className="col-lg-3 col-md-6 col-sm-6 col-10 text-center mt-5">
            <div className="otherproduct_card text-center ms-5">
              <Link to="/openablewindow" style={{ textDecoration: "none" }}>
                <img
                  src={OpenableWindowSystem}
                  alt=""
                  className="img-fluid  mt-2 pt-1"
                ></img>
                <h4 className="otherproductcard_title mt-4">
                  Openable Window<br></br> System
                </h4>
                <h6 className="otherproductcard_des mt-3">
                  250 INR/Square Foot
                </h6>
              </Link>
            </div>
          </div>
          {isCard_3 && (
            <>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 text-center mt-5">
                <div className="otherproduct_card text-center ms-4">
                  <Link
                    to="/singlesliderwithtrack"
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src={SingleSliderWithTrack}
                      alt=""
                      className="img-fluid  mt-2 pt-1"
                    ></img>
                    <h4 className="otherproductcard_title mt-4">
                      Single Slider With<br></br> Track
                    </h4>
                    <h6 className="otherproductcard_des mt-3">
                      250 INR/Square Foot
                    </h6>
                  </Link>
                </div>
              </div>
            </>
          )}
          {isCard_1 && (
            <>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 text-center mt-5">
                <div className="otherproduct_card text-center">
                  <Link to="/magneticnet" style={{ textDecoration: "none" }}>
                    <img
                      src={MagneticNet}
                      alt=""
                      className="img-fluid mt-2 pt-1"
                    ></img>
                    <h4 className="otherproductcard_title mt-4">
                      Magnetic<br></br> Net
                    </h4>
                    <h6 className="otherproductcard_des mt-3">
                      250 INR/Square Foot
                    </h6>
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

export default RollerDoubleDoor;
