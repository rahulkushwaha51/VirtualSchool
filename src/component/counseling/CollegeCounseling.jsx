import Header from "../general/Header";
import "./CollegeCounseling.css";

const CollegeCounseling = () => {
  return (
    <>
      <Header icon={"fa fa-university"} title={"College Counseling and Admission"} />
      <div className="college-counseling-container">
        <h1>College Counseling and Admission</h1>
        <p>
          College counseling helps students navigate the process of selecting and applying to colleges. It involves:
        </p>
        <ul>
          <li>
            <strong>College Selection:</strong> Identifying colleges that match the student’s academic goals, interests, and strengths.
          </li>
          <li>
            <strong>Application Guidance:</strong> Assisting with application forms, essays, and necessary documents.
          </li>
          <li>
            <strong>Entrance Exams:</strong> Advising on required exams like SAT, ACT, or others specific to certain colleges.
          </li>
          <li>
            <strong>Interview Prep:</strong> Providing tips and mock interviews for college admission interviews.
          </li>
          <li>
            <strong>Financial Aid:</strong> Guidance on scholarships, grants, and financial aid options.
          </li>
          <li>
            <strong>Decision-Making:</strong> Helping students choose the best college offer based on their preferences and future goals.
          </li>
        </ul>
        <blockquote>
          The goal is to secure admission to a college that aligns with the student{`'`}s aspirations and potential.
        </blockquote>
      </div>
    </>
  );
};

export default CollegeCounseling;
