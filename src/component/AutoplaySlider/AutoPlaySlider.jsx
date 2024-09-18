import "./AutoPlaySlider.css";

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

const AutoPlaySlider = () => {
  const brand = [
    {
      id: 1,
      img: school1,
      Heading: "BalNiketan Higher Secondry School",
      address: "62,Pagnispaga  ,Indore , Madhya Pradesh - 452007,",
      ratings: 4.1,
    },
    {
      id: 2,
      img: school2,

      Heading: "Matushri Ahilya Devi Public School",
      address: "RXC6+7CV,Mundla Bag,Sula Khedi,Indore,Madhya Pradesh - 453771,",
      rating: 3.8,
    },
    {
      id: 3,
      img: school3,

      Heading: "Eva World School",
      address:
        "Mumbai Agra Road ,Opposite Omaxe city 1 ,Mayakhedi ,Indore,Madhya Pradesh - 452010,",
    },
    {
      id: 4,
      img: school4,

      Heading: "L.G Academy",
      address:
        "CAT -Rao Road ,near Treasure Colony,Siddhipuram Colony RRCAT  ,Indore,Madhya Pradesh - 453331,",
    },
    {
      id: 5,
      img: school5,

      Heading: "IPPS - Ishaque Patel Public School",
      address:
        "PWX8+VRR,147,Near Saikripa Colony,Nipaniya,Indore,Madhya Pradesh - 452010,",
    },
    {
      id: 6,
      img: school6,

      Heading: "Vidhya Vijay Bal Mandir",
      address:
        "Vijay nagar ,slice 4,Aranya Nagar,Indore,Madhya Pradesh - 452010,",
    },
    {
      id: 7,
      img: school7,

      Heading: "Green Field School",
      address:
        "46,Sapna sangeeta Rd behind Vikram Tower old agrawal ,Indore,Madhya Pradesh - 452001,",
    },
    {
      id: 8,
      img: school8,

      Heading: "Schools",
      address:
        "Yantrapur, Davangere - Harihar Rd, Kirloskar Institute Of Advanced Management Studies, Harihar, Karnataka 577601,",
    },
    {
      id: 9,
      img: school9,

      Heading: "VidhyaShree Education Academy ",
      address: "255,Sai Shraddha Palace Colony,Indore,Madhya Pradesh - 452010",
    },
    {
      id: 10,
      img: school10,

      Heading: "Sita Devi Higher Secondry School",
      address:
        "7,Patthar Mundla Rd,Near Hanuman Mandir,Palda Naka Indore,Madhya Pradesh - 452001",
    },
  ];

  const quantity = brand.length;

  return (
    <div className="slider-3d">
      <ul className="slider-3d-grid" style={{ "--quantity": quantity, "--time": "10s" }}>
        {brand.map((data , index) => (
          <li key={data.id} style={{ "--i": index } }>
            <img src={data.img} alt={data.Heading} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoPlaySlider;
