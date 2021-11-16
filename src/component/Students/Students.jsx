import Score from "../Score/Score";

const Student = (props) => {
  const student = props.student
  return ( 
    <>
    <div>
      <h3> {student.name} </h3>
      <h3> {student.bio} </h3>
      {student.scores.map((score, idx) =>
        <Score 
        key={idx}
        score={score}
        />
      )}
    </div>
    </>
  );
}

export default Student;