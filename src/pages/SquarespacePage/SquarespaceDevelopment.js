import Jumbotron from '../../components/Jumbotron/Jumbotron';
import { SquarespaceDevContent } from './SquarespaceDevContent.js';
import { SquarespaceJumbo } from './SquarespaceJumbo.js';
import TextImageAlternator from '../../components/ImageTextAlternator/ImageTextAlternator';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import ContactFormRender from "../../components/ContactForm/ContactFormRender";


export default function SquarespacePage() {
  
  return (
    <main>
      <Helmet>
        <title>Budget Friendly Squarespace Website Design - Perfect for Small Businesses"</title>
        <meta name="title" content="Budget Friendly Squarespace Website Design - Perfect for Small Businesses" />
        <meta name="description" content="I'm a Squarespace web designer building professional and modern websites that your customers will love without breaking the bank! Get in touch now!" />
        <meta property="og:title" content="Budget Friendly SquareSpace Web Design | Rob Saunders" />
        <meta property="og:description" content="Great looking, easy-to-use SquareSpace websites from £600" /> </Helmet>

      <Jumbotron 
        h1={SquarespaceJumbo.jumbotronH1}
        p={SquarespaceJumbo.jumbotronP}
      />

      <section id="work">
        <div className="container px-4 py-5">

        {SquarespaceDevContent.map(e => <TextImageAlternator 
                h2={e.h2}
                image={e.image}
                alt={e.imageAlt}
                p={e.p}
                number={e.position}

            />,
        )}

        </div>

      </section>

      <section className="contactWrapper">
        <ContactFormRender 
          title="Interested in Affordable Squarespace Website Design?"
          source="Squarespace Development Page"
        />
      </section>

      <section>
        <div className="page-break-background rockBackground">

        <div id="content-box-4" className="page-break">

          <h2>Squarespace Web Development</h2>
          <p>If you're looking for a Squarespace website designer or developer to build you a simple website that looks modern, performs well and most importantly, your customers love, then get in touch with me now. I'm based in Chard, Somerset, and would love to come and see you, or have a video chat! I won't confuse you with technical words or try to sell you something you don't need.</p>

          <NavLink to='#contact-form'>
              <button className="btn btn-primary btn-lg navCTA mt-3 fade-in-three">
                  Let's Chat
              </button>
          </NavLink>
      
        </div>
      </div>

      </section>
    </main>
  
  );
};