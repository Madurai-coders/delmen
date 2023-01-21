import Navbar from "../Navbar/navbar";
import OurProducts from "../OurProducts/products";
import WeAre from '../WhoWeAre/weare';
import Application from '../Application/application';
import MeshImg from '../MeshImage/mesh';
import Footer from '../Footer/footer';
function Main() {
  return (
    <>
      <Navbar />
      <OurProducts />
      <WeAre/>
      <Application/>
      <MeshImg/>
      <Footer/>
    </>
  );
}

export default Main;
