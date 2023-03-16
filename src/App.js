import "../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/main/main";
import Contact from "./Components/Contact/contact";
import Advantage from "./Components/CompanyProfile/company";
import OurProducts from "./Components/OurProducts/product";
import CompanyProfile from "./Components/Advantage/advantage";
import RetractableDoubleDoor from "./Components/ProductCards/Retractable/RetractableDoubleDoor";
import RollerDoubleDoor from "./Components/ProductCards/Retractable/RollerDoubleDoor";
import OpenableSingleDr from "./Components/ProductCards/Openable System/OpenableSingleDoor";
import MultiSlidingDoor from "./Components/ProductCards/Window/MultiSlidingDoor";
import OpenableWindow from "./Components/ProductCards/Openable System/OpenableWindow";
import OpenableDoubleDoor from "./Components/ProductCards/Openable System/OpenableDoubleDoor";
import DoubleSlidingWithSingleTrack from "./Components/ProductCards/Window/DoubleSlidingWithSingleTrack";
import SlidingSystem from "./Components/ProductCards/Window/SlidingWindowSystem";
import SlidingDoor from "./Components/ProductCards/Window/SlidingDoor";
import MagneticInsect from "./Components/ProductCards/MagnetInsectScreen/MagneticInsect";
import ScrollToTop from "./Components/script/script";
import RollerWindow from "./Components/ProductCards/Retractable/RetractableRollerWindow";
import StainlessSteelWithMesh from "./Components/ProductCards/MagnetInsectScreen/OpenableDoorSystemWithMesh";
import SlidingWindowMesh from "./Components/ProductCards/Window/SlidingWindowMesh";
import SingleSliderWithTrack from "./Components/ProductCards/Window/SingleSliderWithTrack";
import OpenableMultiFold from "./Components/ProductCards/Openable System/OpenableMultiFold";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
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
            path="/magneticinsectscreens"
            element={<MagneticInsect />}
          ></Route>
          <Route
            path="/stainlesssteelwithmesh"
            element={<StainlessSteelWithMesh />}
          ></Route>

          <Route
            path="/slidingwindowsystem"
            element={<SlidingSystem />}
          ></Route>
          <Route
            path="/slidingwindowmesh"
            element={<SlidingWindowMesh />}
          ></Route>
          <Route
            path="/singlesliderwithtrack"
            element={<SingleSliderWithTrack />}
          ></Route>
          <Route path="/multislidingdr" element={<MultiSlidingDoor />}></Route>
          <Route path="/slidingdoor" element={<SlidingDoor />}></Route>

          <Route
            path="/retractabledoubledoor"
            element={<RetractableDoubleDoor />}
          ></Route>
          <Route
            path="/rollerdoubledoor"
            element={<RollerDoubleDoor />}
          ></Route>
          <Route path="/rollerwindow" element={<RollerWindow />}></Route>

          <Route path="/openablewindow" element={<OpenableWindow />}></Route>

          <Route
            path="/openablesingledr"
            element={<OpenableSingleDr />}
          ></Route>
          <Route
            path="/openabledoubledoor"
            element={<OpenableDoubleDoor />}
          ></Route>

          <Route
            path="/openablemultifolddoor"
            element={<OpenableMultiFold />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
