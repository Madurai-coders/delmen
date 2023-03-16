import "../../CSS/advantage/advantage.css";
import Footer from "../Footer/footer";
import Card from "../card_section/card";
import Ourproducts from "../../assets/advantages/ourproduct.png";
import Insect from "../../assets/advantages/insect.png";
import Rollersystem from "../../assets/advantages/rollersystem.png";
import Quality from "../../assets/advantages/quality.png";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import React from "react";
import MagnetMesh from "../../assets/advantages/magnetmesh.png";
import Navbar_1 from "../Navbar_1/navbar_1";
import "../script/script";
function Company() {
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  };
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTab = useMediaQuery({ query: "(min-width: 767px)" });

  return (
    <>
      <div className="advantage" id="readmore">
        <Navbar_1 />
        <div className="OurProducts mt-5">
          <div className="row justify-content-center mt-5 cards_row">
            {isTab && (
              <>
                <div className="col-5 text-center mt-5">
                  <img src={Ourproducts} alt="" className="img-fluid"></img>
                </div>
                <div className="col-lg-6 col-md-7 col-sm-12 col-12 mt-5">
                  <div className="products-des me-5 pt-5">
                    <h4 className="ourproducts-title mt-5">Our Products</h4>
                    <p className="products_details mt-4">
                      Our cost down production techniques and streamlined
                      production process ensure products at the most affordable
                      rates to the customers. Our premium quality products are
                    </p>
                    <ul className="mt-4 Products_Points">
                      <li className="products_points">
                        Magnetic Insect Screens (With fiber glass mesh)
                      </li>
                      <li className="products_points">
                        Openable windows and doors with stainless steel mesh
                      </li>
                      <li className="products_points">
                        Sliding doors with stainless steel mesh
                      </li>

                      <li className="products_points">
                        Retractable Roller System for existing Windows <br></br>and Doors
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
            {isMobile && (
              <>
                <div className="col-12 mt-5 text-center">
                  <h4 className="ourproducts-title mt-5">Our Products</h4>
                </div>
                <div className="col-12 text-center mt-5">
                  <img src={Ourproducts} alt="" className="img-fluid"></img>
                </div>
                <div className="col-12 mt-3">
                  <div className="products-des">
                    <p className="products_details mt-4">
                      Our cost down production techniques and streamlined
                      production process ensure products at the most affordable
                      rates to the customers. Our premium quality
                    </p>
                    <ul className="mt-5 Products_Points">
                    <li className="products_points">
                        Magnetic Insect Screens (With fiber glass mesh)
                      </li>
                      <li className="products_points">
                        Openable windows and doors with stainless steel mesh
                      </li>
                      <li className="products_points">
                        Sliding doors with stainless steel mesh
                      </li>

                      <li className="products_points">
                        Retractable Roller System for existing Windows and Doors
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            <div className="col-12 text-center">
              <h2 className="infrastructure_title mt-5 pt-5">
                Our Infrastructure
              </h2>
            </div>
            <div className="col-10 text-center mt-4">
              <p className="infrastructure_des">
                Our infrastructure enables us to run our business operations
                efficiently and effectively. We possess a production unit
                consisting of modern machines including cut-off machines,
                ceiling machines, working hand tools, etc. skilled workers and
                qualified team of professionals, who together enable the company
                to build a reputed standing in the global market. Led by an
                efficient and quality conscious management.
              </p>
            </div>
            <div className="col-10 text-center">
              <p className="advantage_quotes mt-5 pt-5">
                "We are accepting local inquiries mostly from Tamil Nadu &
                Karnataka."
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Company;
