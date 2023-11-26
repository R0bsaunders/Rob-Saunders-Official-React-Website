import React from 'react';

function Skill(props) {
  return (

    <div className="col d-flex align-items-start">
      
      <i className={props.icon}></i>

      <div>

        <h3 className="fw-bold mb-0 fs-4">{props.h3}</h3>
        <p>{props.p}</p>

      </div>
    </div>
  );
};

export default Skill;