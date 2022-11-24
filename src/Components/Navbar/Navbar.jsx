import React, { useContext } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { themeContext } from "../../Context";

const Navbar = ({ Open }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">KrishiSewa</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <a href="/" style={{ color: darkMode ? "white" : "black" }}>
                Home
              </a>
            </li>
            <li>
              <a
                href="/services"
                style={{ color: darkMode ? "white" : "black" }}
              >
                Services
              </a>
            </li>
            <li>
              <a href="/store" style={{ color: darkMode ? "white" : "black" }}>
                Store
              </a>
            </li>
            <li>
              <a href="/faq" style={{ color: darkMode ? "white" : "black" }}>
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/contact"
                style={{ color: darkMode ? "white" : "black" }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <button
          className="button"
          onClick={() => {
            Open();
          }}
        >
          Community
        </button>
        {/* {modalOpen && <Modal setOpenModal={setModalOpen} />} */}
      </div>
    </div>
  );
};

export default Navbar;
