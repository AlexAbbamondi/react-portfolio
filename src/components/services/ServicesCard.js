import React from "react";
import "./ServicesCard.css"

const Services = (props) => {
  return (
        <div className="col text-center d-flex justify-content-center mb-3">
          <div class="card" style={{ width: "21rem" }}>
            <img class="card-img-top img-size" src={props.image} alt={props.alt} />
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
  );
};

export default Services;
