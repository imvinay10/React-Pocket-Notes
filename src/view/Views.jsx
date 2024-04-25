import React, { useContext } from "react";
import NotesSection from "../Components/notessection/NotesSection";
import SecureBanner from "../Components/SecureBanner/SecureBanner";
import UserContext from "../Components/context/Usercontext";
const Views = () => {
  const { currentgroup } = useContext(UserContext);
  return <>{currentgroup ? <NotesSection /> : <SecureBanner />}</>;
};

export default Views;
