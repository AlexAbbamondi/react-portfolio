import React from "react";
import "./Home.css";
import headshot from "../../images/headshot.jpg";
import frontend from "../../images/frontend.jpg";
import backend from "../../images/backend.jpg";
import design from "../../images/design.jpg";
import ServicesCard from "../services/ServicesCard";

const Home = () => {
  return (
    <div className="container-fuild">
      <div className="container about-me-container">
        <div className="row">
          <div className="col-sm-12 col-md-6 mt-5 mb-5">
            <img
              className="headshot center-image"
              src={headshot}
              alt="headshot"
            />
          </div>
          <div className="col-sm-12 col-md-6 ml-5 mb-5 mt-5 about-me">
            <h1>About Me</h1>
            <p>
              I am an outgoing, hardworking, and diligent person ready for new
              opportunities in the field of web development. I have received a
              bachelor's degree in psychology, with a minor in sociology from
              Florida Atlantic University. Furthermore, I have received my
              associate's degree in web development from Broward College. I
              furthered my education by completing an online full stack boot
              camp. I have completed an internship with Essentials Spa of Davie
              by designing their website utilizing WordPress.
            </p>
            <p>
              Currently, I am employed as a web developer for Banyan Treatment
              Center utilizing WordPress as the main CMS. I am leaving this
              position to do a full time boot camp through the University of
              Central Florida to gain even more knowledge and further my career
              opportunities. Ultimately I want to be a front end React developer
              and eventually a full stack developer. The skills I am most
              comfortable with are HTML, CSS, JavaScript, Bootstrap, React,
              sass, and MySQL. I also have knowledge of Express, Node, MongoDB,
              C#, Java, MSSQL, and Redux.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid services">
          <div className="row services-section">
            <div className="col service-card">
            <ServicesCard title="Front End" image={frontend} alt="front end" text="HTML, CSS, JavaScript, jQuery, Bootstrap, Materialize, Reactstrap, React, Redux, Sass"/>
            </div>
            <div className="col service-card">
            <ServicesCard title="Back End" image={backend} alt="back end" text="Node, Express, C#, java, MongoDB/Mongoose, MySQL/Sequelize, MSSQL"/>
            </div>
            <div className="col service-card">
            <ServicesCard title="Programs/IDEs" image={design} alt="design" text="VS Code, Visual Studeio, ReSharper, GitHub, WordPress, Photoshop, WooCommerce"/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
