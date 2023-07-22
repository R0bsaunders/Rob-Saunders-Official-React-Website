import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { HashLink as Link } from "react-router-hash-link";
import SubmittedForm from "./SubmittedForm";
import ErrorForm from "./ErrorForm";
import SubmitButton from "./SubmitButton/SubmitButton";
import { ContactFormContent } from "./FormCopy";

export default function ContactForm() {
  // States
	const [buttonText, setButtonText] = useState(0);
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");

	// EmailJS credentials
	const serviceID = "service_yof2mek.";
	const templateID = "template_kh3a3ek.";
	const publicKey = "4MtM6JCBoDqXoTUpX.";
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

  // Email submission handler
	const sendEmail = (e) => {
		e.preventDefault();

    console.log("Name: " + userName)
    console.log("Email: " + userEmail)
    console.log("Phone: " + userPhone)
    console.log("Message: " + userMessage)



		setButtonText(1);





		emailjs
    .sendForm(serviceID, templateID, form.current, publicKey)
    .then(
      (result) => {

        setButtonText(2);
        setTimeout(() => {

          setButtonText(0);

        }, 15000);

        console.log(result);

      },
      (error) => {

        console.log(error);
        setButtonText(3);
        setTimeout(() => {

          setButtonText(0);

        }, 5000);
      }
    );
	};

  // Check to see what state the form is in and render the form dependent on it

	if (buttonText === 0 || buttonText === 1) {
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

          <SubmitButton state={buttonText} />

				</form>
			</div>
		);

    // If the API response is OK, then display the success form
	} else if (buttonText === 2) {

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
