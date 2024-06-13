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
          <button className="btn btn-primary btn-lg  mt-3 fade-in">
              <span>{props.buttonText}</span>
              <span>Let's Chat</span>
                <svg className ="button-chevron" viewBox="0 0 1792 1792">
                  <path fill="currentColor" d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path>
                </svg>
          </button>
        </NavLink>

      );
    } else {
      return (
        <NavLink to={link()}>
            <button className="btn btn-primary btn-lg mt-3 fade-in">
                <span>Let's Chat</span>
                <svg className ="button-chevron" viewBox="0 0 1792 1792">
                  <path fill="currentColor" d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path>
                </svg>
            </button>
        </NavLink>
      )
    }


  }

    if (props.number === 0) {
        return (
            <section className="container mb-5 box-shadow slide-right" >
              <div className='row green-background'>
        
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
            <section key={props.location} className="container mb-5 green-shadow slide-left">
              <div className='row purple-background'>

                  <div className='col-md-8 col-sm-12 p-lg-5 p-md-4 p-3'>
                    <h2 className="mb-3 border-bottom purple-text">{props.h2}</h2>
                    <p className="fade-in">
                    {props.p}
                    </p>
                    {buttons()}
                  </div>
                  <div style={{alignSelf : "center"}} className='col-md-4 col-sm-12 text-image-alternator p-0 '>
                    <img id='robs-headshot' alt={props.alt} src={props.image}/>
                  </div>
                </div>
            </section>
        );
    };
  
};

export default TextImageAlternator;
