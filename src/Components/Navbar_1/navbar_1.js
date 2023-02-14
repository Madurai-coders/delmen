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
    document.querySelector("#Down").classList.toggle("menuopen_icon");
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
              <Link to="/" style={{ textDecoration: "none" }}>
                <h5 className="Logo mt-4">
                  Delmen Mosquito<br></br>Screen
                </h5>
              </Link>

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
                        <Link
                          to="/ourproducts"
                          style={{ textDecoration: "none" }}
                        >
                          <a href="#">Retractable Double Door</a>
                        </Link>
                        <ul className="Submenu_2">
                          <li>
                            <Link
                              to="/retractabledoubledoor"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#">Retractable Double Door</a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/magneticnet"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#">Magnetic Net</a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/rollerdoubledoor"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#">
                                Retractable Roller Double Door System
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/openablewindow"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#">Openable Window System</a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/openablesingledr"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#">Openable Single Door System</a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/slidingwindow"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#">Sliding window with mesh</a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/multislidingdr"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#">Multi Sliding Door System</a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/openabledoubledoor"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#">Openable Double Door system</a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/singlesliderwithtrack"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#">Single slider with Track</a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/doubleslidingwithsingletrack"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#">
                                Double sliding Door with Single Track
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link
                          to="/ourproducts"
                          style={{ textDecoration: "none" }}
                        >
                          <a href="#">Doors/Windows Accessories</a>
                        </Link>
                        <ul className="Submenu_2">
                          <li>
                            <Link
                              to="/slidingwindowsystem"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#">Sliding Window system</a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/slidingdoor"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#">Sliding Door</a>
                            </Link>
                          </li>

                          <li>
                          <Link
                              to="/openabledoorwithmesh"
                              style={{ textDecoration: "none" }}
                            >
                            <a href="#">
                              Openable Door system with Stainless Steel Mesh
                            </a></Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link
                          to="/ourproducts"
                          style={{ textDecoration: "none" }}
                        >
                          <a href="#">Magnetic Insect Screens</a>
                        </Link>
                        <ul className="Submenu_2">
                          <li>
                            <Link
                              to="/MagneticInsectScreens"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#">
                                Magnetic Insect Screens with Fiber Glass Mesh
                              </a>
                            </Link>
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
                <Link to="/" style={{ textDecoration: "none" }}>
                  <h2 className="Logo pt-3">
                    Delmen Mosquito<br></br>Screen
                  </h2>
                </Link>
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
                <li className="nav-item">
                  <Link to="/ourproducts" style={{ textDecoration: "none" }}>
                    <a href="#" className="Nav-link" onClick={Open}>
                      Our Products
                    </a>
                  </Link>
                  <span>
                    {" "}
                    <ExpandMoreIcon
                      onClick={Open}
                      id="Down"
                      className="Menuopenicon"
                    />
                  </span>
                  <div className={`sub-Menu  ${isMenuopen ? "open" : ""}`}>
                    <ul className="sub mt-2">
                      <li className="subMenu-item">
                        <Link
                          to="/ourproducts"
                          style={{ textDecoration: "none" }}
                        >
                          <a href="#" className="Submenu-link">
                            Retractable Double Door
                          </a>
                        </Link>
                      </li>
                      <li className="subMenu-item">
                        <Link
                          to="/ourproducts"
                          style={{ textDecoration: "none" }}
                        >
                          <a href="#" className="Submenu-link">
                            Doors/Windows Accessories
                          </a>
                        </Link>
                      </li>
                      <li className="subMenu-item">
                        <Link
                          to="/ourproducts"
                          style={{ textDecoration: "none" }}
                        >
                          <a href="#" className="Submenu-link">
                            Magnetic Insect Screens
                          </a>
                        </Link>
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
