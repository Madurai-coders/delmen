import "../../CSS/navbar/navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Megaphone from "../../assets/HomePage/megaphone 1.png";
import Sale from "../../assets/HomePage/hot-sale 1.png";
import New from "../../assets/HomePage/new-product 1.png";
import Navbar from "../Navbar/navbar";
import InputAdornment from "@mui/material/InputAdornment";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const searchData = [
  "Door",
  "Mosquito Net For Window",
  "Retractable Door",
  "Mosquito Net",
  "Magnetic Net",
  "Sliding Door",
  "Sliding Window",
  "RetractableDoubleDoor",
  "Retractable Roller Double Door",
  "Openable Single Door System",
];
function Landingpage() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [result, setresult] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    var Result = searchData.filter((item) =>
      item.toLowerCase().includes(event.target.value.toLowerCase())
    );
    var result = Result.slice(0, 4);

    console.log(result);
    if (result[0]) {
      setSuggestions(result);
    } else {
      setSuggestions();
    }
  };
  const Search = (event) => {
    if (
      inputValue === "Door" ||
      inputValue === "Retractable Door" ||
      inputValue === "Mosquito Net For Window" ||
      inputValue === "Window" ||
      inputValue === "Mosquito Net"
    ) {
      navigate("/ourproducts");
    } else if (inputValue === "Sliding Window") {
      navigate("./slidingwindowsystem");
    } else if (inputValue === "Sliding Door") {
      navigate("./slidingdoor");
    } else if (inputValue === "Magnetic Net") {
      navigate("./stainlesssteelwithmesh");
    } else if (inputValue === "RetractableDoubleDoor") {
      navigate("./retractabledoubledoor");
    } else if (inputValue === "Retractable Roller Double Door") {
      navigate("./rollerdoubledoor");
    } else if (inputValue === "Openable Single Door System") {
      navigate("./openablesingledr");
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    if (
      suggestion === "Door" ||
      suggestion === "Retractable Door" ||
      suggestion === "Mosquito Net For Window" ||
      suggestion === "Window" ||
      suggestion === "Mosquito Net"
    ) {
      navigate("/ourproducts");
    } else if (suggestion === "Sliding Window") {
      navigate("./slidingwindowsystem");
    } else if (suggestion === "Sliding Door") {
      navigate("./slidingdoor");
    } else if (suggestion === "Magnetic Net") {
      navigate("./stainlesssteelwithmesh");
    } else if (suggestion === "RetractableDoubleDoor") {
      navigate("./retractabledoubledoor");
    } else if (suggestion === "Retractable Roller Double Door") {
      navigate("./rollerdoubledoor");
    } else if (suggestion === "Openable Single Door System") {
      navigate("./openablesingledr");
    }

    setSuggestions([]);
  };
  return (
    <>
      <div className="Navbar">
        <div className="container">
          <Navbar />

          <div className="row justify-content-center cards_row">
            <div className="col-12 text-center">
              <h1 className="homepage_title mt-5 pt-5">
                Making your home free from<br></br> Mosquitoes, Flies and
                <br></br> Insects
              </h1>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-6 col-8 text-center">
              <div className="search mt-5">
                <InputBase
                  fullWidth
                  value={inputValue}
                  onChange={handleInputChange}
                  className="inputbase pe-1"
                  placeholder="Search"
                  inputProps={{ "aria-label": "Search" }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton className="iconbutton">
                        <SearchIcon className="search_icon" onClick={Search} />
                      </IconButton>
                    </InputAdornment>
                  }
                ></InputBase>

                {inputValue && (
                  <div
                    className="search_autocomplete arrow-top mt-3 ms-4"
                    id="search"
                  >
                    <ul className="search_item">
                      {suggestions &&
                        suggestions.map((suggestion) => (
                          <li
                            className="search_list"
                            key={suggestion}
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            {suggestion}
                          </li>
                        ))}
                      {inputValue && !suggestions && (
                        <li className="search_list">no result found</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="row justify-content-center cards_row">
              <div className="col-lg-3 col-md-3 col-sm-4 col-4 text-center mt-5 card_gap">
                <div className="card ms-5">
                  <Link
                    to="/stainlesssteelwithmesh"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="megaphone">
                      <img
                        src={Megaphone}
                        alt=""
                        className="mt-2 img-fluid latest_img"
                      ></img>
                    </div>
                    <div className="megaphone_txt">
                      <h6 className="latest_txt">Latest Products</h6>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-4 col-4 text-center mt-5 card_gap">
                <div className="card ms-5">
                  <Link
                    to="/retractabledoubledoor"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="megaphone">
                      <img
                        src={New}
                        alt=""
                        className="mt-4 img-fluid latest_img1"
                      ></img>
                    </div>
                    <div className="megaphone_txt">
                      <h6 className="latest_txt">New Products</h6>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-4 col-4 text-center mt-5 card_gap">
                <div className="card ms-5">
                  <Link
                    to="/magneticinsectscreens"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="megaphone">
                      <img
                        src={Sale}
                        alt=""
                        className="mt-4 pt-2 img-fluid latest_img2"
                      ></img>
                    </div>
                    <div className="megaphone_txt">
                      <h6 className="latest_txt">Hot Sale</h6>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Landingpage;
