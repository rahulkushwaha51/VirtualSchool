
import Header from "../general/Header";
import "./Workshop.css";

const WorkshopSeminar = () => {
  return (
    <>
      <Header icon={"fa fa-chalkboard-teacher"} title={"Workshops & Seminars"} />

      <div className="workshop-seminar-container">
        <div className="workshop-seminar-intro">
          <h1>Workshops & Seminars for School</h1>
          <p>
            Workshops and seminars are educational events designed to enhance student{`&apos;`}s learning, skills, and knowledge 
            in various subjects or areas of interest. These sessions provide opportunities for interactive learning, 
            practical skill development, and in-depth knowledge sharing.
          </p>
        </div>

        <div className="workshop-section">
          <h2>Workshops</h2>
          <ul>
            <li><strong>Interactive Learning:</strong> Hands-on activities and exercises that engage students actively.</li>
            <li><strong>Skill Development:</strong> Focus on developing specific skills or knowledge, such as creative writing, coding, or science experiments.</li>
            <li><strong>Small Group:</strong> Often conducted in smaller groups to allow personalized instruction and interaction.</li>
            <li><strong>Practical Application:</strong> Emphasizes applying concepts in real-world scenarios through practical exercises.</li>
          </ul>
        </div>

        <div className="seminar-section">
          <h2>Seminars</h2>
          <ul>
            <li><strong>Informative Sessions:</strong> Presentations or lectures on specific topics, often led by experts or guest speakers.</li>
            <li><strong>Broader Audience:</strong> Typically involves a larger group of students and can cover a wide range of subjects.</li>
            <li><strong>Knowledge Sharing:</strong> Aims to provide in-depth knowledge, updates on current trends, or insights into various fields.</li>
            <li><strong>Q&A and Discussion:</strong> Includes opportunities for students to ask questions and engage in discussions.</li>
          </ul>
        </div>

        <div className="workshop-seminar-summary">
          <h2>Enhancing Educational Experience</h2>
          <p>
            Both workshops and seminars aim to enrich students’ educational experiences, offer new perspectives, and provide 
            practical knowledge and skills. Workshops are interactive, hands-on sessions focusing on skill development and practical 
            application, while seminars are informative presentations by experts covering broader topics with opportunities for Q&A.
          </p>
        </div>
      </div>
    </>
  );
};

export default WorkshopSeminar;
