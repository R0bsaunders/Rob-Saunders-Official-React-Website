import React, { useEffect, useState } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import ProjectDiv from '../../components/ProjectDiv/ProjectDiv';
import './Project.css';
import { projects } from '../../pages/ProjectsPage/Projects';
import { ProjectJumbo } from './ProjectJumbo';
import { Helmet } from 'react-helmet';
import {MetaData} from '../../MetaData/MetaData';

function ProjectsPage() {
  const meta = MetaData.projectPage;
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [currentTag, setCurrentTag] = useState()

  // Function to create filters from available projects
  var filterTag = [];
  const filters = () => {
    projects.forEach(e => {
      for (let i = 0; i < e.tags.length; i++) {
        filterTag.push(e.tags[i]);
        filterTag = filterTag.filter((value, index) => filterTag.indexOf(value) === index);
      };

    });

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
        h1={ProjectJumbo.jumbotronH1}
        p={ProjectJumbo.jumbotronP}
      />

      <section id="work">
        <div className="container px-4 py-5" id="custom-cards">

          <h2 className="pb-2 border-bottom">My Development and SEO Portfolio</h2>

          <p>I have developed (pardon the pun &#x1F606;) a LOVE for coding and finding code-based solutions to real-world problems - something I have a good eye for. Here are a few of my web-development projects to date. They include websites I've built for clients using easy to use and maintain builders such as Squarespace and Wix, as well as my fully-bespoke custom line-by-line coded projects on the side:</p>
            

                  <div className='filter-tags'>
                    {filterTag.map(filter => {
                        return(
                          <button onClick={() => filterProjects(filter)} className={`filter-button uniformWidth ${filter===currentTag ? "filter-button-active" : ""}`}>
                            <span>{filter}</span>
                            {filter===currentTag ? <svg className ="filter-chevron" viewBox="0 0 1792 1792">
                                <path fill="currentColor" d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path>
                            </svg> : ""}

                          </button>

                        )
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
              key={p.id} />)
            }

          </div>
        </div>
      </section>
    </main>
  
  );
};

export default ProjectsPage;