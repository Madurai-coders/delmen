import "../../CSS/homepage/mesh.css";
import MeshNet from "../../assets/MagneticNet/magneticnet.png";
import Strips from "../../assets/MagneticNet/strips.png";
import Magnet from "../../assets/MagneticNet/magnet.png";
import DenserMesh from "../../assets/MagneticNet/meshes.png";
function Mesh() {
  return (
    <>
      <div className="mesh d-flex flex-row text-center">
        <div className="row junstify-content-center">
          <div className="col-12 text-center">
            <div className="meshimg ms-5 ps-5">
              <img src={MeshNet} alt="" className="img-fluid ms-5"></img>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5 magnetgrp_img">
          <div className="col-5 text-center">
            <img src={DenserMesh} alt="" className="img-fluid"></img>
            <h6 className="densermesh_txt mt-2">
              Denser meshes keep<br></br> bugs out
            </h6>
          </div>
          <div className="col-5  text-center">
            <img src={Magnet} alt="" className="img-fluid mt-1"></img>
            <h6 className="densermesh_txt mt-2">
              Tight Magnet<br></br>seal
            </h6>
          </div>
          <div className="col-5 text-center">
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
