import "../../CSS/homepage/navbar_1.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
                      <a href="#/" className="Contacttrans">
                        Home Page
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/companyprofile"
                      style={{ textDecoration: "none" }}
                    >
                      <a href="#companyprofile" className="Contacttrans">
                        Company Profiles
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/ourproducts" style={{ textDecoration: "none" }}>
                      <a href="#ourproducts" className="Contacttrans">
                        Our Products
                      </a>
                    </Link>

                    <ul className="SubMenu ms-4">
                      <li>
                        <Link
                          to="/ourproducts"
                          style={{ textDecoration: "none" }}
                        >
                          <a href="#ourproducts">Magnetic Net</a>
                        </Link>
                        <ul className="Submenu_2">
                          <li>
                            <Link
                              to="/magneticinsectscreens"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#magneticinsectscreens">
                                Magnetic Insect Screens With Fiber Glass Mesh
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/PatioSpace"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#PatioSpace">
                                Stainless steel Mesh with Frame for Patio Space
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
                          <a href="#ourproducts"> Retractable Double Door</a>
                        </Link>
                        <ul className="Submenu_2">
                          <li>
                            <Link
                              to="/retractabledoubledoor"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#retractabledoubledoor"> Retractable Double Door</a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/rollerdoubledoor"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#rollerdoubledoor">Retractable Roller Door</a>
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="/rollerwindow"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#rollerwindow">
                                Retractable Roller Window
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
                          <a href="#ourproducts">Sliding System</a>
                        </Link>
                        <ul className="Submenu_2">
                          <li>
                            <Link
                              to="/slidingwindowsystem"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#slidingwindowsystem">
                                Sliding Window System
                              </a>
                            </Link>
                          </li>
                          {/* <li>
                            <Link
                              to="/singlesliderwithtrack"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#">Single Slider With Track</a>
                            </Link>
                          </li> */}
                          {/* <li>
                            <Link
                              to="/slidingwindowmesh"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#">Sliding Window Mesh</a>
                            </Link>
                          </li> */}
                          <li>
                            <Link
                              to="/multislidingdr"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#multislidingdr">Multi Sliding Door</a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/slidingdoor"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#slidingdoor">Sliding Door</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link
                          to="/ourproducts"
                          style={{ textDecoration: "none" }}
                        >
                          <a href="#ourproducts">Openable System</a>
                        </Link>
                        <ul className="Submenu_2">
                          <li>
                            <Link
                              to="/openablewindow"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#openablewindow">
                                Openable Window System
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/openablesingledr"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#openablesingledr">
                                Openable Single Door System
                              </a>
                            </Link>
                          </li>
                        
                          <li>
                            <Link
                              to="/openabledoubledoor"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#openabledoubledoor">
                                Openable Double Door
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/RemovableFrame"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#RemovableFrame">
                                Quick Removable Frame with Magnet
                              </a>
                            </Link>
                          </li>


                            {/* <li>
                            <Link
                              to="/fixedopenable"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#">Fixed Openable</a>
                            
                            </Link>
                          </li> */}
                          {/* <li>
                            <Link
                              to="/openablemultifolddoor"
                              style={{ textDecoration: "none" }}
                            >
                              <a href="#">Openable MultiFold Door</a>
                            </Link>
                          </li> */}


                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/contactus" style={{ textDecoration: "none" }}>
                      <a href="#contactus" className="Contacttrans">
                        Contact Us
                      </a>
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
                    <a href="#/" className="Nav-link">
                      Home Page
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/companyprofile" style={{ textDecoration: "none" }}>
                    <a href="#companyprofile" className="Nav-link">
                      Company Profile
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/ourproducts" style={{ textDecoration: "none" }}>
                    <a href="#ourproducts" className="Nav-link" onClick={Open}>
                      Our Products
                    </a>
                  </Link>
                  <span>
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
                          <a href="#ourproducts" className="Submenu-link">
                            Retractable Double Door
                          </a>
                        </Link>
                      </li>
                      <li className="subMenu-item">
                        <Link
                          to="/ourproducts"
                          style={{ textDecoration: "none" }}
                        >
                          <a href="#ourproducts" className="Submenu-link">
                            Doors/Windows Accessories
                          </a>
                        </Link>
                      </li>
                      <li className="subMenu-item">
                        <Link
                          to="/ourproducts"
                          style={{ textDecoration: "none" }}
                        >
                          <a href="#ourproducts" className="Submenu-link">
                            Magnetic Insect Screens
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to="/contactus" style={{ textDecoration: "none" }}>
                    <a href="#contactus" className="Nav-link">
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
