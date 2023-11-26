import React from 'react';

function LeftImageBlock(props) {
  return (
    <section className="container" id="contact">
      <div className='row'>
        <h2 class="pb-5 pt-5 border-bottom">{props.h2}</h2>
          <div className='col-md-4 col-sm-12 headshot-ctr'>
            <img id='robs-headshot' alt={props.alt} src={props.image}/>
          </div>

          <div className='col-md-8 col-sm-12 about-me'>
            <p>
              {props.p}
              <br />
              <br />
              {props.p2}
              <br />
              <br />
              {props.p3}
            </p>
          </div>
        </div>
    </section>
  );
};

export default LeftImageBlock;
