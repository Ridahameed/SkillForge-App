import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-wrapper">
      <div className="not-found-content">
        <h1 className="not-found-code">404</h1>
        <div className="not-found-divider"></div>
        <div className="not-found-text">
          <h2>Page Not Found</h2>
          <p>The page you're looking for doesn't exist or has been moved.</p>
          <Link href="/" className="btn-back-home">
            Return to SkillForge
          </Link>
        </div>
      </div>
    </div>
  );
}