import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import { contactJumbo } from "./ContactJumbo";
import { HashLink as Link } from "react-router-hash-link";
import printEmail from "../../components/EmailRevealer/EmailRevealer";
import "./ContactPage.css";

function ContactPage() {
  const serviceID = "service_yof2mek";
  const templateID = "template_kh3a3ek";
  const publicKey = "4MtM6JCBoDqXoTUpX";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)

      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
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
            <a href="https://www.linkedin.com/in/r0bsaunders" target="_blank">
              <img
                src="./assets/images/linkedin-icon.png"
                alt="LinkedIn Icon"
              />
            </a>

            <a href="https://www.linkedin.com/in/r0bsaunders" target="_blank">
              <p>LinkedIn</p>
            </a>
          </div>

          <div className="contactCards">
            <a href="https://github.com/R0bsaunders" target="_blank">
              <img
                src="./assets/images/iconmonstr-github-2-72.png"
                alt="GitHub Icon"
              />
            </a>

            <a href="https://github.com/R0bsaunders" target="_blank">
              <p>GitHub</p>
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

        <div id="formWrapper">
          <form ref={form} onSubmit={sendEmail}>
            <h2>Leave me a message and I'll come back to you ASAP</h2>
            <hr />

            <fieldset id="formArea">
              <div id="formEntry">
                <label className="userContactInfo">
                  <p>Your Name</p>
                  <input name="user_name" />
                </label>

                <label className="userContactInfo">
                  <p>Your Email</p>
                  <input name="user_email" />
                </label>

                <label className="userContactInfo">
                  <p>Your Phone Number</p>
                  <input name="user_phone" />
                </label>
              </div>
              <label id="messageContainer">
                <p>What's your message?</p>
                <textarea name="message" />
              </label>
            </fieldset>

            <p>
              Please note that by submitting this form you agree to be contacted
              by phone / email and agree that your data will be managed
              according to the{" "}
              <Link
                to="/privacy-policy/#"
                target="_blank"
                className="linkOnPurple"
              >
                Privacy Policy
              </Link>
            </p>

            <div>
              <button
                id="submitButton"
                type="submit"
                className="onPurpleButton"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
