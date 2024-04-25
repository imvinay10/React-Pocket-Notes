import React from "react";
import Group from "../GroupIcon/Group";
import "./Groupcompstyle.css";

const Groupcomp = ({ open }) => {
  return (
    <div className="leftcontainer">
      <h1 className="h1tagofGroupcomp" style={{ marginTop: "70px" }}>
        Pocket Notes
      </h1>
      <Group />
      <div className="circlebutton" onClick={open}>
        +
      </div>
    </div>
  );
};

export default Groupcomp;
