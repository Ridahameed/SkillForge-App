// app/(platform)/layout.js
export default function PlatformLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar - Fixed width */}
      <aside className="w-64 bg-gray-100 p-4 border-r">
        <nav>
          <h2 className="font-bold mb-4">SkillForge Platform</h2>
          <ul className="space-y-2">
            <li><a href="/dashboard" className="hover:text-blue-600">Dashboard</a></li>
            <li><a href="/courses" className="hover:text-blue-600">Courses</a></li>
            <li><a href="/mentors" className="hover:text-blue-600">Mentors</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}