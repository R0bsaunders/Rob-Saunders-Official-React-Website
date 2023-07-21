import React from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import printEmail from "../../components/EmailRevealer/EmailRevealer";

function PrivacyPage() {
  return (
    <>
      <section id="hero">
        <Jumbotron
          h1="Privacy Policy"
          p="Your data is only ever used to contact you in reply to your contact form submission, or to communicate regarding a contract"
        />
      </section>
      <div className="ContractText container" id="outputPage">
        <div className="format-html">
          <div className="outputVersion1" data-exp="simple2">
            <div className="header">
              <h2 className="content">Website Privacy Policy</h2>
            </div>

            <p className="documentTitle">
              <span>www.rob-saunders.co.uk</span>
            </p>

            <p>
              Type of website: Portfolio
              <br />
              Effective date: 16th day of July, 2023
            </p>

            <p>
              www.rob-saunders.co.uk (the "Site") is owned and operated by
              Robert Saunders. Robert Saunders is the data controller and can be
              contacted at:
              <br />
              <span id="emailAddress" className="revealEmailSpan">
                <button
                  data-id="emailAddress"
                  className="btn btn-primary btn-lg navCTA"
                  onClick={printEmail}
                >
                  Reveal Email
                </button>
              </span>
              <br />
              07530 893607
              <br />
            </p>

            <p>
              <span>Purpose</span>
              <br />
              The purpose of this privacy policy (this "Privacy Policy") is to
              inform users of our Site of the following:
            </p>

            <ol start="1">
              <li value="1">
                <span>The personal data we will collect;</span>
                <span>
                  <br />
                </span>
              </li>

              <li value="2">
                <span>Use of collected data;</span>
                <span>
                  <br />
                </span>
              </li>

              <li value="3">
                <span>Who has access to the data collected;</span>
                <span>
                  <br />
                </span>
              </li>

              <li value="4">
                <span>The rights of Site users; and</span>
                <span>
                  <br />
                </span>
              </li>

              <li value="5">
                <span>The Site's cookie policy.</span>
                <span>
                  <br />
                </span>
              </li>
            </ol>

            <p>
              This Privacy Policy applies in addition to the terms and
              conditions of our Site.
            </p>

            <div>
              <p>
                <span>GDPR</span>
                <br />
                For users in the European Union, we adhere to the Regulation
                (EU) 2016/679 of the European Parliament and of the Council of
                27 April 2016, known as the General Data Protection Regulation
                (the "GDPR"). For users in the United Kingdom, we adhere to the
                GDPR as enshrined in the Data Protection Act 2018.
                <br />
                <br />
                We have not appointed a Data Protection Officer as we do not
                fall within the categories of controllers and processors
                required to appoint a Data Protection Officer under Article 37
                of the GDPR.
              </p>
            </div>

            <div>
              <p>
                <span>Consent</span>
                <br />
                By using our Site users agree that they consent to:
              </p>

              <ol start="1">
                <li value="1">
                  <span>The conditions set out in this Privacy Policy.</span>
                  <span>
                    <br />
                  </span>
                </li>
              </ol>

              <p>
                When the legal basis for us processing your personal data is
                that you have provided your consent to that processing, you may
                withdraw your consent at any time. If you withdraw your consent,
                it will not make processing which we completed before you
                withdrew your consent unlawful.
              </p>

              <p>
                You can withdraw your consent by: Contact the Data Protection
                Officer Rob Saunders.
              </p>
            </div>

            <div>
              <p>
                <span>Legal Basis for Processing</span>
                <br />
                We collect and process personal data about users in the EU only
                when we have a legal basis for doing so under Article 6 of the
                GDPR.
                <br />
                <br />
                We rely on the following legal bases to collect and process the
                personal data of users in the EU:
              </p>

              <ol start="1">
                <li value="1">
                  <span>
                    Users have provided their consent to the processing of their
                    data for one or more specific purposes;
                  </span>
                  <span>
                    <br />
                  </span>
                </li>

                <li value="2">
                  <span>
                    Processing of user personal data is necessary for us or a
                    third pary to pursue a legitimate interest. Our legitimate
                    interest is not overriden by the interests or fundamenal
                    rights and freedoms of users. Our legitimate interest(s)
                    are: To respond to users' messages left via the contact
                    form.; and
                  </span>
                  <span>
                    <br />
                  </span>
                </li>

                <li value="3">
                  <span>
                    Processing of user personal data is necessary for us to
                    take, at the request of a user, steps before entering a
                    contract or for the performance of a contract to which a
                    user is a party. If a user does not provide the the personal
                    data necessary to perform a contract the consequences are as
                    follows: If a user does not provide their data, it is
                    impossible to contact them and answer their query.
                  </span>
                  <span>
                    <br />
                  </span>
                </li>
              </ol>
            </div>

            <p>
              <span>Personal Data We Collect</span>
              <br />
              We only collect data that helps us achieve the purpose set out in
              this Privacy Policy. We will not collect any additional data
              beyond the data listed below without notifying you first.
              <br />
              <br />
            </p>

            <p>
              <span>Data Collected Automatically</span>
              <br />
              When you visit and use our Site, we may automatically collect and
              store the following information:
            </p>

            <ol start="1">
              <li value="1">
                <span>IP address;</span>
                <span>
                  <br />
                </span>
              </li>

              <li value="2">
                <span>Clicked links; and</span>
                <span>
                  <br />
                </span>
              </li>

              <li value="3">
                <span>Content viewed.</span>
                <span>
                  <br />
                </span>
              </li>
            </ol>

            <p>
              <span>Data Collected in a Non-Automatic Way</span>
              <br />
              We may also collect the following data when you perform certain
              functions on our Site:
            </p>

            <ol start="1">
              <li value="1">
                <span>First and last name;</span>
                <span>
                  <br />
                </span>
              </li>

              <li value="2">
                <span>Email address; and</span>
                <span>
                  <br />
                </span>
              </li>

              <li value="3">
                <span>Phone number.</span>
                <span>
                  <br />
                </span>
              </li>
            </ol>

            <p>This data may be collected using the following methods:</p>

            <ol start="1">
              <li value="1">
                <span>
                  Only when a user completes and submits the online contact
                  form.
                </span>
                <span>
                  <br />
                </span>
              </li>
            </ol>

            <p>
              <span>How We Use Personal Data</span>
              <br />
              Data collected on our Site will only be used for the purposes
              specified in this Privacy Policy or indicated on the relevant
              pages of our Site. We will not use your data beyond what we
              disclose in this Privacy Policy.
              <br />
              <br />
              The data we collect automatically is used for the following
              purposes:
            </p>

            <ol start="1">
              <li value="1">
                <span>
                  Analytics on the website to see how it is performing. The data
                  will be used solely for the purpose of optimising the content
                  and or layout..
                </span>
                <span>
                  <br />
                </span>
              </li>
            </ol>

            <p>
              The data we collect when the user performs certain functions may
              be used for the following purposes:
            </p>

            <ol start="1">
              <li value="1">
                <span>To respond to the user.</span>
                <span>
                  <br />
                </span>
              </li>
            </ol>

            <p>
              <span>Who We Share Personal Data With</span>
              <br />
              <span>Employees</span>
              <br />
              We may disclose user data to any member of our organisation who
              reasonably needs access to user data to achieve the purposes set
              out in this Privacy Policy.
            </p>

            <div>
              <p>
                <span>Other Disclosures</span>
                <br />
                We will not sell or share your data with other third parties,
                except in the following cases:
              </p>

              <ol start="1">
                <li value="1">
                  <span>If the law requires it;</span>
                  <span>
                    <br />
                  </span>
                </li>

                <li value="2">
                  <span>If it is required for any legal proceeding;</span>
                  <span>
                    <br />
                  </span>
                </li>

                <li value="3">
                  <span>To prove or protect our legal rights; and</span>
                  <span>
                    <br />
                  </span>
                </li>

                <li value="4">
                  <span>
                    To buyers or potential buyers of this company in the event
                    that we seek to sell the company.
                  </span>
                  <span>
                    <br />
                  </span>
                </li>
              </ol>

              <p>
                If you follow hyperlinks from our Site to another Site, please
                note that we are not responsible for and have no control over
                their privacy policies and practices.
              </p>
            </div>

            <p>
              <span>How Long We Store Personal Data</span>
              <br />
              User data will be stored until the purpose the data was collected
              for has been achieved.
              <br />
              <br />
              You will be notified if your data is kept for longer than this
              period.
            </p>

            <p>
              <span>How We Protect Your Personal Data</span>
              <br />
              To protect user data, the website is secured using a valid SSL
              certificate to ensure that all data transmitted from the web pages
              are encrypted. The email automation service, emailjs and the email
              that collects the data are both secured using strong passwords.
              <br />
              <br />
              While we take all reasonable precautions to ensure that user data
              is secure and that users are protected, there always remains the
              risk of harm. The Internet as a whole can be insecure at times and
              therefore we are unable to guarantee the security of user data
              beyond what is reasonably practical.
            </p>

            <p>
              <span>Your Rights as a User</span>
              <br />
              Under the GDPR, you have the following rights:
            </p>

            <ol start="1">
              <li value="1">
                <span>Right to be informed;</span>
                <span>
                  <br />
                </span>
              </li>

              <li value="2">
                <span>Right of access;</span>
                <span>
                  <br />
                </span>
              </li>

              <li value="3">
                <span>Right to rectification;</span>
                <span>
                  <br />
                </span>
              </li>

              <li value="4">
                <span>Right to erasure;</span>
                <span>
                  <br />
                </span>
              </li>

              <li value="5">
                <span>Right to restrict processing;</span>
                <span>
                  <br />
                </span>
              </li>

              <li value="6">
                <span>Right to data portability; and</span>
                <span>
                  <br />
                </span>
              </li>

              <li value="7">
                <span>Right to object.</span>
                <span>
                  <br />
                </span>
              </li>
            </ol>

            <div>
              <p>
                <span>Children</span>
                <br />
                We do not knowingly collect or use personal data from children
                under 16 years of age. If we learn that we have collected
                personal data from a child under 16 years of age, the personal
                data will be deleted as soon as possible. If a child under 16
                years of age has provided us with personal data their parent or
                guardian may contact our privacy officer.
              </p>
            </div>

            <p>
              <span>
                How to Access, Modify, Delete, or Challenge the Data Collected
              </span>
              <br />
              If you would like to know if we have collected your personal data,
              how we have used your personal data, if we have disclosed your
              personal data and to who we disclosed your personal data, if you
              would like your data to be deleted or modified in any way, or if
              you would like to exercise any of your other rights under the
              GDPR, please contact our privacy officer here:
              <br />
              <br />
              Robert Saunders
              <br />
              <span id="emailAddressTwo" className="revealEmailSpan">
                <button
                  data-id="emailAddressTwo"
                  className="btn btn-primary btn-lg navCTA"
                  onClick={printEmail}
                >
                  Reveal Email
                </button>
              </span>
              <br />
              07530 893607
              <br />
              Somerset, UK
            </p>

            <div>
              <p>
                <span>Cookie Policy</span>
                <br />A cookie is a small file, stored on a user's hard drive by
                a website. Its purpose is to collect data relating to the user's
                br /owsing habits. You can choose to be notified each time a
                cookie is transmitted. You can also choose to disable cookies
                entirely in your internet br /owser, but this may decrease the
                quality of your user experience.
              </p>

              <p>We use the following types of cookies on our Site:</p>

              <ol start="1">
                <li value="1">
                  <span>Functional cookies</span>
                  <br />
                  Functional cookies are used to remember the selections you
                  make on our Site so that your selections are saved for your
                  next visits; and
                  <span>
                    <br />
                  </span>
                </li>

                <li value="2">
                  <span>Analytical cookies</span>
                  <br />
                  Analytical cookies allow us to improve the design and
                  functionality of our Site by collecting data on how you access
                  our Site, for example data on the content you access, how long
                  you stay on our Site, etc.
                  <span>
                    <br />
                  </span>
                </li>
              </ol>
            </div>

            <p>
              <span>Modifications</span>
              <br />
              This Privacy Policy may be amended from time to time in order to
              maintain compliance with the law and to reflect any changes to our
              data collection process. When we amend this Privacy Policy we will
              update the "Effective Date" at the top of this Privacy Policy. We
              recommend that our users periodically review our Privacy Policy to
              ensure that they are notified of any updates. If necessary, we may
              notify users by email of changes to this Privacy Policy.
            </p>

            <p>
              <span>Complaints</span>
              <br />
              If you have any complaints about how we process your personal
              data, please contact us through the contact methods listed in the{" "}
              <span>Contact Information</span> section so that we can, where
              possible, resolve the issue. If you feel we have not addressed
              your concern in a satisfactory manner you may contact a
              supervisory authority. You also have the right to directly make a
              complaint to a supervisory authority. You can lodge a complaint
              with a supervisory authority by contacting the ICO.
            </p>

            <p>
              <span>Contact Information</span>
              <br />
              If you have any questions, concerns or complaints, you can contact
              our privacy officer, Robert Saunders, at:
              <br />
              <br />
              me@rob-saunders.co.uk
              <br />
              07530 893607
              <br />
              Somerset, UK
            </p>

            <div className="LDCopyright">
              <p>&copy;2002-2023 LawDepot.co.uk&reg;</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPage;
