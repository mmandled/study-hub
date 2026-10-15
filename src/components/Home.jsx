// src\components\Home.jsx
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleGetStarted() {
    navigate("/subjects");
  }

  return (
    <main className="container">
      <p className="label">MY STUDENT SPACE</p>

      <h1>Study Hub</h1>

      <p className="intro">
        A simple space to keep my subjects and learning goals together.
        One lesson at a time, one step forward.
      </p>

      <section className="panel">
        <h2>Welcome!</h2>

        <p>
          I am an Information Systems student learning how to build
          applications with React.
        </p>

        <button onClick={handleGetStarted}>
          View my subjects →
        </button>
      </section>
    </main>
  );
}