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
function Advantage() {
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
      <div className="advantage">
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
                      rates to the customers. Our premium quality
                    </p>
                    <ul className="mt-4 Products_Points">
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
                        Magnetic Insect Screen (With Stain less steel mesh)
                      </li>
                      <li className="products_points">
                        Retractable Roller System for existing Windows and Doors
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            <div className="col-12 text-center mt-5">
              <h4 className="advantageof_title mt-5 pt-4">
                Advantage of the product
              </h4>
            </div>
            <div className="col-12 aa mt-5">
              <div className="container mt-5">
                <Slider {...settings}>
                  <div>
                    <Card
                      title="Magnetic Insect Screens (With fiber glass mesh)"
                      description="Magnetic net are custom-made to existing Window and Door.
                        They form a complete seal around your window using magnetic strips, it is installed without
                         using any nails on the window frame. By using magnetic net there is no rankle or sag
                          
                        in the net Magnetic net's exclusive 'Snapback Action' makes opening and closing your windows easier."
                      
                        subdescription="These environment friendly screens are an extremely affordable option. Magnetic nets are easily fitted and removed, making it simple to clean both the window and the screen."
                      class="card_img img-fluid ms-5"
                      img={MagnetMesh}
                    />
                  </div>
                  <div>
                    <Card
                      title="Magnetic Insect Screens (With stain less steel mesh)"
                      description="This product is made with stain less steel mesh which is called SeeVee made with 0.2 wire thickness. This has higher transparency level compare to fiber glass mesh and an advantage of avoiding rat/squirrel bites."
                      class="card_img img-fluid ms-5"
                      img={Insect}
                    />
                  </div>
                  <div>
                    <Card
                      title="Retractable Roller System for existing Windows and Doors"
                      description="The Retractable Roller system can be installed on the existing Windows and the Doors. It saves space ,it is easy to operate and it has self cleaning brush to remove dust from the net. The fiber glass mesh does not cut more than 10% light & air."
                      subdescription="The mesh is very strong and there is no static charge on the mesh and can be vacuumed for easy cleaning/ cleaning with wet sponge. All the casings surface of the roller system are Anodized up to 15 microns."
                      detail="There is felts used for noise reduction when system is in use felt brushes are used for holding the mesh in the top, bottom, and sides for the mesh to hold. The plastic components are designed and manufactured for ever lasting."
                      read="Read More"
                      Read="Read Less"
                      class="card_img img-fluid ms-5"
                      img={Rollersystem}
                    />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-lg-10 col-md-10 col-sm-11 col-11 d-flex flex-row our_quality mb-5">
              <div className="col-lg-4 col-md-4 col-sm-5 col-5">
                <img src={Quality} alt="" className="img-fluid Quality_img"></img>
              </div>
              <div className="col-7">
                <h3 className="quality_title mt-4 pt-5">Our Quality</h3>
                <p className="quality_des mt-4">
                  Being in this trade, quality is of paramount importance to us.
                  We adhere to strict quality checks at each and every
                  manufacturing stage. Right from the procurement of raw
                  material fabrication and insulation. Continuous deliberate
                  efforts are being made for improvement of materials,
                  technology, product up gradation and equipment to give the
                  best quality product at the most affordable prices.{" "}
                </p>
                <p className="quality_des mt-4">
                  We also lay special emphasis on the procurement of raw
                  materials sourced only from noted and reputed vendors.
                </p>
              </div>
            </div>
            <div className="col-12 text-center">
              <h2 className="infrastructure_title mt-5 pt-5">Our Infrastructure</h2>
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

export default Advantage;
