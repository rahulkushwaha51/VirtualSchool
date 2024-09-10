// import React from "react";
import "./Courses.css";

import pcmImg from "../../assets/subject/business.jpg";
import pcbImg from "../../assets/subject/biology.jpg";
import artsImg from "../../assets/subject/history.jpg";

const Course = () => {
  const coursesData = [
    {
      id: 1,
      title: "PCM",
      img: pcmImg,
    },
    {
      id: 2,
      title: "PCB",
      img: pcbImg,
    },
    {
      id: 3,
      title: "Arts",
      img: artsImg,
    },
  ];

  return (
    <div className="course">
      <div className="heading">
        <h2>
          Get Admission In
        </h2>
        <div className="bottom-line bottom-line-second"></div>
      </div>
      <div className="course-grid">
        {coursesData.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.img} alt={course.title} className="course-img" />
            <h3 className="course-title">{course.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
