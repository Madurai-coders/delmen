import "../../CSS/application.css";
import Home from "../../assets/applications/home.png";
import Hotel from "../../assets/applications/hotel.png";
import Office from "../../assets/applications/office.png";
import School from "../../assets/applications/school.png";
import Hospital from "../../assets/applications/hospital.png";
function Application() {
  return (
    <>
      <div className="application mt-5 mb-5">
        <div className="application_box">
          <div className="row justify-content-center hos">
            <div className="col-2 text-center">
              <div className="home">
                <img src={School} alt="" className="hotel"></img>
              </div>
              <h6 className="home_txt mt-2">Home & Apartments</h6>
            </div>
            <div className="col-2 ms-4 text-center">
              <div className="home">
                <img src={Hospital} alt="" className="hotel"></img>
              </div>
              <h6 className="home_txt mt-2">Hospitals</h6>
            </div>

            <div className="col-2 ms-4 text-center">
              <div className="home">
                <img src={School} alt="" className="hotel"></img>
              </div>
              <h6 className="home_txt mt-2">Schools & College</h6>
            </div>
            <div className="col-2 ms-4 text-center">
              <div className="home">
                <img src={Office} alt="" className="hotel"></img>
              </div>
              <h6 className="home_txt mt-2">Office</h6>
            </div>
            <div className="col-2 ms-4 text-center">
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
