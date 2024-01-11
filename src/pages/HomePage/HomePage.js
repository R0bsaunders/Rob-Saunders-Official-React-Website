import React from 'react';
import LeftImageBlock from '../../components/LeftImageBlock/LeftImageBlock';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import DevelopmentSkills from '../../components/Skills/DevelopmentSkills';
import {homepageContent} from './HomePageContent';
import {MetaData} from '../../MetaData/MetaData';
import { Helmet } from 'react-helmet';
import ContactFormRender from "../../components/ContactForm/ContactFormRender";
import { NavLink } from 'react-router-dom';
import PageConclusion from '../../components/PageConclusion/PageConclusion';


function HomePage() {
  const meta = MetaData.homepage;

  return (
    <>
      <Helmet>
        <title>{meta.page_title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.meta_description} />
        <meta property="og:title" content={meta.og_title} />
        <meta property="og:description" content={meta.og_description} />
        <meta property="og:url" content="https://www.rob-saunders.co.uk" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <section id="hero">

        <Jumbotron
          h1={homepageContent.jumbotronH1}
          p={homepageContent.jumbotronP} />

      </section>

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
          <button className="btn btn-primary btn-lg mt-3 fade-in">
                  <span>Let's Chat</span>
                  <svg className ="button-chevron" viewBox="0 0 1792 1792">
                    <path fill="currentColor" d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path>
                  </svg>
                </button>
          </NavLink>
      
        </div>
      </div>

      <LeftImageBlock 
        h2={homepageContent.aboutH2}
        image={homepageContent.image}
        alt={homepageContent.imageAlt}
        p={homepageContent.aboutP}
        p2={homepageContent.aboutP2}
        p3={homepageContent.aboutP3}
      />

      <DevelopmentSkills 
        h2={homepageContent.skillsH2}
        content = {homepageContent.developmentSkills}
        id="dev-skills"
      />

      <PageConclusion
        h2={homepageContent.contentBox4_Title}
        p = {homepageContent.contentBox4_Para}
        button = "Let's Chat"
      />
      
    </>
  );
};

export default HomePage;