import Jumbotron from '../../components/Jumbotron/Jumbotron';
import { SquarespaceDevContent } from './SquarespaceDevContent.js';
import { SquarespaceJumbo } from './SquarespaceJumbo.js';
import TextImageAlternator from '../../components/ImageTextAlternator/ImageTextAlternator';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import ContactFormRender from "../../components/ContactForm/ContactFormRender";
import ProjectDiv from '../../components/ProjectDiv/ProjectDiv.js';
import { projects } from '../../pages/ProjectsPage/Projects';
import moment from 'moment';

export default function SquarespacePage() {


    // Work out the date of the week commencing three weeks from the current day
    
    function getDayNumberOfWeek(date) {
      let day = date.getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6
      return day === 0 ? 7 : day; // Convert Sunday from 0 to 7, keep other days as is
  }

    const todaysDay = new Date();
    const dayNumberOfWeek = getDayNumberOfWeek(todaysDay);

    console.log("Today's number of the week (Monday as 1):", dayNumberOfWeek);
  
    var today = new Date();
    var priorDate = new Date(new Date().setDate(today.getDate() + (29-dayNumberOfWeek) ));
    
    console.log("Today's date is:" + today)
    console.log(priorDate);

  
  var filteredProjects = [];
  const currentTag = "Squarespace";
      
  for (let i = 0; i < projects.length; i++) {
    for (let j = 0; j < projects[i].tags.length; j++) {

      if(projects[i].tags[j] === currentTag){
        filteredProjects.push(projects[i]);

      };

    };
  };

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

      <section id='notice' className='text-center mt-5 px-5'>
        <div>
          <h2 className='mb-3'>New Squarespace project start date - {moment(priorDate).format("dddd, MMMM Do YYYY")}</h2>

          <p>Due to it being surprisingly busy at the moment, with several new website builds on the go, I am able to schedule in new Squarespace website builds 3 weeks from the deposit payment. For example, if deposit is paid today then I would be able to schedule starting your project on the above date.</p>
          <p>On a postive note, that gives you a bit more time to put pen to paper and write up your website content - oh how we love writing content haha!
            <br />
            Thanks, Rob
          </p>
        </div>

      </section>

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

      <section id="work">
        <div className="container px-4 py-5" id="custom-cards">
          <h2 className="pb-2 border-bottom">{SquarespaceJumbo.topH2}</h2>
          <p>{SquarespaceJumbo.topPara}</p>
         

          <div className="row row-cols-md-2 row-cols-lg-2 row-cols-xl-3 align-items-stretch g-4 py-5">
            {filteredProjects.map( p => <ProjectDiv 
              divId={p.divId}
              bgImg={p.bgImg}
              appLink={p.appLink}
              stateKey={currentTag}
              appName={p.appName}
              appDescription={p.appDescription}
              key={p.id} 
              button={p.button}/>)
            }
          </div>
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
