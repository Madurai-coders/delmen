import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
// import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

function Callback(props) {
  const [msg, setMsg] = useState("");

  const [req, setReq] = useState({
    name: props.name,
    No: "",
  });
  console.log(req.name);

  const SubmitNo = async (e) => {
    e.preventDefault();

    if (req.No.length === 10) {
      setReq({
        No: "",
      });
      await axios
        .post("http://localhost:9000/Requests/", {
          ...req,
        })
        .then((response) => setMsg(response.data.respMesg));
      console.log(req);
    }
  };
  return (
    <>
      <div className="callbackcard text-center">
        <div className="row justify-content-center">
          <div className="col-12 text-end">
            <IconButton className="me-3 mt-1">{props.icon}</IconButton>
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
              value={req.No}
              name="No"
              onChange={(e) =>
                setReq({
                  ...req,
                  No: e.target.value,
                })
              }
            />
          </div>

          <div className="col-lg-7 col-md-8 col-sm-8 col-10 text-center mt-5">
            <Button
              type="button"
              className="Callback_btn me-2"
              onClick={SubmitNo}
            >
              Request To Call Back
            </Button>
          </div>
          <h6 className="name">{req.name}</h6>
        </div>
      </div>
    </>
  );
}

export default Callback;
