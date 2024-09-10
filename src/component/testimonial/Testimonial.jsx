import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import student1 from "../../assets/review_user/student1.jpeg";
import student2 from "../../assets/review_user/student2.jpeg";
import student3 from "../../assets/review_user/student3.jpeg";
import student4 from "../../assets/review_user/student4.jpeg";
import student6 from "../../assets/review_user/student6.jpeg";


const Testimonial = () => {
  //   const [current, setCurrent] = useState(0);

  const testimonialsData = [
    {
      name: "Prerna Chaturvedi",
      img: student1,
      heading: "A Flexible and Personalized Learning Experience",
      testimonial:
        "I love the flexibility that the virtual school offers. I can work at my own pace and focus more on subjects where I need extra time. The teachers are supportive and always available to help. The personalized learning plans have really helped me stay on track and meet my goals..",
    },
    {
      name: "Tanvi Wadhmani",
      heading: "Engaging and Interactive Lessons",
      img: student2,
      testimonial:
        "The online courses are really interactive and engaging. The lessons include videos, quizzes, and even virtual labs, which  make learning fun and interesting. I never thought I’d enjoy school as much as I do now.",
    },
    {
      name: "Suryansh Sharma",
      heading: "Supportive and Understanding Teachers",
      img: student3,
      testimonial:
        "The teachers are amazing! They really understand that online learning is different and they go out of their way to make sure everyone is comfortable with the material. I feel like I’m getting more individual attention than I ever did in a traditional classroom.",
    },
    {
      name: "Vidhishri Nahar",
      heading: "Great Balance Between School and Life",
      img: student4,
      testimonial:
        "I love that I can balance school with other activities in my life. Whether it's sports, hobbies, or even part-time work, the virtual school gives me the flexibility to do it all without sacrificing my education.",
    },
  

    {
      name: "Harshit Sharma",
      heading: "A Safe and Focused Environment",
      img: student6,
      testimonial:
        "Being in a virtual school has helped me focus better without the distractions that I faced in a traditional school. I feel safer, more comfortable, and more in control of my learning environment.",
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
          What <span>Student </span>Say
        </h2>
        <div className="bottom-line bottom-line-second"></div>
      </div>
      <Slider {...settings}>
        {testimonialsData.map((item, index) => (
          <div key={index} className="testimonial-card">
            <img src={item.img} alt={item.name} className="testimonial-img" />
            <h3>{item.heading}</h3>
            <p className="testimonial-text">{item.testimonial}</p>
            <h4 className="testimonial-name">- {item.name}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
