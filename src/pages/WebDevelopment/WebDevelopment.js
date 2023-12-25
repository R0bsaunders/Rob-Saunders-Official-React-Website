import Jumbotron from '../../components/Jumbotron/Jumbotron';
import { WebDevelopmentContent } from './WebDevelopmentContent';
import { WebDevJumbo } from './WebDevJumbo';
import TextImageAlternator from '../../components/ImageTextAlternator/ImageTextAlternator';
import { Helmet } from 'react-helmet';
import {MetaData} from '../../MetaData/MetaData'


function WebBuildPage() {
  const meta = MetaData.webDesignPage
  
  return (
    <main>
      <Helmet>
        <title>{meta.page_title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.meta_description} />

      </Helmet>

      <Jumbotron 
        h1={WebDevJumbo.jumbotronH1}
        p={WebDevJumbo.jumbotronP}
      />

      <section id="work">
        <div className="container px-4 py-5">

        {WebDevelopmentContent.map(e => <TextImageAlternator 
                h2={e.h2}
                image={e.image}
                alt={e.imageAlt}
                p={e.p}
                number={e.position}
            />,
        )}

        </div>
      </section>
    </main>
  
  );
};

export default WebBuildPage;