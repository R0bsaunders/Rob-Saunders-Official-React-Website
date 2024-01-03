import Jumbotron from '../../components/Jumbotron/Jumbotron';
import { RobertHowardContent } from './RobContent';
import TextImageAlternator from '../../components/ImageTextAlternator/ImageTextAlternator';
import { Helmet } from 'react-helmet';

export default function RobHowardPage() {

  return (
    <main>
      <Helmet>
        <title>Example Translation Webpage For Rob Howard</title>
        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script> 
        <script type="text/javascript">
           {`function googleTranslateElementInit() {
                new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');
              }`
            }
        </script> 

      </Helmet>

      <Jumbotron 
        h1={`Google Translate in Action! - For Rob Howard`}
        p={`I'm doing this on my website to show you a working example of one of two options available for a translation function on your new Squarespace website. I will go into more detail later. For now, the Google translation tool is the simplest way to translate the content of a webpage. Please see an example below - it works so please do use it!`}
        additionalHTML = {`<div id="google_translate_element"></div>`}
      />


      <section id="work">

        <div className="container px-4 py-5">
        {RobertHowardContent.map(e => <TextImageAlternator 
                h2={e.h2}
                image={e.image}
                alt={e.imageAlt}
                p={e.p}
                number={e.position}
                button={e.button}
                buttonLink={e.buttonLink}
                buttonText={e.buttonText}
            />,
        )}

        </div>
      
      </section>

      <section>
          <div className="page-break-background rockBackground">
            <div id="content-box-4" className="page-break">

              <h2>Over to you &#128522;</h2>
              <p>Hope that all made sense. Let me know in your reply if you have any questions. I think for now, the most important is upping your online presence in London</p>
         
            </div>
        </div>

      </section>
    </main>
  
  );
};