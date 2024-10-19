import "../../CSS/advantage/advantage.css";
import Footer from "../Footer/footer";
// import Card from "../card_section/card";
import { useMediaQuery } from "react-responsive";
import React from "react";
import Navbar1 from "../Navbar_1/navbar_1";
import "../script/script";
function Company() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTab = useMediaQuery({ query: "(min-width: 767px)" });

  return (
    <>
      <div className="advantage" id="readmore">
        <Navbar1 />
        <div className="OurProducts">
          <div className="row justify-content-center mb-5 cards_row">
            <div className="col-12 text-center">
              <h2 className="infrastructure_title mt-5 pt-5">
                Our Infrastructure
              </h2>
            </div>
            <div className="col-11 text-center mt-4">
              <div className="infras">
                <h5 className="in">
                  Our infrastructure enables us to successfully and efficiently
                  manage our business operations.
                </h5>
                <p className="infrastructure_des mt-4">
                  Our production unit is equipped with cutting-edge machinery
                  such as slot milling, drilling, and cut-off equipment. The
                  company has established a trustworthy track record in the
                  global industry because of the efforts of its trained team of
                  professionals and skilled workforce led by an efficient and
                  quality-conscious management.
                </p>
              </div>
            </div>
            </div>

            <div className="row justify-content-center mt-5 cards_row product-bg">

                  <h4 className="ourproducts-title mt-5 text-center me-5">
                    Our Products
                  </h4>
              <div className="col-12 ">
                <div className="pd ms-5">
                  <p className="infrastructure_des1 mt-5">
                    Our streamlined production process and cost-cutting
                    techniques guarantee that customers receive products at the
                    most affordable possible prices. Our premium quality
                    products include:
                  </p>
                  <ul className="mt-4 Products_Points mb-5">
                    <li className="products_points ms-5">
                      Magnetic insect screens (with fiberglass mesh)
                    </li>
                    <li className="products_points ms-5">
                      Openable windows and doors with stainless steel mesh
                    </li>
                    <li className="products_points ms-5">
                      Sliding doors with stainless steel mesh
                    </li>

                    <li className="products_points ms-5">
                      Retractable roller system for existing windows<br></br>
                      and doors
                    </li>
                  </ul>
                </div>
            </div>
            </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Company;
