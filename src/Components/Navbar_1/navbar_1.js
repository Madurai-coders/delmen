import "../../CSS/homepage/navbar_1.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
function Navbar_1() {
  const isMobile = useMediaQuery({ query: "(max-width: 1015px)" });
  const isTab = useMediaQuery({ query: "(min-width: 1015px)" });

  function Open() {
    setisMenuopen(!isMenuopen);
    document.querySelector("#down").classList.toggle("menuopen_icon");
  }

  const [isOpen, setIsOpen] = useState(false);
  const [isMenuopen, setisMenuopen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="NAVBAR_1">
        {isTab && (
          <>
            <div className="Nav text-center">
              <h5 className="Logo mt-4">
                Delmen Mosquito<br></br>Screen
              </h5>

              <div className="homepage_menu">
                <ul className="Menu mt-2">
                  <li>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <a href="#" className="Contacttrans">
                        Home Page
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/companyprofile"
                      style={{ textDecoration: "none" }}
                    >
                      <a href="#" className="Contacttrans">
                        Company Profiles
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/ourproducts" style={{ textDecoration: "none" }}>
                      <a href="#" className="Contacttrans">
                        Our Products
                      </a>
                    </Link>

                    <ul className="SubMenu ms-4">
                      <li>
                        <a href="#">Retractable Double Door</a>
                        <ul className="Submenu_2">
                          <li>
                            <a href="#">Retractable Double Door</a>
                          </li>
                          <li>
                            <a href="#">Magnetic Net</a>
                          </li>
                          <li>
                            <a href="#">
                              Retractable Roller Double Door System
                            </a>
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
                            <a href="#">
                              Double sliding Door with Single Track
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Doors/Windows Accessories</a>
                        <ul className="Submenu_2">
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
                        <ul className="Submenu_2">
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
                    <Link to="/contactus" style={{ textDecoration: "none" }}>
                      <a href="#" className="Contacttrans">
                        Contact Us
                      </a>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/contactus" style={{ textDecoration: "none" }}>
                      <button type="button" className="btn  Inquiry_btn ms-4">
                        Send Enquiry
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
        {isMobile && (
          <>
            <div className="row cards_row">
              <div className="col-md-4 col-sm-5 col-5 text-center">
                <h2 className="Logo pt-3">
                  {" "}
                  Delmen Mosquito<br></br>Screen
                </h2>
              </div>
              <div className="col-md-8 col-sm-7 col-7 text-end">
                <IconButton
                  className="me-4 mt-1 iconbtn"
                  onClick={toggleNavbar}
                >
                  <MenuIcon className="Menu_icon" />
                </IconButton>
              </div>
            </div>
            <nav className={`Topnavbar ${isOpen ? "open" : ""}`}>
              <ul className="topnavbar-nav">
                <li className="nav-item">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <a href="#" className="Nav-link">
                      Home Page
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/companyprofile" style={{ textDecoration: "none" }}>
                    <a href="#" className="Nav-link">
                      Company Profile
                    </a>
                  </Link>
                </li>
                <li className="nav-item" onClick={Open}>
                  <Link to="/ourproducts" style={{ textDecoration: "none" }}>
                    <a href="#" className="Nav-link">
                      Our Products
                    </a>
                  </Link>
                  <span>
                    {" "}
                    <ExpandMoreIcon
                      onClick={Open}
                      id="down"
                      className="menuopenicon"
                    />
                  </span>
                  <div className={`sub-menu  ${isMenuopen ? "open" : ""}`}>
                    <ul className="sub-Menu">
                      <li className="submneu-item">
                        <a href="#" className="Submenu-link">
                          Retractable Double Door
                        </a>
                      </li>
                      <li>
                        <a href="#" className="Submenu-link">
                          Doors/Windows Accessories
                        </a>
                      </li>
                      <li>
                        <a href="#" className="Submenu-link">
                          Magnetic Insect Screens
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to="/contactus" style={{ textDecoration: "none" }}>
                    <a href="#" className="Nav-link">
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar_1;
