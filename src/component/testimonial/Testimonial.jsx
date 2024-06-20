import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonial = () => {
  //   const [current, setCurrent] = useState(0);

  const testimonialsData = [
    {
      name: "Rohan",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      testimonial:
        "I have had the pleasure of working with this team. They have helped me a lot in my career. I would highly recommend them.",
    },
    {
      name: "Rahul",
      img: "https://randomuser.me/api/portraits/men/2.jpg",
      testimonial:
        "I have had the pleasure of working with this team. They have helped me a lot in my career. I would highly recommend them.",
    },
    {
      name: "Raj",
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      testimonial:
        "I have had the pleasure of working with this team. They have helped me a lot in my career. I would highly recommend them.",
    },
    {
      name: "Ravi",
      img: "https://randomuser.me/api/portraits/men/4.jpg",
      testimonial:
        "I have had the pleasure of working with this team. They have helped me a lot in my career. I would highly recommend them.",
    },
    {
      name: "Ram",
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      testimonial:
        "I have had the pleasure of working with this team. They have helped me a lot in my career. I would highly recommend them.",
    },

    {
      name: "Rohit",
      img: "https://randomuser.me/api/portraits/men/6.jpg",
      testimonial:
        "I have had the pleasure of working with this team. They have helped me a lot in my career. I would highly recommend them.",
    },

    {
      name: "Rajesh",
      img: "https://randomuser.me/api/portraits/men/7.jpg",
      testimonial:
        "I have had the pleasure of working with this team. They have helped me a lot in my career. I would highly recommend them.",
    },

    {
      name: "sachin",
      img: "https://randomuser.me/api/portraits/men/8.jpg",
      testimonial:
        "I have had the pleasure of working with this team. They have helped me a lot in my career. I would highly recommend them.",
    },

    {
      name: "goldy",
      img: "https://randomuser.me/api/portraits/men/9.jpg",
      testimonial:
        "I have had the pleasure of working with this team. They have helped me a lot in my career. I would highly recommend them.",
    },

    {
      name: "sonu",
      img: "https://randomuser.me/api/portraits/men/10.jpg",
      testimonial:
        "I have had the pleasure of working with this team. They have helped me a lot in my career. I would highly recommend them.",
    },
  ];
  const settings = {
    // dots: true,
    arrows: true,
    autoplay: true,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    speed: 200,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <div className="heading">
        <h2>
          What <span>People </span>Say
        </h2>
        <div className="bottom-line bottom-line-second"></div>
      </div>
      <Slider {...settings}>
        {testimonialsData.map((item, index) => (
          <div key={index} className="testimonial-card">
            <img src={item.img} alt={item.name} className="testimonial-img" />
            <p className="testimonial-text">{item.testimonial}</p>
            <h4 className="testimonial-name">- {item.name}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
