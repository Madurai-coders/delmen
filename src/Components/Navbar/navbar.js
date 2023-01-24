import "../../CSS/navbar/navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="Nav text-center">
        <h5 className="logo mt-4">
          Delmen Mosquito<br></br>Screen
        </h5>

        <div className="homepage_menu">
          <ul className="menu mt-4">
            <li>
            <Link to="/" style={{ textDecoration: "none" }}>

              <a href="#" className="contacttrans">Home Page</a>
              </Link>
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
              <Link to="/contactus" style={{ textDecoration: "none" }}>
                <a href="#" className="contacttrans">
                  Contact Us
                </a>{" "}
              </Link>
            </li>

            <button type="button" className="btn inquiry_btn ms-4">
              Send Enquiry
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
