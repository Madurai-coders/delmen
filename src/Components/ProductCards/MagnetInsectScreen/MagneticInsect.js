import Footer from "../../Footer/footer";
import Navbar_1 from "../../Navbar_1/navbar_1";
import Magneticinsect from "../../../assets/CardsImg/MagneticInsect.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useMediaQuery } from "react-responsive";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import "../../../CSS/productscards/card_1.css";
import BuyingReq from "../../card_section/Buyingreq";
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
function MagneticInsect() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTab = useMediaQuery({ query: "(min-width: 767px)" });
  const [PriceCard, setPriceCard] = useState(false);
  const [CallBackCard, setCallBackCard] = useState(false);
  const [pricequote, setpricequote] = useState({
    Email: "not_selected",
    MobileNo: "not_selected",
  });
  return (
    <>
      <div className="RollerDr">
        <Navbar_1 />
        {isTab && (
          <>
            <div className="CARDS_3">
              <div className="row mt-5">
                <div className="col-5">
                  <div className="Card_1">
                    <img
                      src={Magneticinsect}
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
                    <h5 className="Product_Name">Magnetic Insect Screens</h5>
                    <h5 className="Square">
                      250 INR<code className="Square_txt">/Square Foot</code>{" "}
                      <Button
                        type="button"
                        className="price_btn ms-4"
                        onClick={() => setPriceCard(true)}
                      >
                        Get a Price/Quote
                      </Button>
                    </h5>
                    <h5 className="product_des mt-4">product description</h5>
                    <h5 className="Product_Title mt-4">
                      Magnetic Insect Screens
                    </h5>
                    <p className="Product_Exn mt-3">
                      Magnetic Insect Screens with Fiber Glass Mesh offered by
                      us is highly appreciated for assuring easy installation
                      with long service life. It is applied on windows so as to
                      prevent mosquito entry to the house while reducing chances
                      of dengue & malaria. This insect screen is made of
                      superior quality fiberglass mesh for being structurally
                      strong, UV stable, & flexible in nature. It is highly
                      durable in nature and requires no special maintenance.
                      Magnetic Insect Screens with Fiber Glass Mesh can be
                      availed in customized configurations at reasonable prices
                      for our trusted clients.
                    </p>
                    <p className="Product_Feature mt-5">Features</p>
                    <ul>
                      <li className="Product_Points">Uniform mesh size</li>
                      <li className="Product_Points">Easy to maintain</li>
                      <li className="Product_Points">
                        Maintains proper air flow while preventing mosquitoes
                        entry
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
                    Get A Price Quote For Magnetic Insect Screens
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
                  Add a Mobile Number To Receive Call From<br></br> "DELMEN MOSQUITO
                  SCREENS"
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
                <h5 className="Product_Name ms-5">Magnetic Insect Screens</h5>
                <h5 className="Square mt-2 ms-5">
                  250 INR<code className="Square_txt">/Square Foot</code>{" "}
                </h5>
              </div>
              <div className="col-12 text-center mt-5">
                <img src={Magneticinsect} alt="" className="img-fluid"></img>
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
              <h5 className="Product_Title mt-4">Magnetic Insect Screens</h5>
              <p className="Product_Exn mt-3">
                Magnetic Insect Screens with Fiber Glass Mesh offered by us is
                highly appreciated for assuring easy installation with long
                service life. It is applied on windows so as to prevent mosquito
                entry to the house while reducing chances of dengue & malaria.
                This insect screen is made of superior quality fiberglass mesh
                for being structurally strong, UV stable, & flexible in nature.
                It is highly durable in nature and requires no special
                maintenance. Magnetic Insect Screens with Fiber Glass Mesh can
                be availed in customized configurations at reasonable prices for
                our trusted clients.
              </p>
              <p className="Product_Feature mt-5">Features</p>
              <ul>
                <li className="Product_Points">Uniform mesh size</li>
                <li className="Product_Points">Easy to maintain</li>
                <li className="Product_Points">
                  Maintains proper air flow while preventing mosquitoes entry
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
                request to call back
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

        <Footer />
      </div>
    </>
  );
}
export default MagneticInsect;
