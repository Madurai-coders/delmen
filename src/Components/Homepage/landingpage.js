import "../../CSS/navbar/navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Megaphone from "../../assets/applications/megaphone 1.png";
import Sale from "../../assets/applications/hot-sale 1.png";
import New from "../../assets/applications/new-product 1.png";
import Navbar from "../Navbar/navbar";

function Landingpage() {
  return (
    <>
      <div className="Navbar">
        <Navbar />
        <div className="row justify-content-center mt-5">
          <div className="col-12 text-center mt-5">
            <h1 className="homepage_title">
              Making your home free from<br></br> Mosquitoes, Flies and<br></br>{" "}
              Insects
            </h1>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-4 text-center mt-5">
            <div className="search">
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "search google maps" }}
              ></InputBase>
              <IconButton className="iconbutton">
                <SearchIcon className="search_icon" />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="row justify-content-center">
            <div className="col-4 text-center mt-5">
              <div className="card ms-5">
                <div className="megaphone">
                  <img src={Megaphone} alt=""></img>
                </div>
                <div className="megaphone_txt">
                  <h6 className="latest_txt">Latest Products</h6>
                </div>
              </div>
            </div>
            <div className="col-4 text-center mt-5">
              <div className="card ms-5">
                <div className="megaphone">
                  <img src={New} alt="" className="mt-4"></img>
                </div>
                <div className="megaphone_txt">
                  <h6 className="latest_txt">New Products</h6>
                </div>
              </div>
            </div>
            <div className="col-4 text-center mt-5">
              <div className="card ms-5">
                <div className="megaphone">
                  <img src={Sale} alt="" className="mt-4 pt-2"></img>
                </div>
                <div className="megaphone_txt">
                  <h6 className="latest_txt">Hot Sale</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Landingpage;
