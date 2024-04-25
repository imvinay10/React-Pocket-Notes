import React, { useState, useContext } from "react";
import UserContext from "./Components/context/Usercontext";
import Groupcomp from "./Components/Group/Groupcomp";
import Modal from "./Components/Modal/Modal";
import Views from "./view/Views";

function App() {
  const { notes } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="maindiv" style={{ display: "flex" }}>
      <Groupcomp open={openModal} />
      {!notes && <Views />}
      {isModalOpen && <Modal close={closeModal} />}
    </div>
  );
}

export default App;
