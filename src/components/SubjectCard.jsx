// src\components\SubjectCard.jsx
export default function SubjectCard({ title, description }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}