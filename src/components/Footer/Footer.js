import React from 'react';
import { NavLink } from 'react-router-dom';
import { Locations } from '../../Routers/Locations';
import Accordion from '../Accordion/Accordion'; // Adjust the import path based on your file structure


function Footer() {

  //Code to update the copyright year automatically
  let date =  new Date().getFullYear();



  return (
    <footer id="footer-wrapper">
      <h2 className="p-5">Affordable Websites for Small Businesses in Somerset, Devon & Cornwall</h2>
      <img id='circle' alt="Squarespace Circle membership logo" src="./assets/images/CircleMemberColour.png" />

      <div id='footer' className='border-bottom'>
        <div>

          <NavLink to="/"><img id="footer-logo" alt="Rob Saunders Website Logo" src="./assets/images/rob-saunders-website-development-logo.png" /></NavLink>
          <p>{date} Copyright Rob Saunders</p>
          <NavLink to="/privacy-policy" className='linkOnPurple'>Privacy Policy</NavLink>
        </div>

        <div>

          <strong>Where Next?</strong>

          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink to="/squarespace-web-designer-uk" className="nav-link footer-nav">Squarespace Web Design</NavLink>
            </li>

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

      <div>
      <Accordion title="Web Design Locations">
      <div className='mt-3'>

        <ul id="footer-locations" className="nav">
          {Locations.map(e => {
            return(

              <li key={e} className="nav-item">
                <NavLink to={`/budget-web-design-${e}`} className="nav-link footer-nav">Web Design {e}</NavLink>
              </li>


            )
          })}

        </ul>
      </div>
      </Accordion>
    </div>

    </footer>
  );
};

export default Footer;
