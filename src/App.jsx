import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Post from "./components/Post";
import Rightbar from "./components/Rightbar";
import Data from "./Data";

const App = () => {
  const [bgcolor, setbgColor] = useState("#232D3f");
  const [color, setColor] = useState("white");
  const [toggle, setToggle] = useState(true);

  const togglebtn = () => {
    setToggle(!toggle);
    if (toggle) {
      setbgColor("rgb(255,255,255");
      setColor("black");
      document.querySelector("body").style.backgroundColor = "#cbc5c5";
    } else {
      setbgColor("#232D3f");
      setColor("white");
      document.querySelector("body").style.backgroundColor = "black";
    }
  };

  return (
    <>
      <Navbar
        bgcolor={bgcolor}
        color={color}
        toggle={toggle}
        togglebtn={togglebtn}
      />
      <div className="container">
        <div className="side_bar">
          <SideBar bgcolor={bgcolor} color={color} />
        </div>
        <div className="post_section">
          {Data.map((d) => (
            <Post bgcolor={bgcolor} color={color} key={d.id} Data={d} />
          ))}
        </div>
        <div className="right_bar">
          {Data.map((da) => (
            <Rightbar bgcolor={bgcolor} color={color} key={da.id} data={da} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
