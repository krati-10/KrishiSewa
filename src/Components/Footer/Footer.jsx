import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Telegram from "@iconscout/react-unicons/icons/uil-telegram";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Join Us At:</span>
        <span>kat.05.gup@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Whatsapp color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Telegram color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
