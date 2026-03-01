import Link from "next/link";

export default async function courseIdpage({params}) {
  return (

    <div>
        <h2>Course Details</h2>
        Course ID: {params.courseId}
        <br></br>
        <br></br>
        <Link href={`/courses/${params.courseId}/lessons/1`} className="lesson-link">
          View Lesson 1
        </Link>
    </div>
  )
}
