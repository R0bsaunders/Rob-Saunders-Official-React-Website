import React from 'react';
import LeftImageBlock from '../../components/LeftImageBlock/LeftImageBlock';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import DevelopmentSkills from '../../components/Skills/DevelopmentSkills';
import {homepageContent} from './HomePageContent';
import {MetaData} from '../../MetaData/MetaData';
import { Helmet } from 'react-helmet';

function HomePage() {
  const meta = MetaData.homepage

  return (
    <>
      <Helmet>
        <title>{meta.page_title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.meta_description} />
      </Helmet>
      <section id="hero">

        <Jumbotron
          h1={homepageContent[0].jumbotronH1}
          p={homepageContent[0].jumbotronP} />

      </section>

      <LeftImageBlock 
        h2={homepageContent[3].aboutH2}
        image={homepageContent[3].image}
        alt={homepageContent[3].imageAlt}
        p={homepageContent[3].aboutP}
        p2={homepageContent[3].aboutP2}
        p3={homepageContent[3].aboutP3}
      />
      
      <DevelopmentSkills />

    </>
  );
};

export default HomePage;