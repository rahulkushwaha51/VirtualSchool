import { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import "./Testimonial.css";

import student1 from "../../assets/review_user/student1.jpeg";
import student2 from "../../assets/review_user/student2.jpeg";
import student3 from "../../assets/review_user/student3.jpeg";
import student4 from "../../assets/review_user/student4.jpeg";
import student6 from "../../assets/review_user/student6.jpeg";
import { RevealY } from "../../utility/Reveal";

const testimonialsData = [
  {
    name: "Prerna Chaturvedi",
    img: student1,
    heading: "A Flexible and Personalized Learning Experience",
    testimonial:
      "I love the flexibility that the virtual school offers. I can work at my own pace and focus more on subjects where I need extra time. The teachers are supportive and always available to help",
  },
  {
    name: "Tanvi Wadhmani",
    heading: "Engaging and Interactive Lessons",
    img: student2,
    testimonial:
      "The online courses are really interactive and engaging. The lessons include videos, quizzes, and even virtual labs, which make learning fun and interesting. I never thought I’d enjoy school as much as I do now.",
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

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const sliderRef = useRef();

  const totalSlides = testimonialsData.length;

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      setIsTransitioning(false);
      setIndex(totalSlides - 2);
    } else if (newIndex >= totalSlides) {
      setIsTransitioning(false);
      setIndex(0);
    } else {
      setIsTransitioning(true);
      setIndex(newIndex);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(index + 2),
    onSwipedRight: () => updateIndex(index - 2),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(index + 2);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const handleTransitionEnd = () => {
    if (index >= totalSlides - 2) {
      setIsTransitioning(false);
      setIndex(0);
    } else if (index <= 0) {
      setIsTransitioning(false);
      setIndex(totalSlides - 2);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="testimonial-slider-container" {...handlers}>
        <h2>Testimonials</h2>
        <div className="bottom-line bottom-line-second"></div>
        <RevealY
          direction={{ use: true, value: "10%" }}
          opacity={{ use: true, value: 1 }}
          scale={{ use: false, value: 0 }}
          duration={1.5}
          middle={false}
        >
          <div
            className="testimonial-slider"
            ref={sliderRef}
            style={{
              transform: `translateX(-${index * (isMobile ? 100 : 50)}%)`,
              transition: isTransitioning
                ? "transform 0.5s ease-in-out"
                : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {testimonialsData.map((item, i) => (
              <div key={i} className="slide">
                <div className="testimonial-card">
                  <div className="testimonial-card-sub">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="testimonial-img"
                    />
                    <p className="testimonial-text">{item.testimonial}</p>
                  </div>
                  <h4 className="testimonial-name">- {item.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </RevealY>

        <div className="dots">
          {testimonialsData.map((_, i) => (
            <span
              key={i}
              className={`dot ${index === i ? "active" : ""}`}
              onClick={() => updateIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
