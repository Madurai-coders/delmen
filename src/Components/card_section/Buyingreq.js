import TextField from "@mui/material/TextField";
import "../../CSS/productscards/card_1.css";
import React, { useState } from "react";
import {
  validation_email,
  validation_mobile_number,
  validation_details
} from "../Functions/functions";

function BuyingReq() {
  const [BuyingDetails, setBuyingDetails] = useState([]);

  const [buyingreq, setbuyingreq] = useState({
    Details: "not_selected",
    Email: "not_selected",
    PhoneNo: "not_selected",
  });
  function SendInquiry() {
    if (
      validation_details(buyingreq.Details).class === "pass" &&
      validation_email(buyingreq.Email).class === "pass" &&
      validation_mobile_number(buyingreq.PhoneNo).class === "pass"
    ) {
      let array = BuyingDetails;
      array.push({ ...buyingreq });
      console.log("contactform:", array);
      setBuyingDetails([...array]);
      console.log("data:", BuyingDetails);
    }
    setbuyingreq({
      Details: "not_selected",
      Email: "not_selected",
      PhoneNo: "not_selected",
    });
  }

  return (
    <>
      <div className="row justify-content-center cards_row">
        <div className="col-lg-9 col-md-10 col-sm-10 col-11">
          <div className="contactform1">
            <h4 className="contactus_des1 pl-5 pt-5">
              Enter Buying Requirement Details
            </h4>

            <textarea
              value={
                buyingreq.Details !== "not_selected" ? buyingreq.Details : ""
              }
              onChange={(e) =>
                setbuyingreq({
                  ...buyingreq,
                  Details: e.target.value,
                })
              }
              className="textarea ml-5 mt-2"
              placeholder="*To Get accurate quotes. Please include product name, order quantity, usage, special requests if any in your inquiry."
            ></textarea>
            <div className="ms-5">
            {validation_details(buyingreq.Details).msg}
            </div>
            <h6 className="attachment1 ml-5 mt-3">+ Add Attachment</h6>
            <div className="row ms-4 mt-4 Card_EMAIL">
              <div className="col-lg-5 col-md-5 col-sm-5 col-11 Card_EMAIL ms-2">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Email"
                  variant="outlined"
                  className="email_input1"
                  value={
                    buyingreq.Email !== "not_selected" ? buyingreq.Email : ""
                  }
                  onBlur={(e) =>
                    setbuyingreq({
                      ...buyingreq,
                      Email: e.target.value,
                    })
                  }
                  onChange={(e) =>
                    setbuyingreq({
                      ...buyingreq,
                      Email: e.target.value,
                    })
                  }
                  error={!buyingreq.Email}
                />
                {validation_email(buyingreq.Email).msg}
              </div>
              <div className="col-lg-5 col-md-5 col-sm-5 col-11 Card_EMAIL1 ms-4">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Mobile No"
                  variant="outlined"
                  className="email_input1"
                  value={
                    buyingreq.PhoneNo !== "not_selected"
                      ? buyingreq.PhoneNo
                      : ""
                  }
                  onBlur={(e) =>
                    setbuyingreq({
                      ...buyingreq,
                      PhoneNo: e.target.value,
                    })
                  }
                  onChange={(e) =>
                    setbuyingreq({
                      ...buyingreq,
                      PhoneNo: e.target.value,
                    })
                  }
                  error={!buyingreq.PhoneNo}
                />
                {validation_mobile_number(buyingreq.PhoneNo).msg}
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-11 text-center mt-3">
                <button
                  type="button"
                  className="btn contact_sendinquiry"
                  onClick={SendInquiry}
                >
                  Send Inquiry
                </button>
              </div>
            </div>
            <div className="col-12 text-center mt-5">
              <h6 className="contactus_txt1">
                "We are accepting local inquiries mostly from Tamil Nadu &
                Karnataka."
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyingReq;
