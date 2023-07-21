import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { HashLink as Link } from "react-router-hash-link";
import SubmittedForm from "./SubmittedForm";
import ErrorForm from "./ErrorForm";
import SubmitButton from "./SubmitButton/SubmitButton";

export default function ContactForm () {
    const [buttonText, setButtonText] = useState(0)

    const serviceID = "service_yof2mek";
    const templateID = "template_kh3a3ek";
    const publicKey = "4MtM6JCBoDqXoTUpX";
    const form = useRef();

    const sendEmail = (e) => {
      setButtonText(1);
    e.preventDefault();

    emailjs
        .sendForm(serviceID, templateID, form.current, publicKey)

        .then(
        (result) => {
          setButtonText(2);
            console.log(result);
        },
        (error) => {
          setButtonText(3);
            console.log(error);

            setTimeout(() => {
              setButtonText(0);

            }, 5000);


        }
        );
    };

    
    return (

      showForm()
    )
    // 0 is the initial loading state
    // 1 is the waiting for error/success
    // 2 is success
    // 3 is the error
    
    function showForm() {
      
      // Check to see what state it is in

        if (buttonText === 0) {
            // Load the standard form ready for completion

            return(
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
                  <SubmitButton state={buttonText} />
                </div>
              </form>
            </div>
            );

          // If it's waiting to check for success, load the below
          } else if (buttonText === 1) {

            return(
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
                <SubmitButton state={buttonText} />
                </div>
              </form>
            </div>
            );
        } else if (buttonText === 2) {

          return (
            <SubmittedForm />
          );

        } else {
          return (
          <ErrorForm />
        );};

    };
};

