import React from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import ProjectDiv from '../../components/ProjectDiv/ProjectDiv';
import './Project.css';
import { projects } from '../../pages/ProjectsPage/Projects';
import { ProjectJumbo } from './ProjectJumbo';


function ProjectsPage() {
  return (
    <main>

      <Jumbotron 
        h1={ProjectJumbo.jumbotronH1}
        p={ProjectJumbo.jumbotronP}
      />

      <section id="work">
        <div className="container px-4 py-5" id="custom-cards">

          <h2 className="pb-2 border-bottom">My Development and SEO Portfolio</h2>

          <p>I have developed (pardon the pun &#x1F606;) a LOVE for coding and finding code-based solutions to real-world problems - something I have a good eye for. Here are a few of my web-development projects to date. They include websites I've built for clients using easy to use and maintain builders such as Squarespace and Wix, as well as my fully-bespoke custom line-by-line coded projects on the side:</p>
            
          <div className="row row-cols-md-2 row-cols-lg-2 row-cols-xl-3 align-items-stretch g-4 py-5">
          
            {projects.map( p => <ProjectDiv 
              divId={p.divId}
              bgImg={p.bgImg}
              appLink={p.appLink}

              appName={p.appName}
              appDescription={p.appDescription}
              icon1={p.icon1}
              tech1={p.tech1}
              icon2={p.icon2}
              tech2={p.tech2}
              icon3={p.icon3}
              tech3={p.tech3}
              icon4={p.icon4}
              tech4={p.tech4}
              github={p.github}
              key={p.id} />)
            }

          </div>
        </div>
      </section>
    </main>
  
  );
};

export default ProjectsPage;