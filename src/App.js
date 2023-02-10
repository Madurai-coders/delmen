import "../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/main/main";
import Contact from "./Components/Contact/contact";
import Advantage from "./Components/CompanyProfile/company";
import OurProducts from "./Components/OurProducts/product";
import CompanyProfile from "./Components/Advantage/advantage";
import RetractableDoubleDoor from "./Components/ProductCards/Retractable/RetractableDoubleDoor";
import RollerDoubleDoor from "./Components/ProductCards/Retractable/RollerDoubleDoor";
import OpenableSingleDr from "./Components/ProductCards/Retractable/OpenableSingleDoor";
import MultiSlidingDoor from "./Components/ProductCards/Retractable/MultiSlidingDoor";
import SingleSliderWithTrack from "./Components/ProductCards/Retractable/SingleSliderWithTrack";
import MagneticNet from "./Components/ProductCards/Retractable/MagneticNet";
import OpenableWindow from "./Components/ProductCards/Retractable/OpenableWindow";
import SlidingWindowSystem from "./Components/ProductCards/Retractable/SlidingWindowMesh";
import OpenableDoubleDoor from "./Components/ProductCards/Retractable/OpenableDoubleDoor";
import DoubleSlidingWithSingleTrack from "./Components/ProductCards/Retractable/DoubleSlidingWithSingleTrack";
import SlidingSystem from "./Components/ProductCards/Window/SlidingWindowSystem";
import SlidingDoor from "./Components/ProductCards/Window/SlidingDoor";
import OpenableDoorSystemWithMesh from "./Components/ProductCards/Window/OpenableDoorSystemWithMesh";
import MagneticInsect from "./Components/ProductCards/MagnetInsectScreen/MagneticInsect";
import ScrollToTop from "./Components/script/script";
function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/contactus" element={<Contact />}></Route>
          <Route
            path="/advantage"
            hash="#readmore"
            element={<Advantage />}
          ></Route>
          <Route path="/ourproducts" element={<OurProducts />}></Route>
          <Route path="/companyprofile" element={<CompanyProfile />}></Route>
          <Route
            path="/retractabledoubledoor"
            element={<RetractableDoubleDoor />}
          ></Route>
          <Route
            path="/rollerdoubledoor"
            element={<RollerDoubleDoor />}
          ></Route>
          <Route
            path="/openablesingledr"
            element={<OpenableSingleDr />}
          ></Route>
          <Route path="/multislidingdr" element={<MultiSlidingDoor />}></Route>
          <Route
            path="/singlesliderwithtrack"
            element={<SingleSliderWithTrack />}
          ></Route>
          <Route path="/magneticnet" element={<MagneticNet />}></Route>
          <Route path="/openablewindow" element={<OpenableWindow />}></Route>
          <Route
            path="/slidingwindow"
            element={<SlidingWindowSystem />}
          ></Route>
          <Route
            path="/openabledoubledoor"
            element={<OpenableDoubleDoor />}
          ></Route>
          <Route
            path="/doubleslidingwithsingletrack"
            element={<DoubleSlidingWithSingleTrack />}
          ></Route>
          <Route
            path="/slidingwindowsystem"
            element={<SlidingSystem />}
          ></Route>
          <Route path="/slidingdoor" element={<SlidingDoor />}></Route>
          <Route
            path="/openabledoorwithmesh"
            element={<OpenableDoorSystemWithMesh />}
          ></Route>
          <Route
            path="/magneticinsectscreens"
            element={<MagneticInsect />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
