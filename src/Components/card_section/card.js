function subcard(props) {
  return (
    <>
      <div className="row">
        <div className="col-xl-6 col-md-6 col-sm-12">
          <div className="card_1">
            <h3 className="card-title">{props.title}</h3>
            <p className="card-description">{props.description}</p>
            <p class="card-description">{props.subdescription}</p>
          </div>
        </div>
        <div className="col-xl-6 col-md-5 col-sm-12">
          <img src={props.img} className={props.class} alt="profile"></img>
        </div>
      </div>
    </>
  );
}

export default subcard;
