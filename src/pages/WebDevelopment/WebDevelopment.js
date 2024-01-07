import Jumbotron from '../../components/Jumbotron/Jumbotron';
import { WebDevelopmentContent } from './WebDevelopmentContent';
import TextImageAlternator from '../../components/ImageTextAlternator/ImageTextAlternator';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

import ContactFormRender from "../../components/ContactForm/ContactFormRender";

export default function WebBuildPage(props) {
const location = (data) => {

  if(!data) {
    return !props.location ? "" : "near "+props.location;

  } else if(data === "contact") {
    return !props.location ? "Interested " : "Near "+props.location+" and Interested ";

  } else if(data === 'null') {
    return !props.location ? "" : `-${props.location}`

  };
};
  
  return (
    <main>
      <Helmet>
        <title>Budget Friendly Web Design {location()} - Perfect for Small Businesses</title>
        <meta name="title" content={`Budget Friendly Web Design Service ${location()} - Perfect for Small Businesses`} />
        <meta name="description" content={`I provide small businesses ${location()} with great-looking fully functioning websites starting at just £600. Get a high-quality website that attracts customers and grows your business.`} />
        <meta property="og:title" content={`Budget Friendly Web Design Service ${location()}`} />
        <meta property="og:description" content="Great looking, easy-to-use SquareSpace websites from £600" />
        <meta property="og:url" content={`https://www.rob-saunders.co.uk/budget-web-design${location('null')}`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Jumbotron 
        h1={`Budget Web Design ${location()} from £600 - perfect for small businesses!`}
        p={`It is my goal to protect small businesses and owners alike, who only need a simple website, from expensive web agencies by providing a fast and fair value-for-money web design service.`}
      />

      <section id="work">
        <div className="container px-4 py-5">

        {WebDevelopmentContent.map(e => <TextImageAlternator 
                h2={e.h2}
                image={e.image}
                alt={e.imageAlt}
                p={e.p}
                number={e.position}
                location = {props.location}
            />,
        )}

        </div>
      
      </section>

      <section className="contactWrapper">
        <ContactFormRender 
          title={`Are You ${location("contact")} in Affordable Website Design?`}
          source={!props.
            location ? "Web Development Page" : props.location+" Development Page"}
        />
      </section>

      <section>
          <div className="page-break-background rockBackground">
            <div id="content-box-4" className="page-break">

              <h2>{!props.location ? "Somerset" : props.location} Web Development</h2>
              <p>If you're in {!props.location ? "" : props.location+" & "} the Southwest looking for a developer to build you a simple website that looks modern, performs well and most importantly, your customers love, then get in touch with me now. I'm based in Chard, Somerset, and would love to come and see you, or have a video chat! I won't confuse you with technical words or try to sell you something you don't need.</p>

              <NavLink to='#contact-form'>
                <button className="btn btn-primary btn-lg mt-3 fade-in">
                  <span>Let's Chat</span>
                  <svg className ="button-chevron" viewBox="0 0 1792 1792">
                    <path fill="currentColor" d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path>
                  </svg>
                </button>
              </NavLink>
          
            </div>
        </div>

      </section>
    </main>
  
  );
};