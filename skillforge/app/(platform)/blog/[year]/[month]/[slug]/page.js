import { posts } from "../../../data";

export default function BlogPostPage({ params }) {
  const post = posts.find(
    (p) => p.slug === params.slug && 
           p.year === params.year && 
           p.month === params.month
  );

  if (!post) return <h1>Post not found!</h1>;

  return (
    <div className="blog-post-wrapper">
      <span className="blog-category">{post.category}</span>
      <h1>{post.title}</h1>
      <p>{post.date} • {post.readTime} read</p>
      <p>{post.content}</p>
    </div>
  );
}
