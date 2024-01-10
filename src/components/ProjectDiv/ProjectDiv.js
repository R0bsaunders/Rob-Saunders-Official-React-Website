import React from 'react';
import '../../styles/style.css';

const liClass = "d-flex align-items-center me-3";

function ProjectDiv(props) {
    const redBackground={
        background: `url(${props.bgImg})`,
    };

   


  return (

        <div className="p-2">
            <div className="work-card card-cover overflow-hidden text-bg-dark" style={redBackground} id={props.divId} >

                <div className="fade-in" id="card-description">

                    <h3 className="fade-in mb-4 h3-portfolio">{props.appName}</h3>
                
                    <p>{props.appDescription}</p>

                    <a href={props.appLink} target="_blank" rel="noreferrer">
                        <button className="fade-in-two projectBTN">View Website</button>
                    </a>

                </div>

            </div>
        </div>
  )};

export default ProjectDiv;