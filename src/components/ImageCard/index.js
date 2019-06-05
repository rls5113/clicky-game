import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card">
      <div className="img-container" onClick={()=>props.checkStatus(props.name)}>
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default ImageCard;
