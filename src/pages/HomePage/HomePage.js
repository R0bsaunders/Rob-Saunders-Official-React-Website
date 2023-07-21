import React from 'react';
import LeftImageBlock from '../../components/LeftImageBlock/LeftImageBlock';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import DevelopmentSkills from '../../components/Skills/DevelopmentSkills';
import {homepageContent} from './HomePageContent';

function HomePage() {

  return (
    <>
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
      />
      
      <DevelopmentSkills />

    </>
  );
};

export default HomePage;