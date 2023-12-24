import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {

  //Code to update the copyright year automatically
  let date =  new Date().getFullYear();

  return (
    <footer>

      <div>
        <NavLink to="/"><img alt="Rob Saunders Website Logo" src="./assets/images/rob-saunders-website-development-logo.png" /></NavLink>
        <p>{date} Copyright Rob Saunders</p>
        <NavLink to="/privacy-policy" className='linkOnPurple'>Privacy Policy</NavLink>
      </div>

      <div>

        <strong>Where Next?</strong>

        <ul className="nav flex-column">

          <li className="nav-item">
            <NavLink to="/projects" className="nav-link footer-nav">Projects</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/#skills" className="nav-link footer-nav">My Skills</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/contact" className="nav-link footer-nav">Contact</NavLink>
          </li>

        </ul>
      </div>
    </footer>
  );
};

export default Footer;
