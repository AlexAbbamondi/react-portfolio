import React from "react";
import PortfolioCard from "../portfolioCards/PortfolioCard";

import adventures from "../../images/on-the-go-adventures.jpg";
import inMarket from "../../images/inMarket.jpg";
import passwordGenerator from "../../images/password-generator.jpg";
import weatherDashboard from "../../images/weather-dashboard.jpg";
import workDayScheduler from "../../images/work-day-scheduler.jpg"
import techBlog from "../../images/tech-blog.jpg"

const Portfolio = () => {
  return (
    <div className="container">
      <div className="row mt-5 mb-4">
        <PortfolioCard
          title="On The Go Adventures"
          stack="HTML/CSS/JavaScript"
          link="https://cristianc707.github.io/On-The-Go-Adventures/"
          github="https://github.com/CristianC707/On-The-Go-Adventures"
          img={adventures}
        />
        <PortfolioCard
          title="inMarket"
          stack="HTML/CSS/Handlebars/JavaScript/Node/Express"
          link="https://fierce-waters-10639.herokuapp.com/"
          github="https://github.com/RLAQUEA/InMarket-Real-Estate-Search-App"
          img={inMarket}
        />
        <PortfolioCard
          title="Password Generator"
          stack="HTML/CSS/JavaScript"
          link="https://alexabbamondi.github.io/password-generator/"
          github="https://github.com/AlexAbbamondi/password-generator"
          img={passwordGenerator}
        />
        <PortfolioCard
          title="Weather Dashboard"
          stack="HTML/Boostrap/JavaScript"
          link="https://alexabbamondi.github.io/weather-dashboard/"
          github="https://github.com/AlexAbbamondi/weather-dashboard"
          img={weatherDashboard}
        />
        <PortfolioCard
          title="Work Day Scheduler"
          stack="HTML/Bootstrap/jQuery"
          link="https://alexabbamondi.github.io/work-day-scheduler/"
          github="https://github.com/AlexAbbamondi/work-day-scheduler"
          img={workDayScheduler}
        />
        <PortfolioCard
          title="Tech Blog"
          stack="HTML/CSS/Handlebars/JavaScript/Node/Express"
          link="https://fathomless-waters-10773.herokuapp.com/"
          github="https://github.com/AlexAbbamondi/MVC-Tech-Blog"
          img={techBlog}
        />
      </div>
    </div>
  );
};

export default Portfolio;
