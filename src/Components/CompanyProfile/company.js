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
        <div className="OurProducts mt-5">
          <div className="row justify-content-center mt-5 cards_row">
            {isTab && (
              <>
                <div className="col-12 text-center">
                  <h2 className="infrastructure_title mt-5 pt-5">
                    Our Infrastructure
                  </h2>
                </div>
                <div className="col-11 text-center mt-4">
                  <div className="infras">
                    <h5 className="in">
                      Our infrastructure enables us to successfully and
                      efficiently manage our business operations.
                    </h5>
                    <p className="infrastructure_des mt-4">
                      Our production unit is equipped with cutting edge
                      machinery such as slot milling, drilling, and cut-off
                      equipment. The company has established a trustworthy track
                      record in the global industry because of the efforts of
                      its trained team of professionals and skilled workforce
                      led by an efficient and quality conscious management.
                    </p>
                  </div>
                </div>
                {/* <div className="col-lg-5 col-md-4 text-center mt-5">
                  <img src={Ourproducts} alt="" className="img-fluid"></img>
                </div> */}
                <div className="col-12 mt-5">
                  <div className="products-des pt-5">
                    <h4 className="ourproducts-title mt-5 text-center me-5">
                      Our Products
                    </h4>
                  </div>
                </div>
                <div className="col-12 mt-5">
                  <div className="pd">
                    <p className="products_details ms-4">
                      Our streamlined production process and cost-cutting
                      techniques guarantee that customers receive products at
                      the most affordable possible prices. Our premium quality
                      products include:
                    </p>
                    <ul className="mt-4 Products_Points ms-5">
                      <li className="products_points">
                        Magnetic Insect Screens (With fiber glass mesh)
                      </li>
                      <li className="products_points">
                        Openable Windows and Doors with Stainless Steel Mesh
                      </li>
                      <li className="products_points">
                        Sliding Doors with Stainless Steel Mesh
                      </li>

                      <li className="products_points">
                        Retractable Roller System for Existing Windows <br></br>
                        and Doors
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
            {isMobile && (
              <>
                <div className="col-12 text-center">
                  <h2 className="infrastructure_title mt-5 pt-5">
                    Our Infrastructure
                  </h2>
                </div>
                <div className="col-10 text-center mt-4">
                  <div className="infras">
                    <p className="infrastructure_des">
                      Our infrastructure enables us to successfully and
                      efficiently manage our business operations. Our production
                      unit is equipped with cutting edge machinery such as slot
                      milling, drilling, and cut-off equipment. The company has
                      established a trustworthy track record in the global
                      industry because of the efforts of its trained team of
                      professionals and skilled workforce led by an efficient
                      and quality conscious management.
                    </p>
                  </div>
                </div>
                <div className="col-12 mt-5 text-center">
                  <h4 className="ourproducts-title mt-5">Our Products</h4>
                </div>
               
                <div className="col-12 mt-3">
                <div className="pd">
                    <p className="products_details ms-4">
                      Our streamlined production process and cost-cutting
                      techniques guarantee that customers receive products at
                      the most affordable possible prices. Our premium quality
                      products include:
                    </p>
                    <ul className="mt-4 Products_Points ms-5">
                      <li className="products_points">
                        Magnetic Insect Screens (With fiber glass mesh)
                      </li>
                      <li className="products_points">
                        Openable Windows and Doors with Stainless Steel Mesh
                      </li>
                      <li className="products_points">
                        Sliding Doors with Stainless Steel Mesh
                      </li>

                      <li className="products_points">
                        Retractable Roller System for Existing Windows <br></br>
                        and Doors
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}

        

          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Company;
