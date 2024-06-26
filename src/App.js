import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Routers from './Routers/Routers';
import CookieConsent from 'react-cookie-consent';

function App() {
  return (
    <>
        <NavBar />

        <Routers />
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Close"
        cookieName="myAwesomeCookieName2"
        style={{ background: "var(--brandColor" }}
        buttonStyle={{ background: "var(--brandGreen", color: "#4e503b", fontSize: "20px" }}
        expires={150}
      >
        <span style={{ fontSize: "16px" }}>
        By continuing to use this site, you agree to its use of cookies. If you do not consent, please exit the website.{" "}
        </span>
        <span style={{ fontSize: "12px" }}>This includes Google Analytics and LocalStorage to provide a smooth user-experience - <a id='cookie-link' href="/privacy-policy">Privacy Policy</a></span>
      </CookieConsent>
    </>
  );
};

export default App;
