import Jumbotron from '../../components/Jumbotron/Jumbotron';
import { WebDevelopmentContent } from './WebDevelopmentContent';
import TextImageAlternator from '../../components/ImageTextAlternator/ImageTextAlternator';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';


export default function WebBuildPage(props) {
const location = () => {
  return !props.location ? "" : "near "+props.location;

};
  
  return (
    <main>
      <Helmet>
        <title>Budget Friendly Web Design {location()} - Perfect for Small Businesses</title>
        <meta name="title" content={`Budget Friendly Web Design Service ${location()} - Perfect for Small Businesses<`} />
        <meta name="description" content={`I provide small businesses ${location()} with great-looking fully functioning websites starting at just £500. Get a high-quality website that attracts customers and grows your business.`}/>
      </Helmet>

      <Jumbotron 
        h1={`Budget Web Design ${location()} from £500 - perfect for small businesses!`}
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

        <div className="page-break-background rockBackground">

        <div id="content-box-4" className="page-break">

          <h2>{!props.location ? "Somerset" : props.location} Web Development</h2>
          <p>If you're in {props.location} & the Southwest looking for a developer to build you a simple website that looks modern, performs well and most importantly, your customers love, then get in touch with me now. I'm based in Chard, Somerset, and would love to come and see you, or have a video chat! I won't confuse you with technical words or try to sell you something you don't need.</p>

          <NavLink to='/#contact-form'>
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