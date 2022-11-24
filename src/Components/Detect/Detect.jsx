import React, { useContext, useState, useEffect } from "react";
import "./Detect.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { storage } from "../Detect/firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { v4 } from "uuid";
import crop from "../../img/crop.jpeg";
import crop3 from "../../img/crop3.jpeg";
import crop2 from "../../img/crop2.jpeg";
import crop5 from "../../img/crop5.jpeg";
import detect from "../../img/detect.jpeg";

const Detect = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(() => [url]);
        console.log(url);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls(() => [url]);
        });
      });
    });
  }, []);

  return (
    <div className="detect" id="detect">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Crop Disease Prediction
          </span>
          <span>Predict it!</span>
          <div>
            <input
              type="file"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <button className="button i-button" onClick={uploadFile}>
              {" "}
              Upload{" "}
            </button>
            {imageUrls.map((url) => {
              return <img src={url} alt="" />;
            })}
          </div>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={crop} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={detect} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={crop2} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={crop3} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={crop5} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Detect;
