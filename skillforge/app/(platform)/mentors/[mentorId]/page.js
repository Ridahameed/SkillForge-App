import { mentors } from "../data";
export default function mentorIdPage({ params }) {
    const mentor = mentors.find((m) => m.id === Number(params.mentorId));
    if (!mentor){
        return <h1>Mentor not found</h1>
    }

  return (
    <div style={{ padding: "2rem" }}>
        <h1>{mentor.name}</h1>
        <hr></hr>
        <p>{mentor.role}</p>
        <p>{mentor.bio}</p>
        <hr></hr>
        <h3>Expertise:</h3>
        <ul>
            {mentor.expertise.map((skill, i) => (   
                <li key={i}>{skill}</li>
            ))}
        </ul>
    </div>
  )
}
