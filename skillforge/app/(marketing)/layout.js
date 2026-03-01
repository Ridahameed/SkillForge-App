import Link from "next/link";

export default function MarketingLayout({ children }) {
  return (
    <div className="marketing-wrapper">
      <nav className="top-nav">
        <div className="nav-logo">SkillForge</div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/dashboard" className="nav-cta">Login</Link>
        </div>
      </nav>

      <main>{children}</main>
      <footer className="footer">
        © 2026 SkillForge - Build your future with us .
      </footer>
    </div>
  );
}