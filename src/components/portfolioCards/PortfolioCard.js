import React from 'react'
import "./PortfolioCard.css"

const PortfolioCard = (props) => {
    return (
        <div className="col d-flex justify-content-center mb-5">
            <a href={props.link}>
            <div className="works">
              <img src={props.img} alt="" className="work-img"/>
              <div className="works-title">
                <h3>{props.title}</h3>
                <p>{props.stack}</p>
                <button><a href={props.github}>Github</a></button>
              </div>
            </div>
          </a>
        </div>
        
    )
}

export default PortfolioCard
