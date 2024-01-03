import React from "react";

function Jumbotron(data) {

  return (
    <>
      <div className="jumbotron rockBackground">

        <div className="jumboCopy">

            <h1>{data.h1}</h1>
            <p>{data.p}</p>
            {!data.additionalHTML ? "" : <div id="google_translate_element"></div>}
            
        </div>
      </div>
    </>
  );
};

export default Jumbotron;