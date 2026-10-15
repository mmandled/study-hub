// src\components\Subjects.jsx
import { Link } from "react-router-dom";
import SubjectCard from "./SubjectCard.jsx";

export default function Subjects() {
  return (
    <main className="container">
      <Link to="/" className="back-link">
        ← Back to home
      </Link>

      <h1>My Subjects</h1>

      <p className="intro">
        These are my subjects that Im working this semester.
      </p>

      <section className="card-grid">
        <SubjectCard
          title="Application Development"
          description="IS 3103 10:00am - 12:30pm"
        />

        <SubjectCard
          title="Object-Oriented Programming"
          description="CIS 2103 3:00pm - 5:30pm"
        />

        <SubjectCard
          title="Reading Philippine History"
          description="GE-RPH - 4:30pm - 6:00pm"
        />

        <SubjectCard
          title="Science Technology and Society"
          description="GE-STS 1:30pm - 3:00pm"
        />

        <SubjectCard
          title="Art Appreciation"
          description="GE-ART 1:30pm - 3:00pm"
        />

        <SubjectCard
          title="Web Development II"
          description="CIS 2102 7:30am - 10:00am"
        />

         <SubjectCard
          title="Evaluation of Business Performance"
          description="IS 4103 10:30am - 1:30pm"
        />

        <SubjectCard
          title="Collection Management"
          description="IS 3104 7:30am - 10:00am"
        />
      </section>
    </main>
  );
}