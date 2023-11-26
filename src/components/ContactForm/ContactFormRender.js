import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { HashLink as Link } from "react-router-hash-link";
import SubmittedForm from "./SubmittedForm";
import ErrorForm from "./ErrorForm";
import SubmitButton from "./SubmitButton/SubmitButton";
import { ContactFormContent } from "./FormCopy";

export default function ContactForm() {
  // Error styles and messages
  const errorStyle = 'border: 3px solid red; border-radius: 5px; padding: 10px;'

  // States
	const [formState, setFormState] = useState(0);
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");

	// EmailJS credentials
	const serviceID = "service_yof2mek";
	const templateID = "template_chkym13";
	const publicKey = "4MtM6JCBoDqXoTUpX";
	const form = useRef();

  // Filter the text entered by the user and update the respective state
  function inputListener (event) {

    if (event.target.id === 'name') {
      setUserName(event.target.value);

    } else if (event.target.id === 'email'){
      setUserEmail(event.target.value);

    } else if (event.target.id === 'phone') {
      setUserPhone(event.target.value);

    } else if (event.target.id === 'message') {
      setUserMessage(event.target.value);

    };
  };

  /* ***** 
  
  Check that all fields have been entered so that a blank message is not sent

  ***** */

  function formFieldValidation() {
    
    if (
      userName.trim() === "" ||
      userEmail.trim() === "" ||
      userMessage.trim() === ""
      ) {

      // Set inline style to red border if not completed or change style to normal if it has been completed
      let nameStyle = document.getElementById('name');
      let emailStyle = document.getElementById('email');
      let messageStyle = document.getElementById('message');

      if (userName.trim() === "" ){
        nameStyle.setAttribute('style', errorStyle);
        nameStyle.setAttribute('placeholder', ContactFormContent.namePlaceholder);
        setUserName('');

      } else {
        nameStyle.setAttribute('style', '');

        // If the user has entered lots of spaces infront or after the text, they will be removed so the message comes through properly formatted and so that the placeholder text can be displayed
        setUserName(userName.trim());
      };

      if (userEmail.trim() === "" ) {
        emailStyle.setAttribute('style', errorStyle);
        emailStyle.setAttribute('placeholder', ContactFormContent.emailPlaceholder);
        setUserEmail('');

      } else {
        emailStyle.setAttribute('style', '');
        setUserEmail(userEmail.trim());

      };

      if (userMessage.trim() === "") {
        messageStyle.setAttribute('style', errorStyle);
        messageStyle.setAttribute('placeholder', ContactFormContent.messagePlaceholder);
        setUserMessage('');

      } else {
        messageStyle.setAttribute('style', '');
        setUserMessage(userMessage.trim());

      };

      // And then return false because an empty input has been detected
      return false;
    };
  };
  
  /****** 
  
   Email submission handler

  ******/

	const sendEmail = (e) => {
		e.preventDefault();
    let checkBox = document.getElementById('privacy');

    // Check to see if any of the fields are blank (not including phone which is not mandatory)
    if(formFieldValidation() === false) {


      // This alert will tell the user which fields they need to complete and then exit the function so the user can retry
      alert(`You haven't added all of the needed information.\n\nPlease add the following:\n${(!userName ? `\nName` : '')}${(!userEmail ? `\nEmail` : '')}${(!userMessage ? `\nYour Message` : '')}`);

      return;

    } else if (!checkBox.checked){

      alert(`You need to tick to accept the privacy policy`);
      let tickContainer = document.getElementById('checkContainer')
      tickContainer.setAttribute('style', errorStyle);

    } else {

      // Set the form to state '1' so that the loading button will appear
      setFormState(1);

      emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {

          // Set the form state to '2' so that the success message appears
          setFormState(2);

          // This timeout ensures the success message form is changed back to the default after the specified time passes
          setTimeout(() => {

            setFormState(0);

          }, 15000);
          setUserEmail('');
          setUserName('');
          setUserMessage('');
          setUserPhone('');
          console.log(result);

        },
        (error) => {

          console.log(error);

          // Set the form state to '3' so that the error message appears
          setFormState(3);

          // This timeout ensures the error message form is changed back to the default after the specified time passes
          setTimeout(() => {

            setFormState(0);

          }, 5000);
        }
      );
    };
	};

  /* *****

  Here is the form Render
  Check to see what state the form is in and render the form dependent on it

  ***** */

	if (formState === 0 || formState === 1) {

		// Load the standard form ready for completion
		return (

			<div id="formWrapper">

				<form ref={form} onSubmit={sendEmail}>

					<h2>{ContactFormContent.title}</h2>
          <hr />

					<fieldset id="formArea">
						<div id="formEntry">
							<label className="userContactInfo">

								<p>{ContactFormContent.name}</p>
								<input id="name" value={userName} name="user_name" onChange={inputListener} />

							</label>

							<label className="userContactInfo">

								<p>{ContactFormContent.email}</p>
								<input id="email" value={userEmail} name="user_email" onChange={inputListener} />

							</label>

							<label className="userContactInfo">

								<p>{ContactFormContent.phone}</p>
								<input id="phone" value={userPhone} name="user_phone" onChange={inputListener}/>

							</label>
						</div>

						<label id="messageContainer">

							<p>{ContactFormContent.message}</p>
							<textarea id="message" value={userMessage} name="message" onChange={inputListener} />
              
						</label>

            <div>

              <p>I accept that by submitting this form I agree to be contacted by phone / email and agree that my data will be managed according to the <Link to="/privacy-policy/#" target="_blank" className="linkOnPurple">Privacy Policy</Link></p>

              <label id="checkContainer" htmlFor="privacy">

                <input className="checkbox" type="checkbox" id="privacy" name="privacy" onChange={inputListener}/>
                I agree

              </label>

            </div>
          </fieldset>

          <SubmitButton state={formState} />

        </form>
    </div>
  );

    // If the API response is OK, then display the success form
	} else if (formState === 2) {

    return <SubmittedForm />;

    // If the API response is an Error, display the error message form
  } else {

    return <ErrorForm />;

  };
};

/* The state codes are as follows:

  0 is the initial render
  1 is the waiting for error/success
  2 is success
  3 is error

*/
