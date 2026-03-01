import styles from "./category.module.css";
import Link from "next/link";

  const categories = [
    { name: "Web Development", slug: "web-development", description: "Learn to build modern websites using React, Next.js, and Node." },
  { name: "Mobile Apps", slug: "mobile-apps", description: "Build cross-platform apps with React Native and Flutter." },
    { name: "Data Science", slug: "data-science", description: "Analyze and interpret complex data using Python, R, and SQL." },
    { name: "UI/UX Design", slug: "ui-ux-design", description: "Design beautiful and functional user interfaces and experiences." },
    { name: "Game Development", slug: "game-development", description: "Create interactive games using Unity, Unreal Engine, or other platforms." },
    { name: "AI & Machine Learning", slug: "ai-machine-learning", description: "Develop intelligent systems that can learn and adapt to new information." },
  ];

export default async function categoryPage({params}) {
    const { categorySlug}  = await params;

    const category = categories.find((c) => c.slug === categorySlug);

     if (!category) {
        return <h1>Category not found</h1>;
     }
  return (
    <div className={styles.categoryPage}>
      <h1>Explore: {category.name}</h1>
      <p>{category.description}</p>
      
      <hr />
      
      <h3>Available Subcategories</h3>
      <ul>
        <li><Link href={`/categories/${categorySlug}/basics`} className={styles.link}>Introduction to {category.name}</Link></li>
        <li><Link href={`/categories/${categorySlug}/advanced`} className={styles.link}>Advanced Concepts</Link></li>
      </ul>
    </div>
  );
}