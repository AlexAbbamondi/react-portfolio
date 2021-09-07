import React from "react";
import "./ServicesCard.css"

const Services = (props) => {
  return (
        <div className="col text-center d-flex justify-content-center mb-3">
          <div class="card" >
            <img class="card-img-top img-size" src={props.image} alt={props.alt} />
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <p class="card-text">
                {props.text}
              </p>
            </div>
          </div>
        </div>
  );
};

export default Services;
