import { useEffect } from "react";
import { CookieConsent as ReactCookieConsent, Cookies, getCookieConsentValue } from "react-cookie-consent";
import { initGA } from "../googleAnalytics";

const handleDeclineCookie = () => {
  //remove google analytics cookies
  Cookies.remove("_ga");
  Cookies.remove("_gat");
  Cookies.remove("_gid");
};

const handleAcceptCookie = () => {
  const gId = "G-T3PW3BWKJK"; // cspell:disable-line
  if (gId) {
    initGA(gId);
  }
};

export const CookieConsent = () => {
  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);

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
      onAccept={handleAcceptCookie}
      onDecline={handleDeclineCookie}
    >
      We use cookies to enhance your browsing experience, and analyze our traffic. By clicking "Accept All", you consent
      to our use of cookies.
    </ReactCookieConsent>
  );
};
