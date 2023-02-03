import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import '../../CSS/productscards/card_1.css';
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
function PriceCard(props) {
  return (
    <>
      <div className="Pricecard">
        <div className="row">
          <div className="col-12 text-center">
            <h5 className="Card_Title mt-5">{props.PriceCardTitle}</h5>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5 col-10 ms-4">
            <TextField
              id="outlined-basic"
              fullWidth
              label="Email"
              variant="outlined"
              className="email_input ms-5 mt-5"
            />
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5 col-10 txt">
            <TextField
              id="outlined-basic"
              fullWidth
              label="Mobile No"
              variant="outlined"
              className="email_input ms-5 mt-5"
            />
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5 col-10 ms-4">
            <TextField
              fullWidth
              id="outlined-number"
              label="Enter Quantity"
              type="number"
              className="email_input ms-5 mt-5"
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
              className="email_input ms-5 mt-5"
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
          <div className="col-12 text-center mt-4">
            <h6 className="pricecard_quote">
              "We are accepting local inquiries mostly from Tamil Nadu &
              Karnataka."
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceCard;
