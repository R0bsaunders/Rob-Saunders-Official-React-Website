import React from 'react';
import '../../styles/style.css';

const liClass = "d-flex align-items-center me-3";

function ProjectDiv(props) {
    const redBackground={
        background: `url(${props.bgImg})`,
    };

   


  return (

        <div className="p-2 project-container" key={props.stateKey}>
            <div className="work-card card-cover overflow-hidden text-bg-dark" style={redBackground} id={props.divId} >

                <div className="fade-in" id="card-description">

                    <h3 className="fade-in mb-4 h3-portfolio">{props.appName}</h3>
                
                    <p>{props.appDescription}</p>

                    <a href={props.appLink} target="_blank" rel="noreferrer">
                        <button className="fade-in-two projectBTN">
                            <span>View Website</span>
                            <svg className ="button-chevron" viewBox="0 0 1792 1792">
                                <path fill="currentColor" d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path>
                            </svg>
                        </button>
                    </a>

                </div>

            </div>
        </div>
  )};

export default ProjectDiv;