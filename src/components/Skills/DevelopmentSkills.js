import React from "react";
import Skill from "./Skill";

function DevelopmentSkills(props) {

  console.log(props.content);
  return (
    <article id="skills">

      <div className="container px-4 py-5" id="icon-grid">

        <h2 className="pb-2 border-bottom" id="skills">{props.h2}</h2>
        
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


