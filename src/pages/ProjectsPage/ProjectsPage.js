import React, { useState } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import ProjectDiv from '../../components/ProjectDiv/ProjectDiv';
import './Project.css';
import { projects } from '../../pages/ProjectsPage/Projects';
import { Helmet } from 'react-helmet';
import {MetaData} from '../../MetaData/MetaData';
import { ProjectContent } from './ProjectContent';
import PageConclusion from '../../components/PageConclusion/PageConclusion';
import ContactFormRender from "../../components/ContactForm/ContactFormRender";


function ProjectsPage() {
  const meta = MetaData.projectPage;
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [currentTag, setCurrentTag] = useState()

  // Function to create filters from available projects
  var filterTag = [];
  const filters = () => {
    projects.forEach(e => {
      for (let i = 0; i < e.tags.length; i++) {
        filterTag.push(e.tags[i])
        ;
      };

    });

    filterTag = filterTag.filter((value, index) => filterTag.indexOf(value) === index);

  };

  filters();
  
  // Function to filter the projects list

  const filterProjects = (tag) => {

    if(tag === currentTag) {
      setFilteredProjects(projects);
      setCurrentTag();

    } else {
      setCurrentTag(tag);
      let filtering = [];
      
      for (let i = 0; i < projects.length; i++) {
        for (let j = 0; j < projects[i].tags.length; j++) {

          if(projects[i].tags[j] === tag){
            filtering.push(projects[i]);

          };
        };
      };

    setFilteredProjects(filtering)
    }
  }

  return (
    <main>
      <Helmet>
        <title>{meta.page_title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.meta_description} />
      </Helmet>

      <Jumbotron 
        h1={ProjectContent.h1}
        p={ProjectContent.jumboP}
      />

      <section id="work">
        <div className="container px-4 py-5" id="custom-cards">
          <h2 className="pb-2 border-bottom">{ProjectContent.topH2}</h2>
          <p>{ProjectContent.topPara}</p>
          <div className='filter-tags'>
            {filterTag.map(filter => {
                return(
                  <button onClick={() => filterProjects(filter)} className={`filter-button uniformWidth ${filter===currentTag ? "filter-button-active" : ""}`}>
                    <span>{filter}</span>
                    {filter===currentTag ? 
                    <svg xmlns="http://www.w3.org/2000/svg" className="filter-chevron" viewBox="0 0 329.26933 329"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
                   : ""}
                  </button>
                );
              })
            }
          </div>

          <div className="row row-cols-md-2 row-cols-lg-2 row-cols-xl-3 align-items-stretch g-4 py-5">
            {filteredProjects.map( p => <ProjectDiv 
              divId={p.divId}
              bgImg={p.bgImg}
              appLink={p.appLink}
              stateKey={currentTag}
              appName={p.appName}
              appDescription={p.appDescription}
              key={p.id} 
              button={p.button}
              blank={p.internal}/>)
            }
          </div>
        </div>
      </section>

      <section className="contactWrapper">
        <ContactFormRender 
          title="Can I help you with a new affordable website?"
          source="Project Page"
        />
      </section>

      <PageConclusion
        h2={ProjectContent.concludingH2}
        p = {ProjectContent.concludingPara}
        button = {ProjectContent.concludingButton}
      />
    </main>
  );
};

export default ProjectsPage;