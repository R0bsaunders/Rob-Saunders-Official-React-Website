import React from 'react';

function LeftImageBlock(props) {
  return (
    <section class="container" id="contact">

        <h2 class="pb-2 border-bottom">{props.h2}</h2>

        <div id="about-me">

            <img alt={props.alt} src={props.image}/>
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
    </section>
  );
};

export default LeftImageBlock;
