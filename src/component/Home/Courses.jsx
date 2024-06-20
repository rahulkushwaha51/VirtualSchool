// import React from "react";
import "./Courses.css";

const Course = () => {
  const coursesData = [
    {
      id: 1,
      title: "Math 101",
      img: "https://via.placeholder.com/150",
      description: "Basic Math Course",
      category: "Science",
    },
    {
      id: 2,
      title: "Physics 101",
      img: "https://via.placeholder.com/150",
      description: "Basic Physics Course",
      category: "Science",
    },
    {
      id: 3,
      title: "Chemistry 101",
      img: "https://via.placeholder.com/150",
      description: "Basic Chemistry Course",
      category: "Science",
    },
    {
      id: 4,
      title: "Biology 101",
      img: "https://via.placeholder.com/150",
      description: "Basic Biology Course",
      category: "Science",
    },
    {
      id: 5,
      title: "History 101",
      img: "https://via.placeholder.com/150",
      description: "Basic History Course",
      category: "Arts",
    },
    {
      id: 6,
      title: "Geology 101",
      img: "https://via.placeholder.com/150",
      description: "Basic Geology Course",
      category: "Arts",
    },
    {
      id: 7,
      title: "Economics 101",
      img: "https://via.placeholder.com/150",
      description: "Basic Economics Course",
      category: "Arts",
    },
    {
      id: 8,
      title: "Commerce 101",
      img: "https://via.placeholder.com/150",
      description: "Basic Commerce Course",
      category: "Arts",
    },
    {
      id: 9,
      title: "Management 101",
      img: "https://via.placeholder.com/150",
      description: "Basic Management Course",
      category: "Commerce",
    },
    {
      id: 10,
      title: "Marketing 101",
      img: "https://via.placeholder.com/150",
      description: "Basic Marketing Course",
      category: "Commerce",
    },
    {
      id: 11,
      title: "Finance 101",
      img: "https://via.placeholder.com/150",
      description: "Basic Finance Course",
      category: "Commerce",
    },
    {
      id: 12,
      title: "Human Resources 101",
      img: "https://via.placeholder.com/150",
      description: "Basic Human Resources Course",
      category: "Commerce",
    },
  ];

  const categories = ["Science", "Arts", "Commerce"];

  return (
    <div className="course">
      <div className="heading">
        <h2>
          Courses <span>We</span> Offer
        </h2>
        <div className="bottom-line bottom-line-second"></div>
      </div>
      {categories.map((category) => (
        <div key={category}>
          <h3 className="category-title">{category}</h3>
          <div className="course-grid">
            {coursesData
              .filter((course) => course.category === category)
              .map((course) => (
                <div key={course.id} className="course-card">
                  <img src={course.img} alt={course.title} className="course-img" />
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-description">{course.description}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Course;
