import React from 'react';
import LeftImageBlock from '../../components/LeftImageBlock/LeftImageBlock';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import DevelopmentSkills from '../../components/Skills/DevelopmentSkills';
import {homepageContent} from './HomePageContent';
import {MetaData} from '../../MetaData/MetaData';
import { Helmet } from 'react-helmet';
import ContactFormRender from "../../components/ContactForm/ContactFormRender";
import { NavLink } from 'react-router-dom';


function HomePage() {
  const meta = MetaData.homepage;

  return (
    <>
      <Helmet>
        <title>{meta.page_title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.meta_description} />
      </Helmet>
      <section id="hero">

        <Jumbotron
          h1={homepageContent.jumbotronH1}
          p={homepageContent.jumbotronP} />

      </section>

      <LeftImageBlock 
        h2={homepageContent.aboutH2}
        image={homepageContent.image}
        alt={homepageContent.imageAlt}
        p={homepageContent.aboutP}
        p2={homepageContent.aboutP2}
        p3={homepageContent.aboutP3}
      />
      
      <section className='page-break-background'>
        <DevelopmentSkills 
          h2={homepageContent.uspsH2}
          content = {homepageContent.usps}
          id="why-choose-rob"
        />
      </section>

      <section className="contactWrapper">
        <ContactFormRender 
          title="Just need a website and no complication? Get in touch now!"
          source="Home Page"
        />
      </section>

      <div className="page-break-background rockBackground">

        <div id="content-box-3" className="page-break">

          <h2>{homepageContent.contentBox3_Title}</h2>
          <p>{homepageContent.contentBox3_Para}</p>

          <NavLink to='/#contact-form'>
              <button className="btn btn-primary btn-lg navCTA mt-3 fade-in-three">
                  Let's Chat
              </button>
          </NavLink>
      
        </div>
      </div>


      <DevelopmentSkills 
        h2={homepageContent.skillsH2}
        content = {homepageContent.developmentSkills}
        id="dev-skills"
      />
      <div className="page-break-background rockBackground">

        <div id="content-box-4" className="page-break">

          <h2>{homepageContent.contentBox4_Title}</h2>
          <p>{homepageContent.contentBox4_Para}</p>

          <NavLink to='/#contact-form'>
              <button className="btn btn-primary btn-lg navCTA mt-3 fade-in-three">
                  Let's Chat
              </button>
          </NavLink>
      
        </div>
      </div>
    </>
  );
};

export default HomePage;