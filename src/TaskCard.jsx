import "./tasks.css"
export function TaskCard({ready}) {
  const cardStyles = { background: "#202020", color: "#fff", padding: "20px" };
  return (
    <div style={cardStyles}>
      <h1 style={{ fontWeight: "lighter" }}>Task</h1>
      <p className={ready ? 'green':'red'}> {ready===true?"Task Completed":"Task Incompleted"}</p>
    </div>
  );
}
