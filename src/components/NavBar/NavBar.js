import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import styled, {keyframes} from "styled-components";

function NavBar() {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleMenu = () => {
      setIsExpanded(!isExpanded);
    };

    const menuItems = [
        {
            path: '/squarespace-web-designer-uk',
            label: 'Squarespace Websites'
        },
        {
            path: '/budget-web-design',
            label: 'Affordable Web Design'
        },
        {
            path: '/projects',
            label: 'Portfolio'
        },
        {
            path: '/contact',
            label: 'Contact'
        },
    ];

  return (
    <header id="main-header" className='container-fluid'>
      <nav className={`${isExpanded ? 'navbar-white' : ''} navbar fixed-top navbar-expand-lg navbar-light customNav`}>
        <NavLink to='/' className="navbar-brand"><img id="logoImg" src="/assets/images/rob-saunders-logo2.png" alt="Purple and white logo for Rob Saunders" /></NavLink>
        <Button onClick={toggleMenu} aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
          <Icon isExpanded={!isExpanded}>☰</Icon>
          <Icon isExpanded={isExpanded}>×</Icon>
        </Button>

        <div id="navbarSupportedContent" className="navbar-collapse collapse">
            <Menu className="navbar-nav me-auto ">
                {menuItems.map((item, index) => (
                    <MenuItem key={item.path} delay={index * 150}>
                        <StyledNavLink to={item.path} className={'nav-link'} activeClassName="active">
                            {item.label}
                        </StyledNavLink>
                    </MenuItem>
                ))}
            </Menu>
        </div>
      </nav>
  </header>
  );
}
const slideInBounce = keyframes`
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    60% {
        transform: translateY(30%);
        opacity: 1;
    }
    80% {
        transform: translateY(-20%);
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
    
`;

const StyledNavLink = styled(NavLink)`
  display: block; /* Make the NavLink take full width */
  color: inherit; /* Inherit the color for consistency */
  text-decoration: none; /* Remove underline */
  
  &.active {
    color: var(--brandSkyBlue) !important; /* Change the color of the active link */
      transform: scale(1.1);
  }
`;

const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    list-style: none;
    padding: 0;
    margin: 0;
`;

const MenuItem = styled.li`
    margin: 5px 0;
    opacity: 0;
    animation: ${slideInBounce} 2s forwards;
    animation-delay: ${({ delay }) => delay}ms;
`;

const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Icon = styled.span`
    position: absolute;
    color: var(--brandColor);
    font-size: 50px;
    transition: opacity 0.3s, transform 0.5s;
    opacity: ${(props) => (props.isExpanded ? 1 : 0)};
    transform: ${(props) => (props.isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)')};
`;

export default NavBar;