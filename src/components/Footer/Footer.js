import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Footer() {

  //Code to update the copyright year automatically
  let date =  new Date().getFullYear();

  return (
    <footer>

      <div>
        <Link to="/#"><img alt="Rob Saunders Website Logo" src="./assets/images/rob-saunders-website-development-logo.png" /></Link>
        <p>{date} Copyright Rob Saunders</p>
        <Link to="/privacy-policy/#" className='linkOnPurple'>Privacy Policy</Link>
      </div>

      <div>

        <strong>Where Next?</strong>

        <ul className="nav flex-column">

          <li className="nav-item">
            <Link to="/projects/#" className="nav-link footer-nav">Projects</Link>
          </li>

          <li className="nav-item">
            <Link to="/#skills" className="nav-link footer-nav">My Skills</Link>
          </li>

          <li className="nav-item">
            <Link to="/contact/#" className="nav-link footer-nav">Contact</Link>
          </li>

        </ul>
      </div>
    </footer>
  );
};

export default Footer;
