import Jumbotron from '../../components/Jumbotron/Jumbotron';
import { WebDevelopmentContent } from './WebDevelopmentContent';
import { WebDevJumbo } from './WebDevJumbo';
import TextImageAlternator from '../../components/ImageTextAlternator/ImageTextAlternator';


function WebBuildPage() {

  return (
    <main>

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