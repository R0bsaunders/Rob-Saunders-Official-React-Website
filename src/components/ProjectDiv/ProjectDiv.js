import React from 'react';
import '../../styles/style.css';
import { NavLink } from 'react-router-dom';

function ProjectDiv(props) {
    const redBackground={
        background: `url(${props.bgImg})`,
    };

  return (

    <div className="p-2 project-container" key={props.stateKey}>
        <div className="work-card card-cover overflow-hidden text-bg-dark" style={redBackground} id={props.divId} >
            <div id="card-description">

                <h3 className=" mb-4 h3-portfolio">{props.appName}</h3>
                <p>{props.appDescription}</p>
                
                <NavLink className={`projectBtn-wrapper ${props.button==="Inactive" ? "display-none" : ""}`} to={props.appLink} target={!props.blank ? "_blank" : ''} rel="noreferrer">
                    <button className="projectBTN">
                        <span>{props.button}</span>
                        <svg className ="button-chevron" viewBox="0 0 1792 1792">
                            <path fill="currentColor" d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path>
                        </svg>
                    </button>
                </NavLink>
            </div>
        </div>
    </div>
  )};

export default ProjectDiv;