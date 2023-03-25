import "../../CSS/company/company.css";
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";
import Design from "../../assets/companyprofile/design.svg";
import Design_1 from "../../assets/companyprofile/design1.svg";
import GlassMesh from "../../assets/companyprofile/glassmesh.png";
import SteelMesh from "../../assets/companyprofile/steelmesh.png";
import RollerSystem from "../../assets/companyprofile/rollersystem.png";
import MagneticNetForDoor from "../../assets/MagneticNet/magneticnet.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar_1 from "../Navbar_1/navbar_1";
function Advantage() {
  const setting = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    swipeToSlide: true,

    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <>
      <div className="company">
        <div className="container">
          <Navbar_1 />
          <div className="row cards_row">
            <div className="col-1 mt-5 pt-4">
              <img src={Design} alt="" className="img-fluid mt-5 design"></img>
            </div>
            <div className="col-10 mt-5 text-center">
              <div className="Delmen">
                <h6 className="about_delmen">
                  Delmen Mosquito Screens began in 1999 and introduced magnetic
                  mosquito nets in India. We are among the most reputable
                  importers, manufacturers, and suppliers of Retractable Roller
                  Systems and Magnetic Insect Screens for existing doors and
                  windows. We develop mosquito and bug screens that can be put
                  over doors and windows. We design the offered products closely
                  with the market to guarantee they match client needs.
                </h6>
                <h6 className="about_delmen1 mt-5">
                  Our product development team reviews current products and
                  improves/replaces them as needed. As a business, we value
                  quality. Every production step undergoes quality testing- From
                  material purchase to insulation. Our infrastructure helps us
                  operate efficiently. We have a sophisticated manufacturing
                  facility with cut-off machines, hand tools, ceiling machines,
                  etc., competent employees, and more.
                </h6>
              </div>
            </div>
            <div className="col-1 mt-5 pt-5">
              <img src={Design_1} alt="" className="img-fluid design_1"></img>
            </div>
          </div>
          <div className="row justify-content-center mt-5 cards_row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-6 text-center mt-5 pt-5 Glassmesh">
              <img src={GlassMesh} alt="" className="img-fluid"></img>
              <h6 className="Mesh_title">
                Magnetic Insect Screens<br></br> (With fiber glass mesh)
              </h6>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-6  text-center mt-5 pt-5 Glassmesh">
              <img src={SteelMesh} alt="" className="img-fluid"></img>
              <h6 className="Mesh_title">
                Magnetic Insect Screen<br></br> (With Stain less steel mesh)
              </h6>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-6  text-center mt-5 pt-5 Glassmesh">
              <img src={RollerSystem} alt="" className="img-fluid"></img>
              <h6 className="Mesh_title">
                Retractable Roller System<br></br> for existing Windows and
                Doors
              </h6>
            </div>
          </div>

          <div className="row cards_row">
            <div className="col-lg-5 col-md-5 col-sm-5 col-12 mt-5 pt-5 text-center Glassmesh">
              <img
                src={MagneticNetForDoor}
                alt=""
                className="img-fluid mt-5 pt-5 Details_Img"
              ></img>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="d-flex flex-column Products_Details">
                <h6 className="aboutproduct_txt">
                  Business type :
                  <span className="aboutproduct_txt1">
                    Manufacturer , Importer, Exporter & Supplier
                  </span>
                </h6>
                <h6 className="aboutproduct_txt">
                  Import Percentage :
                  <span className="aboutproduct_txt1">90%</span>{" "}
                </h6>
                <h6 className="aboutproduct_txt">
                  Primary Competitive Advantages :
                  <span className="aboutproduct_txt1">
                    Best quality, cost effective product and excellent
                    pro-active services
                  </span>
                </h6>
                <h6 className="aboutproduct_txt">
                  No of Staff :<span className="aboutproduct_txt1"> 20</span>
                </h6>
                <h6 className="aboutproduct_txt">
                  Year of Establishment :
                  <span className="aboutproduct_txt1">1999</span>{" "}
                </h6>
                <h6 className="aboutproduct_txt">
                  Import Markets :
                  <span className="aboutproduct_txt1">
                    US, Spain, China, & Canada
                  </span>
                </h6>
                <h6 className="aboutproduct_txt">
                  Production Type :
                  <span className="aboutproduct_txt1">Automatic</span>{" "}
                </h6>
                <h6 className="aboutproduct_txt">
                  Pan No :<span className="aboutproduct_txt1">ABKPL8291K</span>{" "}
                </h6>
              </div>
            </div>
          </div>

          <div className="row cards_row">
            <div className="col-12 text-center mt-5">
              <h2 className="OurBranch_title mt-5 pt-5">our branch</h2>
            </div>
          </div>
          <div className="row  cards_row">
            <div className="col-12">
              <div className="headoffice_box mt-4">
                <div className="d-flex flex-row">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-0 text-center"></div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-10 text-center">
                    <h3 className="office_title pt-4">HEAD OFFICE</h3>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-0 text-end mt-4">
                    <div className="c">
                      <h6 className="contactperson">
                        Contact Person : CHANDRASEKAR
                      </h6>
                      <h6 className="contactperson1 me-4 pe-5">
                        Mobile: 09845374254
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="container-fluid">
                  <Slider {...setting}>
                    <div className="office_address mt-5">
                      <h5 className="Company_Name">Our Authorized Dealer</h5>
                      <h6 className="location_txt mt-3">
                        Contact Person : Kandaswamy
                      </h6>
                      <h6 className="location_txt">
                        Ph: +91-8056035572, +91-9442031069, +91-9442031069
                      </h6>
                      <h6 className="location_txt">
                        AVM Life Style Porur, Chennai
                      </h6>
                    </div>
                    <div className="office_address mt-5">
                      <h5 className="Company_Name">DELMEN MOSQUITO SCREENS</h5>
                      <h6 className="location_txt mt-3">
                        # 6, 1st cross Ragavandra Layout, Silver Spring Road,
                        Munikolala, Bangalore-560 037.
                      </h6>
                      <h6 className="location_txt">
                        E- Mail : delmennets2004@yahoo.com
                      </h6>
                      <h6 className="location_txt">
                        Web site : www.delmennets.com
                      </h6>
                    </div>
                    <div className="office_address mt-5">
                      <h5 className="Company_Name">DELMEN MOSQUITO SCREENS</h5>
                      <h6 className="location_txt mt-3">
                        BRANCH : NORTH BANGALORE
                      </h6>{" "}
                      <h6 className="location_txt">
                        Contact Person : DEEPAK MANOHAR
                      </h6>
                      <h6 className="location_txt">
                        Contact No : +91 9448598140
                      </h6>{" "}
                      <h6 className="location_txt">
                        No.47a G/F, Avenue, 1st Main Road (opp. Chris Hospital
                        On Orr Henur Junction Enter The Service Road Near Yusuf
                        Mosque) 1st Stage 4th Block Kalyan Nagar Po Hbr Layout.
                        Bangalore - 560043.
                      </h6>
                    </div>
                    <div className="office_address mt-5">
                      <h5 className="Company_Name">DELMEN MOSQUITO SCREENS</h5>
                      <h6 className="location_txt mt-4">
                        BRANCH : SOUTH BANGALORE
                      </h6>{" "}
                      <h6 className="location_txt">
                        Contact Person : G. NANJAPPA
                      </h6>
                      <h6 className="location_txt">Contact No : 8095116488</h6>
                      <h6 className="location_txt">
                        DELMENTM#31, 1st Block, 1st Cross, 2nd Main, Bhavani
                        Housing Layout, Banashankari III Stage, Bangalore -
                        560085, Karnataka, India.
                      </h6>
                      <h6 className="location_txt">
                        Landmark: Near DEVEGOWDA PETROL BUNK, Vodafone Showroom
                      </h6>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 pt-4">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Advantage;
