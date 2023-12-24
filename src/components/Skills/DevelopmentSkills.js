import React from "react";
import Skill from "./Skill";
import { homepageContent } from "../../pages/HomePage/HomePageContent";

function DevelopmentSkills() {

  return (
    <article id="skills">

      <div className="container px-4 py-5" id="icon-grid">

        <h2 className="pb-2 border-bottom" id="skills">Website Development Skills</h2>
        
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">

          {homepageContent[2].map( s => <Skill 
          icon={s.icon}
          h3={s.h3}
          p={s.p}
          key={s.id} />)}
            
        </div>
      </div>
    </article>
  );
};

export default DevelopmentSkills;


