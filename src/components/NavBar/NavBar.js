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
        <nav className={`${isExpanded ? 'navbar-white' : ''} navbar fixed-top navbar-expand-lg`}>
            <div className="container-fluid">
                <NavLink to='/' className="navbar-brand">
                    <div id="logoWrapper">
                        <img id='logoImg1' className="logoImg" src="/assets/images/rob-saunders-logo2.png" alt="Purple and white logo for Rob Saunders"/>
                        <img id='logoImg2' className="logoImg" src="/assets/images/home-symbol.png" alt="Purple and white logo for Rob Saunders"/>
                    </div>
                </NavLink>

                <Button onClick={toggleMenu} aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
                    <Icon isExpanded={!isExpanded}>☰</Icon>
                    <Icon isExpanded={isExpanded}>×</Icon>
                </Button>

                <div id="navbarSupportedContent" className="navbar-collapse collapse">
                    <Menu className="navbar-nav me-auto ">{
                        menuItems.map((item, index) => (
                            <MenuItem key={item.path} delay={index * 150} className={'nav-item'}>
                                <StyledNavLink to={item.path} className={'nav-link '} activeClassName="active">{item.label}</StyledNavLink>
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            </div>
        </nav>
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
  }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid purple;
        border-color: transparent;
        transition: border-color 0.5s ease;
        z-index: -1; /* Ensure the pseudo-element is behind the text */
    }

    &:hover::before {
        border-color: purple;
        animation: drawBorder 1s forwards;
    }

    &:hover::after {
        border-color: purple;
        animation: drawBorder 1s backwards;
    }

    @keyframes drawBorder {
        0% {
            width: 0;
            height: 0;
            top: 0;
            left: 0;
            border-top: 2px solid purple;
            border-right: 2px solid transparent;
            border-bottom: 2px solid transparent;
            border-left: 2px solid transparent;
        }
        25% {
            width: 100%;
            height: 0;
            top: 0;
            left: 0;
            border-right: 2px solid purple;
        }
        50% {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border-bottom: 2px solid purple;
        }
        75% {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border-left: 2px solid purple;
        }
        100% {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border-color: purple;
        }
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
    animation-delay: ${({delay}) => delay}ms;
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
    transition: opacity 0.5s, transform 0.7s;
    opacity: ${(props) => (props.isExpanded ? 1 : 0)};
    transform: ${(props) => (props.isExpanded ? 'rotate(0deg)' : 'rotate(-180deg) scale(-1.5)')};
`;

export default NavBar;