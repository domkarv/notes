export default function Card(arg) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{arg.name}</h2>
        <img className="circle-img" src={arg.imageSource} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{arg.mob}</p>
        <p className="info">{arg.email}</p>
      </div>
    </div>
  );
}
