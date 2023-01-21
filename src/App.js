import "../src/App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/main/main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
