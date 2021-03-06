import React from "react";
import "./Resume.css"

const Resume = () => {
  return (
    <div className="container">
      <div className="row custom-row">
        <div className="col-sm-12 col mt-5 mb-5">
          <h4>
            Checkout my{" "}
            <a href="https://docs.google.com/document/d/1aZUAaEvVdBrhdOgA4bmfrq9Ie3ZA_7TtgihgdnW74b0/edit" target="_blank" rel="noreferrer">
              Resume
            </a>
          </h4>
          <br/>
          <p>Front End Proficiency:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>React</li>
            <li>Responsive Design</li>
          </ul>
          <br />
          <p>Back End Proficiency:</p>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
