import "../src/App.css";
import OurProducts from "./Components/OurProducts/products";
import Application from "./Components/Application/application";
import WhoWeAre from './Components/WhoWeAre/weare';
import Mesh from './Components/MeshImage/mesh';
import Footer from "./Components/Footer/footer";
import Navbar from "./Components/Navbar/navbar";
function App() {
  return (
    <>
      <div>
         <Navbar/> 
        <OurProducts />
        <WhoWeAre/>
        <Application/>
        <Mesh/>
        <Footer/> 
      </div>
    </>
  );
}

export default App;
