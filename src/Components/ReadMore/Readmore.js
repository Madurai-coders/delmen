import "../../CSS/company/company.css";
import Footer from "../Footer/footer";
import Design from "../../assets/readmore/design.svg";
import Design_1 from "../../assets/readmore/design1.svg";
import Navbar1 from "../Navbar_1/navbar_1";
function Readmore() {
  return (
    <>
      <div className="company">
        <div className="container">
          <Navbar1 />
          <div className="row cards_row">
            <div className="col-1">
              <img src={Design} alt="" className="img-fluid mt-5 design"></img>
            </div>
            <div className="col-10 mt-5">
              <h6 className="about_delmen pt-5 text-center">
                Our specialty is manufacturing high-quality mosquito screens
                that are mounted to existing windows and doors to prevent
                unwanted insects and mosquitoes from entering.
              </h6>
              <h6 className="about_delmen2 mt-5">
                As a Business, we value Quality and consistency.
              </h6>
              <h6 className="about_delmen1 mt-5">
                Quality testing is done at every stage of the production process
                from the procurement of raw materials to installation. Our
                infrastructure aids in our efficient operations. We have the
                most sophisticated manufacturing facility with skilled workers,
                cut-off machines, hand tools, slot milling, and drilling, etc.
              </h6>
              <h1 className="advatanges_txt mt-5 me-5">Advantages</h1>
              <div className="ad">
                <ul className="mt-4">
                  <li className="advantages_points about_delmen1">
                    Tailor-made solutions to fit various types of windows and
                    doors perfectly.
                  </li>
                  <li className="advantages_points about_delmen1">
                    High durability and longevity.
                  </li>
                  <li className="advantages_points about_delmen1">
                    Quality commitment.
                  </li>
                  <li className="advantages_points about_delmen1">
                    Well-made fixtures enhance the interior design.
                  </li>
                  <li className="advantages_points about_delmen1">
                    High transparency of the mesh.
                  </li>
                  <li className="advantages_points about_delmen1">
                    Excellent and reliable after-sales support.
                  </li>
                  <li className="advantages_points about_delmen1">
                    We do not nail on your windows or doors.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-1 mt-5 pt-5 text-end">
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
