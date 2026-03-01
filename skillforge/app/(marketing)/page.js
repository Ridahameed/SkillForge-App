import Link from "next/link";

export default function HomePage() {
  return (
    <div className="home-container">
      {/* Hero section / Main section......(Lading page) */}
      <section className="hero">
        <h1>Master New Skills with SkillForge</h1>
        <p>The ultimate platform to track your learning journey and connect with mentors.</p>

        <div className="home-buttons">
          <Link href="/dashboard" className="btn-primary">Go to Dashboard</Link>
          <Link href="/pricing" className="btn-secondary">See pricing</Link>
        </div>
      </section>
      {/*Feachers section*/}
      <h2 className="main-h2">Why Choose SkillForge?</h2>
      <section className="features">
        <div className="feature-card">
          <h3>Personalized Paths</h3>
          <p>We build a roadmap tailored to your specific learning goals and pace.</p>
        </div>
        <div className="feature-card">
          <h3>Mentorship</h3>
          <p>Connect with experienced mentors in your field of interest.</p>
        </div>
      </section>

    </div>
  )
}
