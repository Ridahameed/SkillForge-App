export default function lessonPage({params}) {
  return (
    <>
    <div>
        <h2>Lesson Details</h2>
        Lesson ID: {params.lessonId}
    </div>
    </>
  )
}
