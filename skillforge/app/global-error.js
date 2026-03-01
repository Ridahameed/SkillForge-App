'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className="global-error-container">
          <div className="global-error-card">
            <span className="error-brand">SkillForge</span>
            <h1>A Critical Error Occurred</h1>
            <p>
              We've encountered a system-wide issue. Please try refreshing the app 
              or contact support if the problem persists.
            </p>
            <button 
              className="btn-global-reset" 
              onClick={() => reset()}
            >
              Restart Application
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}