import React from 'react';
import './Service.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>

      <div className="service-section">
        <h2>Counseling</h2>
        <p>
          Our professional counseling services are designed to help you navigate both personal and academic challenges. We offer:
        </p>
        <ul>
          <li>Individual Counseling Sessions</li>
          <li>Academic Planning and Guidance</li>
          <li>Career Counseling</li>
        </ul>
      </div>

      <div className="service-section">
        <h2>College Admission Assistance</h2>
        <p>
          We provide comprehensive support for the college admission process, including:
        </p>
        <ul>
          <li>Application Guidance</li>
          <li>Essay Writing Help</li>
          <li>Interview Preparation</li>
          <li>Financial Aid and Scholarship Assistance</li>
        </ul>
      </div>

      <div className="service-section">
        <h2>School Admission Assistance</h2>
        <p>
          Our team helps students and parents with the school admission process by offering:
        </p>
        <ul>
          <li>School Selection Advice</li>
          <li>Application Process Support</li>
          <li>Entrance Exam Preparation</li>
        </ul>
      </div>

      <div className="service-section">
        <h2>Live Classes</h2>
        <p>
          Participate in interactive and engaging live classes for a variety of subjects and test preparations:
        </p>
        <ul>
          <li>Subject-Specific Tutoring</li>
          <li>Group Study Sessions</li>
          <li>Exam Preparation Classes</li>
        </ul>
      </div>

      <div className="service-section">
        <h2>Test Preparation</h2>
        <p>
          Get ready for standardized tests with our expert guidance and resources:
        </p>
        <ul>
          <li>SAT/ACT Prep</li>
          <li>Graduate Exams (GRE, GMAT, LSAT, MCAT) Prep</li>
          <li>Test-Taking Strategies and Practice Tests</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
