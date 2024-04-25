import React, { useState } from "react";
import UserContext from "./Usercontext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [bgcolor, setbgColor] = useState("");
  const [currentgroup, setCurrentGroup] = useState("");
  const [notes, hiddennotes] = useState(false);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        bgcolor,
        setbgColor,
        currentgroup,
        setCurrentGroup,
        hiddennotes,
        notes,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
