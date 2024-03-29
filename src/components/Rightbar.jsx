import React from "react";

const Rightbar = ({ data, bgcolor, color }) => {
  return (
    <>
      <div
        className="right_container"
        style={{ backgroundColor: `${bgcolor}`, color: "white" }}
      >
        <div className="postImg">
          <img id="img" src={data.pImg} alt="" />
          <div className="inside_img">
            <div className="img">
              <img src={data.authorImg} alt="" />
            </div>
            <div className="text">
              <h3>{data.userName}</h3>
              <p>{data.title}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightbar;
