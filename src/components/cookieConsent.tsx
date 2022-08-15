import { CookieConsent as ReactCookieConsent } from "react-cookie-consent";

export const CookieConsent = () => {
  return (
    <ReactCookieConsent
      location="bottom"
      buttonText="Accept All"
      cookieName="gdprConsent"
      enableDeclineButton
      declineButtonText="Decline All"
      style={{ background: "#2B373B", fontSize: "14px" }}
      declineButtonStyle={{ borderRadius: "2px", padding: "0.5em 1em" }}
      buttonStyle={{ color: "#4e503b", fontSize: "14px", borderRadius: "2px", padding: "0.5em 1em" }}
      expires={150}
    >
      We use cookies to enhance your browsing experience, and analyze our traffic. By clicking "Accept All", you consent
      to our use of cookies.
    </ReactCookieConsent>
  );
};
