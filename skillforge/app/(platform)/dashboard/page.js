"use client";
import { stats } from "./data";
import Link from "next/link";

export default function DashboardPage() {
  
  return (
    <div className="dashboard-wrapper">
      <header>
        <h1>Welcome back, Learner! 👋</h1>
        <p>Here is what's happening with your skills today.</p>
      </header>

      <section className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-info">
              <h3>{stat.label}</h3>
              <p className="stat-value">{stat.value}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Main Dashboard Content */}
      <div className="dashboard-main-grid">
        {/* Recent Activity */}
        <div className="activity-panel">
          <h2>Recent Activity</h2>
          <div className="activity-item">
            <div className="activity-dot">.</div>
            <p>Completed <strong>"Intro to React Hooks"</strong> in Master Next.js</p>
            <span>2 hours ago</span>
          </div>
          <div className="activity-item">
            <div className="activity-dot"></div>
            <p>Joined the <strong>UI/UX Design</strong> category</p>
            <span>Yesterday</span>
          </div>
        </div>

        <div className="promo-panel">
          <h3>Ready for a challenge?</h3>
          <p>Based on your interest in Web Dev, we recommend the <strong>Advanced CSS</strong> path.</p>
          <Link href="/paths">
            <button className="btn-primary-sm">View Path</button>
          </Link>
        </div>
      </div>
    </div>
  );
}