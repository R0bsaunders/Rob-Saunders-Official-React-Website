import Jumbotron from '../../components/Jumbotron/Jumbotron';
import { WebDevelopmentContent } from './WebDevelopmentContent';
import TextImageAlternator from '../../components/ImageTextAlternator/ImageTextAlternator';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { projects } from '../ProjectsPage/Projects';
import ContactFormRender from "../../components/ContactForm/ContactFormRender";
import { WebDevJumbo } from './WebDevJumbo';
import ProjectDiv from '../../components/ProjectDiv/ProjectDiv';
import moment from 'moment';

export default function WebBuildPage(props) {
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

  
const location = (data) => {

  if(!data) {
    return !props.location ? "" : "in "+props.location;

  } else if(data === "contact") {
    return !props.location ? "Interested " : "In "+props.location+" and Interested ";

  } else if(data === 'null') {
    return !props.location ? "" : `-${props.location}`

  } else if(data === 'place') {
    return !props.location ? "" : `${props.location}`

  }
};
  

// Code to filter projects to web design only

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
          <title>&#9989; Budget Friendly Web Design {location()} - From £600!</title>
          <meta name="title"
                content={`&#9989; Budget Friendly Web Design ${location()} - From £600`}/>
          <meta name="description"
                content={`&#9989; I'm helping a growing number of small businesses get affordable websites with my simple web design service | ${location('place')}`}/>
          <meta property="og:title" content={`Budget Friendly Web Design Service ${location()}`}/>
          <meta property="og:description" content="Great looking, easy-to-use SquareSpace websites from £600"/>
          <meta property="og:url" content={`https://www.rob-saunders.co.uk/budget-web-design${location('null')}`}/>
          <meta property="og:type" content="website"/>
        </Helmet>

        <Jumbotron
            h1={`Budget Web Design ${location()} from £600 - perfect for small businesses!`}
            p={`My web design service is perfect for tiny businesses, startups, and one-person business owners who have little time to arrange website stuff or feel intimidated by expensive agencies who see them as bread & butter and easy targets. Get in touch for a pleasant website experience.`}
        />

        <section id="work">
          <div className="container px-4 py-5">

            {WebDevelopmentContent.map(e => <TextImageAlternator
                    h2={e.h2}
                    image={e.image}
                    alt={e.imageAlt}
                    p={e.p}
                    number={e.position}
                    location={props.location}
                />,
            )}

          </div>

        </section>

        <section id="work">
          <div className="container px-4 py-5" id="custom-cards">
            <h2 className="pb-2 border-bottom">{WebDevJumbo.topH2}</h2>
            <p>I have designed and built websites for clients covering Somerset, Devon and
              Cornwall{!props.location ? "." : ` (so not too far from ${props.location}!).`} Distance is never a problem
              in our digital age. I love a phone call, video chat or an in person meeting if you really want it.</p>


            <div className="row row-cols-md-2 row-cols-lg-2 row-cols-xl-3 align-items-stretch g-4 py-5">
              {filteredProjects.map(p => <ProjectDiv
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

        <section id='notice' className='text-center mt-3 px-5'>
          <div>
            <h2 className='mb-3'>New website project start date - {moment(priorDate).format("dddd, MMMM Do YYYY")}</h2>

            <p>Due to it being surprisingly busy at the moment, with several new website builds on the go, I am able to
              schedule in new website builds 3 weeks from the deposit payment. For example, if deposit is paid today
              then I would be able to schedule starting your project on the above date.</p>
            <p>On a positive note, that gives you a bit more time to put pen to paper and write up your website content
              - oh how we love writing content haha!
              <br/>
              Thanks, Rob
            </p>
          </div>
        </section>

        <section className="contactWrapper">
          <ContactFormRender
              title={`Are You ${location("contact")} in Affordable Website Design?`}
              source={!props.location ? "Web Development Page" : props.location + " Development Page"}
          />
        </section>

        <section>
          <div className="page-break-background rockBackground">
            <div id="content-box-4" className="page-break">

              <h2>{!props.location ? "Somerset" : props.location} Web Development</h2>
              <p>If you're in {!props.location ? "" : props.location + " & "} the Southwest looking for a developer to
                build you a simple website that looks modern, performs well and most importantly, your customers love,
                then get in touch with me now. I'm based in Chard, Somerset, and would love to come and see you, or have
                a video chat! I won't confuse you with technical words or try to sell you something you don't need.</p>

              <NavLink to='#contact-form'>
                <button className="btn btn-primary btn-lg mt-3 fade-in">
                  <span>Let's Chat</span>
                  <svg className="button-chevron" viewBox="0 0 1792 1792">
                    <path fill="currentColor"
                          d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path>
                  </svg>
                </button>
              </NavLink>

            </div>
          </div>

        </section>
      </main>

  );
};