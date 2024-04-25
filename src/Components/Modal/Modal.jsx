import React, { useState, useContext } from "react";
import "./Modal.css";
import UserContext from "../context/Usercontext";

const Modal = ({ close }) => {
  const { setbgColor } = useContext(UserContext);
  const [group, setGroup] = useState({ name: "", color: "", notes: "" });

  const handleColorSelection = (color) => {
    setbgColor(color);
    setGroup({ ...group, color: color });
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setGroup({ ...group, name: value });
  };

  const handleSubmit = () => {
    if (!group.name.trim()) {
      return;
    }

    const trimmedName = group.name.trim();
    const existingGroups = JSON.parse(localStorage.getItem("groups")) || [];
    const check = existingGroups.find((item) => item.name === trimmedName);
    if (!check) {
      const updatedGroups = [
        ...existingGroups,
        { ...group, name: trimmedName },
      ];
      localStorage.setItem("groups", JSON.stringify(updatedGroups));
    } else {
      alert("The user already exists.");
    }
    close();
  };

  const colorOptions = [
    "#b38bfa",
    "#ff79f2",
    "#43e6fc",
    "#f19576",
    "#0047ff",
    "#6691ff",
  ];

  return (
    <div className="main" onClick={close}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <div className="popup__title">Create New Group</div>
        <div className="popup__input">
          <span>Group Name</span>
          <input
            type="text"
            placeholder="Enter Group Name"
            value={group.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="popup__color__input">
          <span>Group Color</span>
          <div className="popup__color__input__color">
            {colorOptions.map((color, index) => (
              <div
                key={index}
                className={`popup__color__input__color__${index + 1}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelection(color)}
              ></div>
            ))}
          </div>
        </div>
        <div className="popup__closeicon" onClick={close}>
          &#10006;
        </div>
        <div className="popup__close">
          <button onClick={() => handleSubmit()}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
