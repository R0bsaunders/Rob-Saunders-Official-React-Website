import { NavLink } from "react-router-dom";

function TextImageAlternator(props) {

  const link = () => {
    return !props.link ? "#contact-form" : props.link+"/#contact-form";

  }

  const buttons = () => {

    if(props.button === "none") {
      return

    } else if(props.buttonLink) {
      return (
        <NavLink target="_blank" rel="noreferrer" to="https://www.weglot.com/pricing">
          <button className="btn btn-primary btn-lg navCTA mt-3 fade-in">
              {props.buttonText}
          </button>
        </NavLink>

      );
    } else {
      return (
        <NavLink to={link()}>
            <button className="btn btn-primary btn-lg navCTA mt-3 fade-in">
                Let's Chat
            </button>
        </NavLink>
      )
    }


  }

    if (props.number === 0) {
        return (
            <section className="container mb-5 box-shadow yellow-background" >
              <div className='row'>
        
                  <div style={{alignSelf : "center"}} className='col-md-4 col-sm-12 text-image-alternator p-0 '>
                    <img id='robs-headshot' alt={props.alt} src={props.image}/>
                  </div>
        
                  <div className='col-md-8 col-sm-12 p-lg-5 p-md-4 p-3'>
                    <h2 className="mb-3 border-bottom purple-text">{props.h2}</h2>
                    <p className="fade-in">
                    {props.p}
                    </p>
                    {buttons()}
                  </div>
                </div>

            </section>
        );

    } else if(props.number === 1){

        return (
            <section key={props.location} className="container mb-5 yellow-shadow purple-background">
              <div className='row'>

                  <div className='col-md-8 col-sm-12 p-lg-5 p-md-4 p-3'>
                    <h2 className="mb-3 border-bottom purple-text">{props.h2}</h2>
                    <p className="fade-in">
                    {props.p}
                    </p>
                    {buttons()}
                  </div>
                  <div style={{alignSelf : "center"}} className='col-md-4 col-sm-12 text-image-alternator p-0'>
                    <img id='robs-headshot' alt={props.alt} src={props.image}/>
                  </div>
                </div>
            </section>
        );
    };
  
};

export default TextImageAlternator;
