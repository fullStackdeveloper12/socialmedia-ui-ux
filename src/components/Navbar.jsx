import React from "react";
import { FcSearch } from "react-icons/fc";
import { IoFilter } from "react-icons/io5";
import { RiToggleLine } from "react-icons/ri";
import { RiToggleFill } from "react-icons/ri";
const Navbar = ({ color, bgcolor, togglebtn, toggle }) => {
  return (
    <>
      <div className="nav_bar">
        <div
          className="logo"
          style={{ backgroundColor: `${bgcolor}`, color: `${color}` }}
        >
          Shub
          <div onClick={togglebtn}>
            {toggle ? <RiToggleLine id="logo" /> : <RiToggleFill id="logo" />}
          </div>
        </div>
        <div
          className="search"
          style={{ backgroundColor: `${bgcolor}`, color: `${color}` }}
        >
          <div className="left">
            <IoFilter />
            Search Here
          </div>
          <div className="right">
            <FcSearch />
            Filters
          </div>
        </div>
        <div
          className="seller"
          style={{ backgroundColor: `${bgcolor}`, color: `${color}` }}
        >
          Become a Seller
        </div>
      </div>
    </>
  );
};

export default Navbar;
