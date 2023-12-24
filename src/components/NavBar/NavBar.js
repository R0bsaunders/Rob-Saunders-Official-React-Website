import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <header id="main-header">

      <nav className="navbar fixed-top navbar-expand-lg navbar-light customNav">
        <NavLink to='/' className="navbar-brand"><img id="logoImg" src="/assets/images/rob-saunders-logo2.png" alt="Purple and white logo for Rob Saunders" /></NavLink>

        <div id="mobile">
          <button aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav mr-auto">

              <li className="nav-item">
                <NavLink to='/budget-web-design' className="nav-link">Web Design</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to='/projects' className="nav-link">Projects</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to='/contact' className="nav-link">Contact</NavLink>
              </li>


            </ul>
          </div>
        </div>
      </nav>
  </header>
  );
};

export default NavBar;