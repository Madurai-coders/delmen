import "../../CSS/homepage/products.css";
import MultiSlidingDoor from "../../assets/Retractable Double Door/multislidingdoor.png";
import OpenableSingleDoor from "../../assets/Retractable Double Door/openablesingledoor.png";
import SlidingWindow from "../../assets/Retractable Double Door/slidingwindow.png";
import MagneticNet from "../../assets/Magnetic Insect Screens/magneticnet.png";
import RetractableRollerDoubleDoor from "../../assets/Retractable Double Door/retractablerollerdoubledoor.png";
import MagneticInsectScreens from "../../assets/Magnetic Insect Screens/magneticinsectscreens.png";
import DoubleSlidingDoorWithSingleTrack from "../../assets/Retractable Double Door/doubleslidingdoorwithsingletrack.png";
import RetractableDoubleDoor from "../../assets/Retractable Double Door/retractabledoubledoor.png";

function Products() {
  return (
    <>
      <div className="ourproducts">
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h2 className="product_title">OUR PRODUCTS</h2>
          </div>
          <div className="col-4 d-flex flex-column pt-5">
            <div className="product_img">
              <img src={MultiSlidingDoor} alt="" className="img-fluid mb-4"  ></img>
              <img
                src={OpenableSingleDoor}
                alt=""
                className="img-fluid mb-4"
              ></img>
              <img
                src={SlidingWindow}
                alt=""
                className="img-fluid"
              ></img>
            </div>
          </div>
          <div className="col-4 d-flex flex-column pt-5">
            <div className="product_img">
              <img src={MagneticNet} alt="" className="img-fluid mb-4 img_2"></img>
              <img
                src={RetractableRollerDoubleDoor}
                alt=""
                className="img-fluid mt-3 img_2"
              ></img>
            </div>
          </div>
          <div className="col-4 d-flex flex-column pt-5">
            <div className="product_img">
              <img
                src={MagneticInsectScreens}
                alt=""
                className="img-fluid mb-5 img_3"
              ></img>
              <img
                src={DoubleSlidingDoorWithSingleTrack}
                alt=""
                className="mb-4 img-fluid"
              ></img>
              <img
                src={RetractableDoubleDoor}
                alt=""
                className="img-fluid pt-1"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
