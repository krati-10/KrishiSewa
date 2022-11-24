import "./App.css";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Store from "./Components/Store/Store";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { useContext, useState } from "react";
import { themeContext } from "./Context";
import Detect from "./Components/Detect/Detect";
import { Route, Routes } from "react-router";
import Modal from "./Components/Modal/Modal";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [modalOpen, setModalOpen] = useState(false);
  function Open() {
    setModalOpen(true);
  }
  function Close() {
    setModalOpen(false);
  }
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar Open={Open} />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/detect" element={<Detect />} />
        <Route path="/services" element={<Services />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {modalOpen && <Modal Close={Close} />}
    </div>
  );
}

export default App;
