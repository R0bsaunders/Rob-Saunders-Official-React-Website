import React from "react";
import Skill from "./Skill";
import { NavLink } from "react-router-dom";

function DevelopmentSkills(props) {

  console.log(props.content);
  return (
    <article id={props.id}>

      <div className="container px-4 py-5" id="icon-grid">

        <h2 className="pb-2 border-bottom" id="skills">{props.h2}</h2>
        
        <NavLink to='/#contact-form'>
          <button className="btn btn-primary btn-lg mt-3 fade-in">
            <span>Get in touch</span>
            <svg className ="button-chevron" viewBox="0 0 1792 1792">
              <path fill="currentColor" d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path>
            </svg>
          </button>
        </NavLink>
        
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          {
            props.content?.map(s => {
            return <Skill 
            icon={s.icon}
            h3={s.h3}
            p={s.p}
            key={s.id} />})
          }
            
        </div>
        
      </div>

    </article>
  );
};

export default DevelopmentSkills;


