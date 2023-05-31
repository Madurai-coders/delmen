import "../../CSS/company/company.css";
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";
import Design from "../../assets/readmore/design.svg";
import Design_1 from "../../assets/readmore/design1.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar_1 from "../Navbar_1/navbar_1";
function Readmore() {
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
                  windows. We develop mosquito nets that can be put over doors
                  and windows. We design the offered products closely with the
                  market to guarantee they match client needs.
                </h6>
                <h6 className="about_delmen1 mt-5">
                  Our product development team reviews current products and
                  improves/replaces them as needed. As a business, we value
                  quality. Every production step undergoes quality testing- From
                  material purchase to insulation. Our infrastructure helps us
                  operate efficiently. We have a sophisticated manufacturing
                  facility with cut-off machines, hand tools, slot milling and
                  drilling, etc., competent employees, and more.
                </h6>
              </div>
            </div>
          <div className="col-1 mt-5 pt-5">
            <img src={Design_1} alt="" className="img-fluid design_1"></img>
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

export default Readmore;
