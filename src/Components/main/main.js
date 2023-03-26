import OurProducts from "../Homepage/products";
import WeAre from "../Homepage/weare";
import Footer from "../Footer/footer";
import Landingpage from "../Homepage/landingpage";
function Main() {
  return (
    <>
    <div className="row justify-content-center">
    <div style={{maxWidth:1900}}>
      <Landingpage />
      <OurProducts />
      <WeAre />
      <Footer />
      </div>
      </div>
    </>
  );
}

export default Main;
