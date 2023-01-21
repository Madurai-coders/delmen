import "../../CSS/navbar.css";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Megaphone from '../../assets/applications/megaphone 1.png';
import Sale from '../../assets/applications/hot-sale 1.png';
import New from '../../assets/applications/new-product 1.png';
function Navbar() {
  const [contactForm, setcontactForm] = useState(false);

  return (
    <>
      <div className="Navbar">
        <div className="Nav text-center">
          <h5 className="logo mt-4">
            Delmen Mosquito<br></br>Screen
          </h5>

          <div className="ms-5 homepage_menu">
            <ul className="menu ms-5 ps-5 mt-4">
              <li>
                <a href="#">Home Page</a>
              </li>
              <li>
                <a href="#">Company Profiles</a>
              </li>
              <li>
                <a href="#">Our Products</a>

                <ul className="submenu">
                  <li>
                    <a href="#">Retractable Double Door</a>
                    <ul className="submenu_2">
                      <li>
                        <a href="#">Retractable Double Door</a>
                      </li>
                      <li>
                        <a href="#">Magnetic Net</a>
                      </li>
                      <li>
                        <a href="#">Retractable Roller Double Door System</a>
                      </li>
                      <li>
                        <a href="#">Openable Window System</a>
                      </li>
                      <li>
                        <a href="#">Openable Single Door System</a>
                      </li>
                      <li>
                        <a href="#">Sliding window System</a>
                      </li>
                      <li>
                        <a href="#">Multi Sliding Door System</a>
                      </li>
                      <li>
                        <a href="#">Openable Double Door system</a>
                      </li>
                      <li>
                        <a href="#">Single slider with Track</a>
                      </li>
                      <li>
                        <a href="#">Double sliding Door with Single Track</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Doors/Windows Accessories</a>
                    <ul className="submenu_2">
                      <li>
                        <a href="#">Sliding Window system</a>
                      </li>
                      <li>
                        <a href="#">Sliding Door</a>
                      </li>
                      <li>
                        <a href="#">Open Able Double Door System</a>
                      </li>
                      <li>
                        <a href="#">
                          Openable Door system with Stainless Steel Mesh
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">Magnetic Insect Screens</a>
                    <ul className="submenu_2">
                      <li>
                        <a href="#">
                          Magnetic Insect Screens with Fiber Glass Mesh
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>

              <button type="button" className="btn btn-light inquiry_btn ms-5">
                Send Enquiry
              </button>
            </ul>
          </div>
        </div>
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

export default Navbar;
