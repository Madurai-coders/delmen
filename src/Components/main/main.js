import OurProducts from "../Homepage/products";
import WeAre from '../Homepage/weare';
import Application from '../Homepage/application';
import MeshImg from '../Homepage/mesh';
import Footer from '../Footer/footer';
import Landingpage from "../Homepage/landingpage";
function Main() {
  return (
    <>
      <Landingpage/>
      <OurProducts />
      <WeAre/>
      <Application/>
      <MeshImg/>
      <Footer/>
    </>
  );
}

export default Main;
