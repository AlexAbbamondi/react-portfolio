import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (

        <footer>
          <div className="text-center mb-2">
            <a href="https://github.com/AlexAbbamondi" className="icons"><FaGithub size={48} /></a>
            <a href="https://www.linkedin.com/in/alexabbamondi/" className="icons"><FaLinkedinIn size={48} /></a>
          </div>
          <p className="text-center text-white">Copyright 2021 Alex Abbamondi</p>
        </footer>
  );
};

export default Footer;
