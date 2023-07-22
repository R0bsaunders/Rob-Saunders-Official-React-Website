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
  const errorStyle = 'border: 3px solid red; border-radius: 5px'
  const errorPlaceholder = {
    name: `* Your name here *`,
    email: `* Your email here *`,
    message: `* Your message here *`
  }

  // States
	const [formState, setFormState] = useState(0);
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");

	// EmailJS credentials
	const serviceID = "service_yof2mek";
	const templateID = "template_kh3a3ek";
	const publicKey = "4MtM6JCBoDqXoTUpX";
	const form = useRef();

  // Filter the text entered by the user and update the respective state
  function inputListener (event) {

    if (event.target.id === 'name') {
      setUserName(event.target.value);
      console.log(userName)

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
        nameStyle.setAttribute('placeholder', errorPlaceholder.name);
        setUserName('');

      } else {
        nameStyle.setAttribute('style', '');

        // If the user has entered lots of spaces infront or after the text, they will be removed so the message comes through properly formatted and so that the placeholder text can be displayed
        setUserName(userName.trim());
      };

      if (userEmail.trim() === "" ) {
        emailStyle.setAttribute('style', errorStyle);
        emailStyle.setAttribute('placeholder', errorPlaceholder.email);
        setUserEmail('');

      } else {
        emailStyle.setAttribute('style', '');
        setUserEmail(userEmail.trim());

      };

      if (userMessage.trim() === "") {
        messageStyle.setAttribute('style', errorStyle);
        messageStyle.setAttribute('placeholder', errorPlaceholder.message);
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

    // Check to see if any of the fields are blank (not including phone which is not mandatory)
    if(formFieldValidation() === false) {
      alert(`You haven't added all of the needed information.\n\nPlease add the following:\nName\nEmail\nMessage`);
      return

    } else {

		setFormState(1);

		emailjs
    .sendForm(serviceID, templateID, form.current, publicKey)
    .then(
      (result) => {

        setFormState(2);
        setTimeout(() => {

          setFormState(0);

        }, 15000);

        console.log(result);

      },
      (error) => {

        console.log(error);
        setFormState(3);
        setTimeout(() => {

          setFormState(0);

        }, 5000);
      }
    );
    }
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
					</fieldset>

					<p>Please note that by submitting this form you agree to be contacted
						by phone / email and agree that your data will be managed according
						to the <Link to="/privacy-policy/#" target="_blank" className="linkOnPurple">Privacy Policy</Link></p>

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
