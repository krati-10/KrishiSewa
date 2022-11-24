import React from "react";
import "./Store.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import pic1 from "../../img/pic1.jpg";
import pic2 from "../../img/pic2.jpg";
import pic3 from "../../img/pic3.jpg";
import pic4 from "../../img/pic4.jpg";
import pic5 from "../../img/pic5.jpg";
import pic6 from "../../img/pic6.jpg";
import pic7 from "../../img/pic7.jpg";
import pic8 from "../../img/pic8.jpg";
import pic9 from "../../img/pic9.jpg";
import pic10 from "../../img/pic10.jpg";

const Store = () => {
  const clients = [
    {
      img: pic1,
      review: "Index(SC) by Rainbow Crop Health Limited",
    },
    {
      img: pic2,
      review: "WILLOXAM by Willowood",
    },
    {
      img: pic3,
      review: "WILBLOOM by Willowood",
    },
    {
      img: pic4,
      review: "SULCONA by Willowood",
    },
    {
      img: pic5,
      review: "BRAND (Plant Biostimulant) by Wiilowood",
    },
    {
      img: pic6,
      review: "Sunny CLASSIC by Willowood",
    },
    {
      img: pic7,
      review: "Miraculan by Dow AgroSciences",
    },
    {
      img: pic8,
      review: "SHINE (Basil 10) by Thakar Chemicals Ltd.",
    },
    {
      img: pic9,
      review: "AJANTA SUPER by Gromor Suraksha",
    },
    {
      img: pic10,
      review: "ON-ATOP (Insecticide) by Sumitomo Chemical India Ltd.",
    },
  ];

  return (
    <div className="t-wrapper" id="store">
      <div className="t-heading">
        <span>Agri </span>
        <span>Products </span>
        <span>For Better Farming</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="store">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button className="button s-button">For more</button>
    </div>
  );
};

export default Store;
