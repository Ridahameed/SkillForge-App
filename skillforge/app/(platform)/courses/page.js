import Link from "next/link";
export default async function CoursesPage() {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const data = await response.json();

  const myCourses = data.map((item) => ({
    id: item.id,
    title: item.title,
    instructor: `Instructor ${item.userId}`,
    progress: Math.floor(Math.random()* 100),
    lastAccessed: `${Math.floor(Math.random()* 10)} days ago`,
    image: '📘'
  }));

  return (
    <div className="courses-wrapper">
      <header className="page-header">
        <h1>My Learning Journey</h1>
        <p>You have completed {myCourses.length} lessons this week. Keep it up!</p>
      </header>

      <div className="courses-grid">
        {myCourses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-card-top">
              <span className="course-icon">{course.image}</span>
              <span className="last-accessed">{course.lastAccessed}</span>
            </div>

            <div className="course-card-body">
              <h3>{course.title}</h3>
              <p> by {course.instructor}</p>
            </div>

            <div className="course-card-footer">
              <div className="progress-label">
                <span>Progress: {course.progress}%</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${course.progress}%` }}></div>
              </div>
              <Link href={`/courses/${course.id}`} className="btn-continue">{course.progress > 0 ? "Continue Learning" : "Start Learning"}</Link>

            </div>



          </div>

        ))}
      </div>
    </div>
  );
}