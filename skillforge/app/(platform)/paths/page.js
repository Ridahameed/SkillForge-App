import { paths } from "./data";
import Link from "next/link";
export default function PathsPage() {
  
  return (
    <div>
      <header className="page-header">
        <h1>Learning Paths</h1>
        <p>Follow a structured roadmap designed by industry experts to reach your career goals.</p>
      </header>

      <div className="paths-list">
        {paths.map((path) => (
          <div key={path.id} className="path-card">

            {/*Card Icon*/}
            <div className="path-icon-container">
              <span className="path-emoji">{path.icon}</span>
            </div>
            

            <div className="path-content">
              
              <div className="path-info-top">
                <span className="difficulty-badge">{path.difficulty}</span>
                <span className="path-meta">{path.courses} Courses • {path.duration}</span>
              </div>
              <h3>{path.title}</h3>
              <p>{path.description}</p>
            </div>

            <Link href={`/paths/${path.id}`} className="btn-primary-path">View Path</Link>
          </div>
        ))}
      </div>
    </div>
  );
}