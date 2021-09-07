import React from "react";
import PortfolioCard from "../portfolioCards/PortfolioCard";

import adventures from "../../images/on-the-go-adventures.PNG";
import inMarket from "../../images/inMarket.PNG";
import passwordGenerator from "../../images/password-generator.PNG";
import weatherDashboard from "../../images/weather-dashboard.PNG";
import workDayScheduler from "../../images/work-day-scheduler.PNG";
import techBlog from "../../images/tech-blog.PNG";
import noteTaker from "../../images/note-taker.PNG";
import portfolio from "../../images/portfolio.PNG";
import teamGenerator from "../../images/team-generator.PNG";
import workoutTracker from "../../images/workout-tracker.PNG";
import frequencies from "../../images/frequencies.PNG";

import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="container">
      <div className="row mt-5 mb-4 ">
        <div className="portfolio-title">
          <h1>Portfolio</h1>
        </div>
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

        <PortfolioCard
          title="Note Taker"
          stack="HTML/CSS/JavaScript/Node/Express"
          link="https://pacific-wildwood-94323.herokuapp.com/"
          github="https://github.com/AlexAbbamondi/note-taker"
          img={noteTaker}
        />
        <PortfolioCard
          title="Flex Box Portfolio"
          stack="HTML/CSS"
          link="https://alexabbamondi.github.io/UCF-Portfolio/"
          github="https://github.com/AlexAbbamondi/UCF-Portfolio"
          img={portfolio}
        />
        <PortfolioCard
          title="Team Profile Generator"
          stack="HTML/CSS/Bootstrap/JavaScript/Node"
          link="https://github.com/AlexAbbamondi/team-profile-generator"
          github="https://github.com/AlexAbbamondi/team-profile-generator"
          img={teamGenerator}
        />
        <PortfolioCard
          title="Workout Tracker"
          stack="HTML/CSS/Handlebars/JavaScript/Node/Express/MongoDB"
          link="https://pacific-savannah-02343.herokuapp.com/"
          github="https://github.com/AlexAbbamondi/workout-tracker"
          img={workoutTracker}
        />
        <PortfolioCard
          title="Frequencies"
          stack="HTML/CSS/JavaScript/React/Node/Express/MongoDB"
          link="https://desolate-garden-53776.herokuapp.com/"
          github="https://github.com/RLAQUEA/final-project"
          img={frequencies}
        />
      </div>
    </div>
  );
};

export default Portfolio;
