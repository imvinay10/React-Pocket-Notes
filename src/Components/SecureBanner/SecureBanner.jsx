import React from "react";
import SecureBannerImg from "../../assets/image-removebg-preview 1.png";
import LockIcon from "../../assets/lockicon.png";
import "./Securestyle.css";

const SecureBanner = () => {
  return (
    <div className="container">
      <div className="inner-element">
        <div className="inner-image">
          <img src={SecureBannerImg} alt="Secure Image" />
        </div>

        <div className="inner-content">
          <h1>Pocket Notes</h1>
          <p className="ptag-of-secure-banner">
            Send and receive messages without keeping your phone online.
            <br />
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
        </div>

        <div className="bottom-div">
         
        </div>
        <p className="ptag-of-secure-banner"> <img src={LockIcon} alt="Lock Icon" /> end-to-end encrypted</p>
      </div>
    </div>
  );
};

export default SecureBanner;
