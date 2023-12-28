import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {

  //Code to update the copyright year automatically
  let date =  new Date().getFullYear();

  return (
    <footer id="footer-wrapper">
      <h2 className="p-5">Affordable Websites for Small Businesses in Somerset, Devon & Cornwall</h2>

      <div id='footer' className='border-bottom'>
        <div>

          <NavLink to="/"><img alt="Rob Saunders Website Logo" src="./assets/images/rob-saunders-website-development-logo.png" /></NavLink>
          <p>{date} Copyright Rob Saunders</p>
          <NavLink to="/privacy-policy" className='linkOnPurple'>Privacy Policy</NavLink>
        </div>

        <div>

          <strong>Where Next?</strong>

          <ul className="nav flex-column">

            <li className="nav-item">
              <NavLink to="/budget-web-design" className="nav-link footer-nav">Affordable Website Design</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/projects" className="nav-link footer-nav">Website Portfolio</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link footer-nav">Contact</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/#dev-skills" className="nav-link footer-nav">Website Development</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/#why-choose-rob" className="nav-link footer-nav">Why Choose Rob?</NavLink>
            </li>

          </ul>
        </div>
      </div>

      <div className='mt-3'>
        <strong>Web Design Locations</strong>

        <ul id="footer-locations" className="nav">

          <li className="nav-item">
            <NavLink to="/budget-web-design-taunton" className="nav-link footer-nav">Web Design Taunton</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/budget-web-design-exeter" className="nav-link footer-nav">Web Design Exeter</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/budget-web-design-bristol" className="nav-link footer-nav">Web Design Bristol</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/budget-web-design-plymouth" className="nav-link footer-nav">Web Design Plymouth</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/budget-web-design-devon" className="nav-link footer-nav">Web Design Devon</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/budget-web-design-cornwall" className="nav-link footer-nav">Web Design Cornwall</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/budget-web-design-somerset" className="nav-link footer-nav">Web Design Somerset</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/budget-web-design-chard" className="nav-link footer-nav">Web Design Chard</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/budget-web-design-truro" className="nav-link footer-nav">Web Design Truro</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/budget-web-design-barnstaple" className="nav-link footer-nav">Web Design Barnstaple</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/budget-web-design-ilminster" className="nav-link footer-nav">Web Design Ilminster</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/budget-web-design-axminster" className="nav-link footer-nav">Web Design Axminster</NavLink>
          </li>

        </ul>
      </div>
    </footer>
  );
};

export default Footer;
