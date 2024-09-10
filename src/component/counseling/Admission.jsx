import Header from "../general/Header";
import "./Admission.css";

const Admissions = () => {
  return (
    <>
      <Header icon={"fa fa-school"} title={"School Admission Counseling"} />

      <div className="admissions-container">
        <div className="admissions-intro">
          <h1>Admission Counseling for MP & CBSE Schools</h1>
          <p>
            Admission counseling for MP Board and CBSE schools involves guiding
            students and parents through the process of applying to and securing
            admission in schools affiliated with either the Madhya Pradesh Board
            of Secondary Education (MPBSE) or the Central Board of Secondary
            Education (CBSE). The goal is to ensure a smooth and informed
            admission process that aligns with the students needs and ambitions.
          </p>
        </div>

        <div className="board-differences">
          <h2>Understanding the Board Differences</h2>
          <p>
            One of the key aspects of admission counseling is helping students
            and parents understand the differences between the MP Board and
            CBSE.
          </p>
          <ul>
            <li>
              <strong>MP Board:</strong>
              <ul>
                <li>
                  State-level board governed by the Madhya Pradesh government.
                </li>
                <li>
                  Curriculum includes a mix of regional subjects and follows the
                  state education policy.
                </li>
              </ul>
            </li>
            <li>
              <strong>CBSE Board:</strong>
              <ul>
                <li>
                  National-level board governed by the central government.
                </li>
                <li>
                  Curriculum follows a standardized national pattern, often
                  considered more rigorous and competitive.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="admission-criteria">
          <h2>Admission Criteria and Eligibility</h2>
          <p>
            Admission requirements for MP and CBSE schools vary slightly, and
            our counselors help you navigate the specific criteria for each.
          </p>
          <ul>
            <li>
              <strong>MP Board:</strong>
              <ul>
                <li>
                  Admissions are typically based on the student’s previous
                  academic performance and seat availability.
                </li>
                <li>
                  Some schools may conduct interviews or basic entrance tests.
                </li>
              </ul>
            </li>
            <li>
              <strong>CBSE Board:</strong>
              <ul>
                <li>
                  Admissions often depend on previous academic records,
                  especially for higher classes.
                </li>
                <li>
                  Some CBSE schools require entrance exams or interviews,
                  particularly in major cities or for popular schools.
                </li>
                <li>
                  A Transfer Certificate (TC) and report cards are generally
                  required for admission.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="personalized-counseling">
          <h2>Personalized Counseling and School Selection</h2>
          <p>
            Our expert counselors assist in selecting the right school based on
            your child’s academic needs, long-term goals, and location
            preferences.
          </p>
          <ul>
            <li>
              <strong>School Matching:</strong> We help match students with
              schools that align with their academic profile, career goals, and
              personal preferences.
            </li>
            <li>
              <strong>Interview Preparation:</strong> For schools that require
              interviews, we offer mock interview sessions and tips to help
              students excel.
            </li>
          </ul>
        </div>

        <div className="application-support">
          <h2>Application and Documentation Support</h2>
          <p>
            Navigating the admission process requires understanding the
            necessary documents and application timelines. Our counseling
            services ensure that students have all the required documents and
            submit applications on time.
          </p>
          <p>
            We provide ongoing support, including following up with schools on
            the application status and collaborating with the admission office,
            so students can focus on their preparation.
          </p>
        </div>

        <div className="benefits-counseling">
          <h2>Benefits of Admission Counseling</h2>
          <ul>
            <li>
              <strong>Informed Decision-Making:</strong> We guide parents and
              students to make educated choices between MP and CBSE schools.
            </li>
            <li>
              <strong>Streamlined Process:</strong> With our help, students can
              navigate documentation, deadlines, and requirements efficiently.
            </li>
            <li>
              <strong>Better Fit:</strong> Our personalized counseling ensures
              the chosen school aligns with the student’s learning style and
              future aspirations.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Admissions;
