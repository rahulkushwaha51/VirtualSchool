import Header from "../general/Header";
import "./Program.css";

const Programs = () => {
  return (
    <>
      <Header icon={"fa fa-handshake-angle"} title={"School intern programs and Channel Partner"} />
      <div className="programs-container">
        {/* School Internship Program Section */}
        <div className="sip-section">
          <h1>School Internship Program (SIP)</h1>
          <p>
            A school internship program for teachers involves providing aspiring
            or new teachers with practical classroom experience and professional
            development.
          </p>
          <ul>
            <li>
              <strong>Classroom Experience:</strong> Interns work alongside
              experienced teachers to gain hands-on experience in lesson
              planning, classroom management, and teaching.
            </li>
            <li>
              <strong>Mentorship:</strong> Interns receive guidance and feedback
              from experienced educators to improve their teaching skills and
              techniques.
            </li>
            <li>
              <strong>Professional Development:</strong> Interns participate in
              workshops, training sessions, and educational seminars to enhance
              their teaching practices and stay updated on educational trends.
            </li>
            <li>
              <strong>Observation and Reflection:</strong> Interns observe
              experienced teachers and reflect on their own teaching practices
              to identify areas for improvement.
            </li>
            <li>
              <strong>Integration into School Culture:</strong> Interns learn
              about school operations, policies, and the overall educational
              environment to better integrate into their future roles as
              teachers.
            </li>
          </ul>
          <blockquote>
            A school internship program provides aspiring educators with
            hands-on classroom experience, mentorship, and professional
            development opportunities.
          </blockquote>
        </div>

        {/* Channel Partner Section */}
        <div className="channel-partner-section">
          <h1>Channel Partner Program</h1>
          <p>
            Our Channel Partner Program provides services to coaching
            institutes, hostels, and schools. We offer various plans to suit the
            needs of our partners.
          </p>
          <ul>
            <li>
              <strong>B2B Program:</strong> A program tailored to
              business-to-business collaboration for educational service
              providers.
            </li>
            <li>
              <strong>B2B Training:</strong> We provide specialized training for
              partners to equip them with the necessary skills for educational
              services.
            </li>
            <li>
              <strong>Incentive Program:</strong> Reward schemes for partners
              based on their performance and contribution.
            </li>
            <li>
              <strong>Franchise Plan:</strong> A structured plan for partners
              interested in expanding our services through franchising.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Programs;
