import "../../CSS/advantage/advantage.css";
import Footer from "../Footer/footer";
import Card from "../card_section/card";
import Ourproducts from "../../assets/advantages/ourproduct.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import React from "react";
import MagnetMesh from "../../assets/advantages/magnetmesh.png";
function Advantage() {
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
  };
  return (
    <>
      <div className="advantage">
        <div className="Nav text-center">
          <h5 className="log mt-4">
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
                <a href="#">Company Profiles</a>
              </li>
              <li>
                <a href="#">Our Products</a>

                <ul className="SubMenu">
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

              <button type="button" className="btn  Inquiry_btn ms-4">
                Send Enquiry
              </button>
            </ul>
          </div>
        </div>
        <div className="OurProducts mt-5">
          <div className="row justify-content-center mt-5">
            <div className="col-5 text-center">
              <img src={Ourproducts} alt="" className="img-fluid"></img>
            </div>
            <div className="col-6 mt-5">
              <div className="products-des me-5">
                <h4 className="ourproducts-title mt-5">Our Products</h4>
                <p className="products_details mt-4">
                  Our cost down production techniques and streamlined production
                  process ensure products at the most affordable rates to the
                  customers. Our premium quality
                </p>
                <ul className="mt-4">
                  <li className="products_points">
                    Magnetic Insect Screens (With fiber glass mesh)
                  </li>
                  <li className="products_points">
                    Magnetic Insect Screen (With Stain less steel mesh)
                  </li>
                  <li className="products_points">
                    Retractable Roller System for existing Windows and Doors
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 text-center mt-5">
              <h4 className="advantageof_title mt-5">
                Advantage of the product
              </h4>
            </div>
            <div className="col-12 aa mt-5">
              <div className="container">
                <Slider {...settings}>
                  <div>
                    <Card
                      description="Magnetic net are custom-made to existing Window and Door.
                        They form a complete seal around your window using magnetic strips, it is installed without
                         using any nails on the window frame. By using magnetic net there is no rankle or sag
                          in the net Magnetic net's exclusive 'Snapback Action' makes opening and closing your windows easier."
                      subdescription="These environment friendly screens are an extremely affordable option. Magnetic nets are easily fitted and removed, making it simple to clean both the window and the screen."
                      class="card_img img-fluid"
                      img={MagnetMesh}
                    />
                  </div>
                  <div>
                    <Card
                      title="Record"
                      description="After Booking the turf,Our AI enabled cameras record the match while you enjoy playing in the turf at no extra cost. "
                      class="card_img img-fluid"
                      img={MagnetMesh}
                    />
                  </div>
                  <div>
                    <Card
                      title="Relive"
                      description="Recorded videos are avaible in profile section."
                      class="card_img img-fluid"
                      img={MagnetMesh}
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advantage;
