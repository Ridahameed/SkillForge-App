import Link from 'next/link';

export default function PlatformLayout({children}) {
  return (
    <div className='platform-container'>
      <aside className='sidebar'>
        <div className='sidebar-logo'>SkillForge</div>
        <nav className='sidebar-nav'>
          <Link href="/" className='nav-link'>Home</Link>
          <Link href="/dashboard" className='nav-link'>Dashboard</Link>
          <Link href="/courses" className='nav-link'>Courses</Link>
          <Link href="/categories" className='nav-link'>Categories</Link>
          <Link href="/mentors" className='nav-link'>Mentors</Link>
          <Link href="/paths" className='nav-link'>Paths</Link>
          <Link href="/blog" className='nav-link'>Blog</Link>
        </nav>
      </aside>
      <main className='main-content'>{children}</main>
    </div>
  )
}
