import { NavLink } from "react-router-dom";

function TextImageAlternator(props) {


    if (props.number === 0) {
        return (
            <section className="container mb-3 box-shadow" >
              <div className='row'>
        
                  <div className='col-md-4 col-sm-12 text-image-alternator p-0 '>
                    <img id='robs-headshot' alt={props.alt} src={props.image}/>
                  </div>
        
                  <div className='col-md-8 col-sm-12 p-lg-5 p-md-4 p-sm-3'>
                    <h2 className="mb-3 border-bottom fade-in">{props.h2}</h2>
                    <p className="fade-in-two">
                    {props.p}
                    </p>
                    
                    <NavLink to='/contact#message'>
                        <button className="btn btn-primary btn-lg navCTA mt-3 fade-in-three">
                            Let's Chat
                        </button>
                    </NavLink>
                  </div>
                </div>

            </section>
        );

    } else if(props.number === 1){

        return (
            <section className="container mb-3 box-shadow">
              <div className='row'>

                  <div className='col-md-8 col-sm-12 p-lg-5 p-md-4 p-sm-3'>
                    <h2 className="mb-3 border-bottom fade-in">{props.h2}</h2>
                    <p className="fade-in-two">
                    {props.p}
                    </p>
                    <NavLink to='/contact#message'>
                        <button className="btn btn-primary btn-lg navCTA mt-3 fade-in-three">
                            Let's Chat
                        </button>
                    </NavLink>
                  </div>
                  <div className='col-md-4 col-sm-12 text-image-alternator p-0'>
                    <img id='robs-headshot' alt={props.alt} src={props.image}/>
                  </div>
                </div>
            </section>
        );
    };
  
};

export default TextImageAlternator;
