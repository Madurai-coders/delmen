import "../../CSS/homepage/mesh.css";
import MeshNet from "../../assets/MagneticNet/magneticnet.png";
import Strips from "../../assets/MagneticNet/strips.png";
import Magnet from "../../assets/MagneticNet/magnet.png";
import DenserMesh from "../../assets/MagneticNet/meshes.png";
function Mesh() {
  return (
    <>
      <div className="mesh d-flex flex-row text-center mt-5">
        <div className="row junstify-content-center cards_row">
          <div className="col-lg-12 col-md-10 col-12 col-sm-10 text-center">
            <div className="meshimg ms-5 mt-5 pt-5">
              <img src={MeshNet} alt="" className="img-fluid"></img>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5 magnetgrp_img pt-5 cards_row">
          <div className="col-lg-5 col-md-5 col-sm-5 col-10 text-center mt-5 magnet_img ms-5">
            <img src={DenserMesh} alt="" className="img-fluid denser_img"></img>
            <h6 className="densermesh_txt mt-2">
              Denser meshes<br></br> keep bugs out
            </h6>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5 col-10 text-center ms-5 mt-5 magnet_img">
            <img src={Magnet} alt="" className="img-fluid mt-1 denser_img"></img>
            <h6 className="densermesh_txt mt-2">
              Tight Magnet<br></br>seal
            </h6>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5 col-12 text-center">
            <img src={Strips} alt="" className="img-fluid strips_img"></img>
            <h6 className="densermesh_txt3 mt-2">
              Velcro Strips with<br></br> good adhension
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
export default Mesh;
