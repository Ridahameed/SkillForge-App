export default function AboutPage() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About SkillForge</h1>
        <p>
          We are dedicated to bridging the gap between learning and professional mastery. 
          Our platform helps you forge a path toward your dream career.
        </p>
      </section>

      <section className="mission-section">
        <div className="mission-card">
          <h2>Our Mission</h2>
          <p>To provide accessible, structured, and mentored learning paths for everyone.</p>
        </div>
        <div className="mission-card">
          <h2>Our Vision</h2>
          <p>A world where skills are the primary currency of the global economy.</p>
        </div>
      </section>
    </div>
  );
}