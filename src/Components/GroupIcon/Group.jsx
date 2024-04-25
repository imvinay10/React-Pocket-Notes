import React, { useContext, useState } from "react";
import "./Groupstyle.css";
import UserContext from "../context/Usercontext";

const Group = () => {
  const { setCurrentGroup, hiddennotes } = useContext(UserContext);
  const [active, setActive] = useState("");

  const extractUserLogo = (name) => {
    let take = name.substring(0, 1); // Add the first character of the name

    const spacePos = name.indexOf(" ");
    if (spacePos !== -1) {
      take += name[spacePos + 1];
    }

    return take.toUpperCase();
  };

  const extractUsername = (name) => {
    let take = name[0].toUpperCase();
    for (let i = 1; i < name.length; i++) {
      if (name[i - 1] === " ") {
        take += name[i].toUpperCase();
      } else {
        take += name[i];
      }
    }
    return take;
  };

  const handleclick = (e, group) => {
    hiddennotes(false);
    setActive(group.name);
    setCurrentGroup(group);
  };

  const allGroup = JSON.parse(localStorage.getItem("groups")) || [];

  return (
    <div className="container1">
      <div className="left">
        {allGroup.map((group) => (
          <div
            key={group.name}
            onClick={(e) => handleclick(e, group)}
            className={`profile-container ${
              group.name === active ? "active" : ""
            }`}
          >
            <div
              className="profile-icon"
              style={{ backgroundColor: group.color }}
            >
              <span>{extractUserLogo(group.name)}</span>
            </div>
            <p>{extractUsername(group.name)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Group;
