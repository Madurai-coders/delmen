import "../../CSS/navbar/navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Megaphone from "../../assets/HomePage/megaphone 1.png";
import Sale from "../../assets/HomePage/hot-sale 1.png";
import New from "../../assets/HomePage/new-product 1.png";
import Navbar from "../Navbar/navbar";
import InputAdornment from "@mui/material/InputAdornment";
import { Link } from "react-router-dom";
function Landingpage() {
  return (
    <>
      <div className="Navbar">
        <Navbar />
        <div className="row justify-content-center mt-5  cards_row">
          <div className="col-12 text-center">
            <h1 className="homepage_title mt-5">
              Making your home free from<br></br> Mosquitoes, Flies and<br></br>{" "}
              Insects
            </h1>
          </div>
          <div className="col-lg-3 col-md-4 text-center">
            <div className="search mt-5">
              <InputBase
                className="inputbase pe-1"
                placeholder="Search"
                inputProps={{ "aria-label": "search google maps" }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton className="iconbutton">
                      <SearchIcon className="search_icon" />
                    </IconButton>
                  </InputAdornment>
                }
              ></InputBase>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="row justify-content-center cards_row">
            <div className="col-4 text-center mt-5 card_gap">
              <Link
                to="/openabledoorwithmesh"
                style={{ textDecoration: "none" }}
              >
                <div className="card ms-5">
                  <div className="megaphone">
                    <img
                      src={Megaphone}
                      alt=""
                      className="mt-2 img-fluid latest_img"
                    ></img>
                  </div>
                  <div className="megaphone_txt">
                    <h6 className="latest_txt">Latest Products</h6>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-4 text-center mt-5 card_gap">
              <Link
                to="/retractabledoubledoor"
                style={{ textDecoration: "none" }}
              >
                <div className="card ms-5">
                  <div className="megaphone">
                    <img
                      src={New}
                      alt=""
                      className="mt-4 img-fluid latest_img1"
                    ></img>
                  </div>
                  <div className="megaphone_txt">
                    <h6 className="latest_txt">New Products</h6>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-4 text-center mt-5 card_gap">
              <Link
                to="/magneticinsectscreens"
                style={{ textDecoration: "none" }}
              >
                <div className="card ms-5">
                  <div className="megaphone">
                    <img
                      src={Sale}
                      alt=""
                      className="mt-4 pt-2 img-fluid latest_img2"
                    ></img>
                  </div>
                  <div className="megaphone_txt">
                    <h6 className="latest_txt">Hot Sale</h6>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Landingpage;
