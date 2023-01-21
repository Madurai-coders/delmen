import "../../CSS/weare.css";
import Since from "../../assets/applications/about.svg";

function Weare() {
  return (
    <>
      <div className="weare mt-5">
        <div className="row mt-5">
          <div className="col-3">
            <img src={Since} alt="" className="img-fluid"></img>
          </div>
          <div className="col-9 mt-5 ab">
            <div className="aboutus d-flex flex-column mt-5 pt-5">
              <h2 className="about_title">WHO WE ARE?</h2>
              <div className="about_content mt-4">
                <p className="about_des">
                  We, Delmen Mosquito ScreensTM, started our business in the
                  year 1999. We are the first people to introduce magnetic
                  mosquito nets in India to offer quality products and have
                  become one of the most trusted manufacturers, importers and
                  suppliers of Magnetic Insect Screens and Retractable Roller
                  System for existing Windows and Doors.
                </p>
               
                <p className="about_des1">
                  We are expertise in designing insects screens, which can be
                  installed over the Windows and Doors to restrict unwanted
                  entry of mosquitoes and insects. In pursuit of excellence, we
                  always perform product development in close interaction with
                  the market and ensure that our products meet the specific
                  requirements of the customers. Our team of product development
                  is on continual mission to review the existing products and
                  improve/substitute them with superior alternatives as
                  available.
                </p>
               
                <button type="button" className="btn btn-secondary readmore_btn mt-5">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weare;
