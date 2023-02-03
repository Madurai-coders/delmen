import React,{useState} from "react";


function Subcard(props) {
  const[read,setRead] =useState(false)

  return (
    <>
      <div className="row">
        <div className="col-xl-6 col-md-6 col-sm-12">
          <div className="card_1">
            <h3 className="card-title mt-5">{props.title}</h3>
            <p className="card-description mt-3">{props.description}</p>
            
            <p class="card-subdescription">{props.subdescription}</p>
            {read &&
            <p class="card-detail">{props.detail}</p>}
            <span className="card-readmore" onClick={()=>setRead(!read)}>{read ? props.Read : props.read}</span>
          </div>
        </div>
        <div className="col-xl-6 col-md-5 col-sm-12 col-10">
          <img src={props.img} className="img-fluid ms-5 card_img" alt="profile"></img>
        </div>
      </div>
    </>
  );
}

export default Subcard;
