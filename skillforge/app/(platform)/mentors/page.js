import { mentors } from "./data";
import Link from "next/link";
export default function MentorsPage() {
  
  return (
    <div>
      <header className="page-header">
        <h1>Connect with Mentors</h1>
        <p>Expert guidance is just a message away. Level up your skills with 1-on-1 support.</p>
      </header>

      <div className="mentors-grid">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="mentor-card">
            <div className="mentor-header">
              <div className="mentor-avatar">{mentor.name.charAt(0)}</div> {/* it is going to take first letter e.g if the name Rida it will going to take R*/}
              <div style={{ backgroundColor: mentor.statusColor }} className="status-indicator">
                {mentor.status}
              </div>
            </div>
            {/* Mentor Information */}
            <div className="mentor-body">
              <h3>{mentor.name}</h3>
              <p className="mentor-role">{mentor.role}</p>
              <p className="mentor-bio">{mentor.bio}</p>
              
              <div className="expertise-tags">
                {mentor.expertise.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <Link href={`/mentors/${mentor.id}`} className="btn-primary-mentor">
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}