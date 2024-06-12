import React from "react";

function Jumbotron(data) {

  return (
    <>
      <div className="jumbotron rockBackground">

        <div className="jumboCopy">

            <h1>{data.h1}</h1>
            <h3 className="mt-3">{data.p}</h3>
            {!data.additionalHTML ? "" : <div id="google_translate_element"></div>}
            
        </div>
      </div>
    </>
  );
};

export default Jumbotron;