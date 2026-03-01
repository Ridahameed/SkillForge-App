import Link from 'next/link';
import { posts } from './data';
export default function BlogPage() {
  
  return (
    <div>
      <header>
        <h1>SkillForge Blog</h1>
        <p>Insights, tutorials, and stories from the community.</p>
      </header>

      <div className="blog-feed">
        {posts.map((post) => (
          <article 
            key={post.id} 
            className='blog-card'
          >

            <div className="blog-card-content">
              <div className="blog-meta">
                <span className="blog-category">{post.category}</span>
                <span className="blog-dot">•</span>
                <span>{post.date}</span>
              </div>
              
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              
              <div className="blog-footer">
                <span className="read-time">{post.readTime} read</span>
                <Link href={`/blog/${post.year}/${post.month}/${post.slug}`}>
                  Read Full Article →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}