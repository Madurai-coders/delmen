import "../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/main/main";
import Contact from "./Components/Contact/contact";
import Advantage from "./Components/Advantage/advantage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/contactus" element={<Contact />}></Route>
          <Route path="/advantage" element={<Advantage />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
