import React from "react";
import { NavLink } from "react-router-dom";

export default function PageConclusion(props) {

    return (
        <section>
            <div className="page-break-background rockBackground">

                <div id="content-box-4" className="page-break">

                    <h2>{props.h2}</h2>
                    <p>{props.p}</p>

                    <NavLink to='#contact-form'>
                        <button className="btn btn-primary btn-lg navCTA mt-3 fade-in-three">
                            {props.button}
                        </button>
                    </NavLink>
            
                </div>
            </div>
        </section>
    );
};