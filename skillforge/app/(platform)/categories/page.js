import Link from "next/link";

export default function CategoriesPage() {
const categories = [
    { name: "Web Development", slug: "web-development", icon: "💻", color: "#e0f2fe" },
    { name: "Mobile Apps", slug: "mobile-apps", icon: "📱", color: "#fef3c7" },
    { name: "Data Science", slug: "data-science", icon: "📊", color: "#dcfce7" },
    { name: "UI/UX Design", slug: "ui-ux-design", icon: "🎨", color: "#f3e8ff" },
    { name: "Game Development", slug: "game-development", icon: "🎮", color: "#e0f7fa" },
    { name: "AI & Machine Learning", slug: "ai-machine-learning", icon: "🤖", color: "#fef9c3" },
  ];

  return (
    <div className="categories-page">
      <header>
        <h1>Browse by <br></br> Category</h1>
        <p>Explore all the different fields of study available in SkillForge.</p>
      </header>

      <div className="categories-grid">
        {categories.map((cat, i) => (
          <Link href={`/categories/${cat.slug}`} key={i} style={{ textDecoration: 'none' }}>
          <div key={i} className="category-item" style={{ backgroundColor: cat.color }}>
            <span className="cat-icon">{cat.icon}</span>
            <h3>{cat.name}</h3>
            <p>Explore courses in {cat.name}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}