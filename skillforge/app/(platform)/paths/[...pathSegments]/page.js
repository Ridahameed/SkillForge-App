import { paths } from "../data";
export default function pathSegmentsPage({ params }) {
  return (
    <div>
      <h1>Path Segments Page</h1>
      <p>Path Segments: {params.pathSegments.join(' / ')}</p>
      <h2>Dynamic Content Based on Path Segments</h2>
      <p>This page can render different content based on the path segments provided in the URL.</p>
        <h3>Example Paths:</h3>
        <ul>
          {paths.map((path) => (
            <li key={path.id}>
              <strong>{path.title}</strong> - {path.description}
            </li>
          ))}
        </ul>
    </div>
  )
}
