

export default function ProductCard(props) {
  return (
    <div className="card w-96 bg-base-100 shadow-lg">
      <figure>
        <img className="w-100" src={props.img} alt={props.name} />
      </figure>
      <div className="card-body self-center">
        <h2 className="card-title" style={{alignSelf:"center"}}>{props.name}</h2>
        <p className="self-start">{props.description}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">View</button>
          <button className="btn  btn-info">Edit</button>
          <button className="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  );
}
