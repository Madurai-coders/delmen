import "../../CSS/homepage/application.css";
import Home from "../../assets/HomePage/home.png";
import Hotel from "../../assets/HomePage/hotel.png";
import Office from "../../assets/HomePage/office.png";
import School from "../../assets/HomePage/school.png";
import Hospital from "../../assets/HomePage/hospital.png";
import { HomeSharp } from "@mui/icons-material";
function Application() {
  return (
    <>
      <div className="application mt-5 mb-5">
        <div className="application_box">
          <div className="row justify-content-center cards_row">
            <div className="col-lg-2 col-md-2 col-sm-4 col-5 text-center">
              <div className="home">
                <img src={Home} alt="" className="hotel"></img>
              </div>
              <h6 className="home_txt mt-2">Home & Apartments</h6>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-5   ms-4 text-center">
              <div className="home">
                <img src={Hospital} alt="" className="hotel"></img>
              </div>
              <h6 className="home_txt mt-2">Hospitals</h6>
            </div>

            <div className="col-lg-2 col-md-2 col-sm-4 col-5   ms-4 text-center resort">
              <div className="home">
                <img src={School} alt="" className="hotel"></img>
              </div>
              <h6 className="home_txt mt-2">Schools & College</h6>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-5   ms-4 text-center">
              <div className="home">
                <img src={Office} alt="" className="hotel"></img>
              </div>
              <h6 className="home_txt mt-2">Office</h6>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-5  ms-4 text-center  resort">
              <div className="home">
                <img src={Hotel} alt="" className="hotel"></img>
              </div>
              <h6 className="home_txt mt-2">Hotel & Resort</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Application;
