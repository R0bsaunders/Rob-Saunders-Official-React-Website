import React from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import { contactJumbo } from "./ContactJumbo";
import { Helmet } from 'react-helmet';
import printEmail from "../../components/EmailRevealer/EmailRevealer";
import "./ContactPage.css";
import ContactFormRender from "../../components/ContactForm/ContactFormRender";
import { MetaData } from "../../MetaData/MetaData";


function ContactPage() {
  const meta = MetaData.contactPage

  return (
    <>
      <Helmet>
        <title>{meta.page_title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.meta_description} />
      </Helmet>

      <section id="hero">
        <Jumbotron h1={contactJumbo.jumbotronH1} p={contactJumbo.jumbotronP} />
      </section>

      <div className="contactWrapper">
        <div id="contactDetails">
          <div className="contactCards">
            <a href="tel:07530893607">
              <img src="./assets/images/phone-icon.png" alt="Phone Icon" />
            </a>

            <a href="tel:+447530893607">
              <p>07530 893 607</p>
            </a>
          </div>

          <div className="contactCards">
            <a href="https://www.linkedin.com/in/web-developer-rob-saunders/" target="_blank" rel="noreferrer">
              <img
                src="./assets/images/linkedin-icon.png"
                alt="LinkedIn Icon"
              />
            </a>

            <a href="https://www.linkedin.com/in/web-developer-rob-saunders/" target="_blank" rel="noreferrer">
              <p>LinkedIn</p>
            </a>
          </div>

        </div>

        <span id="contactEmailReveal" className="revealEmailSpan">
          <button
            data-id="contactEmailReveal"
            className="btn btn-primary btn-lg navCTA"
            onClick={printEmail}
          >
            Reveal Email
          </button>
        </span>
        <br />

        <ContactFormRender 
          title="Leave me a message and I'll come back to you ASAP"
          source="Contact Page"
        />

      </div>
    </>
  );
}

export default ContactPage;
