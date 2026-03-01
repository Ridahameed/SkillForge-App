'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function dashboardError({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="error-wrapper">
      <div className="error-content">
        <span className="error-icon">⚠️</span>
        <h1>Something went wrong!</h1>
        <p>We encountered an unexpected error. Don't worry, your progress is safe.</p>
        
        <div className="error-actions">
          <button className="btn-reset" onClick={() => reset()}>
            Try Again
          </button>
          <a href="/" className="btn-home">
            Go to Home
          </a>
        </div>
        
        {/* Optional: Show error message only in development */}
        <div className="error-debug">
          <code>{error.message}</code>
        </div>
      </div>
    </div>
  );
}