import React from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import ProjectDiv from '../../components/ProjectDiv/ProjectDiv';
import './Project.css';
import { projects } from '../../pages/ProjectsPage/Projects';
import { ProjectJumbo } from './ProjectJumbo';
import { Helmet } from 'react-helmet';
import {MetaData} from '../../MetaData/MetaData';

function ProjectsPage() {
  const meta = MetaData.projectPage

  return (
    <main>
      <Helmet>
        <title>{meta.page_title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.meta_description} />

      </Helmet>

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
              key={p.id} />)
            }

          </div>
        </div>
      </section>
    </main>
  
  );
};

export default ProjectsPage;