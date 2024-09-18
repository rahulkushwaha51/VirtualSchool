import React, { useState, useEffect, useRef } from "react";
import "./Slider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import school1 from "../../assets/school_banner/school1.webp";
import school2 from "../../assets/school_banner/school2.avif";
import school3 from "../../assets/school_banner/school3.jpg";
import school4 from "../../assets/school_banner/school4.jpg";
import school5 from "../../assets/school_banner/school5.jpg";
import school6 from "../../assets/school_banner/school6.jpg";
import school7 from "../../assets/school_banner/school7.jpg";
import school8 from "../../assets/school_banner/school8.png";
import school9 from "../../assets/school_banner/school9.jpg";
import school10 from "../../assets/school_banner/school10.png";

const Slider = () => {
  const CardsData = [
    {
      id: 1,
      img: school1,
      heading: "BalNiketan Higher Secondry School",
      address: "62,Pagnispaga  ,Indore , Madhya Pradesh - 452007,",
      ratings: 4.1,
    },
    {
      id: 1,
      img: school2,
      link: "/school",
      heading: "Matushri Ahilya Devi Public School",
      address: "RXC6+7CV,Mundla Bag,Sula Khedi,Indore,Madhya Pradesh - 453771,",
      rating: 3.8,
    },
    {
      id: 1,
      img: school3,
      link: "/school",
      heading: "Eva World School",
      address:
        "Mumbai Agra Road ,Opposite Omaxe city 1 ,Mayakhedi ,Indore,Madhya Pradesh - 452010,",
    },
    {
      id: 1,
      img: school4,
      link: "/school",
      heading: "L.G Academy",
      address:
        "CAT -Rao Road ,near Treasure Colony,Siddhipuram Colony RRCAT  ,Indore,Madhya Pradesh - 453331,",
    },
    {
      id: 1,
      img: school5,
      link: "/school",
      heading: "IPPS - Ishaque Patel Public School",
      address:
        "PWX8+VRR,147,Near Saikripa Colony,Nipaniya,Indore,Madhya Pradesh - 452010,",
    },
    {
      id: 1,
      img: school6,
      link: "/school",
      heading: "Vidhya Vijay Bal Mandir",
      address:
        "Vijay nagar ,slice 4,Aranya Nagar,Indore,Madhya Pradesh - 452010,",
    },
    {
      id: 1,
      img: school7,
      link: "/school",
      heading: "Green Field School",
      address:
        "46,Sapna sangeeta Rd behind Vikram Tower old agrawal ,Indore,Madhya Pradesh - 452001,",
    },
    {
      id: 1,
      img: school8,
      link: "/school",
      heading: "Schools",
      address:
        "Yantrapur, Davangere - Harihar Rd, Kirloskar Institute Of Advanced Management Studies, Harihar, Karnataka 577601,",
    },
    {
      id: 1,
      img: school9,
      link: "/school",
      heading: "VidhyaShree Education Academy ",
      address: "255,Sai Shraddha Palace Colony,Indore,Madhya Pradesh - 452010",
    },
    {
      id: 1,
      img: school10,
      link: "/school",
      heading: "Sita Devi Higher Secondry School",
      address:
        "7,Patthar Mundla Rd,Near Hanuman Mandir,Palda Naka Indore,Madhya Pradesh - 452001",
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  // Dynamically adjust number of visible cards based on screen size

  return (
    <>
      <div className="my-own-custom-container">
        <Carousel
          swipeable={true}
          draggable={true}
          // arrows={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          transitionDuration={500}
  
        >
          {CardsData.map((card, index) => (
            <div className="card" key={index}>
              <div className="card-img">
                <img src={card.img} alt={`Card ${card.id}`} />
              </div>
              <h2>{card.heading}</h2>
              <p>{card.address}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
