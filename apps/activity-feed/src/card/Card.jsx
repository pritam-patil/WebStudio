


function Card({ title, desc, time }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{desc}</p>
      <p><small>{time}</small></p>
    </div>
  );
}

export default Card;