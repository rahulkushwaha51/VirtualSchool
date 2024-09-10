import Header from "../general/Header";
import "./IItJeeCounseling.css";

const Counseling = () => {
  return (
    <>
      <Header
        icon={"fa fa-graduation-cap"}
        title={"IIT/JOSAA/NEET/CLAT Counseling"}
      />
      <div className="counseling-container">
        {/* IIT Counseling Section */}
        <div className="counseling-section">
          <h1>IIT Counseling</h1>
          <p>
            IIT counseling is the process through which students who have
            qualified in the JEE Advanced exam are allocated seats in the Indian
            Institutes of Technology (IITs). The process is managed by the Joint
            Seat Allocation Authority (JoSAA) and involves several steps:
          </p>
          <ul>
            <li>
              <strong>Registration:</strong> Students register online on the
              JoSAA portal.
            </li>
            <li>
              <strong>Choice Filling:</strong> Candidates select their preferred
              IITs and courses.
            </li>
            <li>
              <strong>Seat Allocation:</strong> Based on JEE rank, preferences,
              and seat availability, seats are allocated in multiple rounds.
            </li>
            <li>
              <strong>Seat Acceptance:</strong> Students confirm their seat by
              paying a fee and uploading required documents.
            </li>
            <li>
              <strong>Reporting:</strong> Final reporting at the allocated IIT
              for admission confirmation.
            </li>
          </ul>
        </div>

        {/* JoSAA Counseling Section */}
        <div className="counseling-section">
          <h1>JoSAA Counseling</h1>
          <p>
            JoSAA (Joint Seat Allocation Authority) counseling allocates seats
            to candidates in IITs, NITs, IIITs, and other GFTIs based on their
            JEE Main and JEE Advanced ranks. The process includes:
          </p>
          <ul>
            <li>
              <strong>Registration:</strong> Candidates register on the JoSAA
              portal.
            </li>
            <li>
              <strong>Choice Filling:</strong> Candidates list their preferred
              institutes and courses.
            </li>
            <li>
              <strong>Seat Allocation:</strong> Seats are allocated in multiple
              rounds based on ranks, preferences, and availability.
            </li>
            <li>
              <strong>Seat Acceptance:</strong> Candidates confirm their seat by
              paying a fee and submitting documents online.
            </li>
            <li>
              <strong>Reporting:</strong> Finally, students report to the
              allotted institute to complete the admission process.
            </li>
          </ul>
        </div>

        {/* NEET Counseling Section */}
        <div className="counseling-section">
          <h1>NEET Counseling</h1>
          <p>
            NEET counseling is the process through which candidates who qualify
            the NEET (National Eligibility cum Entrance Test) are allocated
            seats in medical and dental colleges across India. The process is
            conducted by different authorities for different types of seats:
          </p>
          <ul>
            <li>
              <strong>Registration:</strong> Candidates register online on the
              respective counseling portal.
            </li>
            <li>
              <strong>Choice Filling:</strong> Candidates select their preferred
              colleges and courses.
            </li>
            <li>
              <strong>Seat Allocation:</strong> Seats are allocated based on
              NEET rank, preferences, and seat availability in multiple rounds.
            </li>
            <li>
              <strong>Seat Acceptance:</strong> Candidates confirm their seat by
              paying a fee and uploading required documents.
            </li>
            <li>
              <strong>Reporting:</strong> Final reporting at the allotted
              college for admission confirmation.
            </li>
          </ul>
        </div>

        {/* CLAT Counseling Section */}
        <div className="counseling-section">
          <h1>CLAT Counseling</h1>
          <p>
            CLAT (Common Law Admission Test) counseling is the process for seat
            allocation in National Law Universities (NLUs) and other
            participating institutions based on the CLAT exam rank. The process
            involves:
          </p>
          <ul>
            <li>
              <strong>Registration:</strong> Candidates register for counseling
              on the official CLAT portal.
            </li>
            <li>
              <strong>Choice Filling:</strong> Candidates list their preferred
              NLUs and courses.
            </li>
            <li>
              <strong>Seat Allotment:</strong> Seats are allocated in multiple
              rounds based on CLAT rank, preferences, and seat availability.
            </li>
            <li>
              <strong>Seat Confirmation:</strong> Candidates confirm their seat
              by paying the counseling fee and submitting required documents.
            </li>
            <li>
              <strong>Upgradation/Locking:</strong> Candidates can either lock
              the seat or opt for upgradation in subsequent rounds.
            </li>
            <li>
              <strong>Final Admission:</strong> Reporting to the allotted NLU to
              complete the admission process.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Counseling;
