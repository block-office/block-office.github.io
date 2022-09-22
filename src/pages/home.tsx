import { Navigation } from "../components/navigation/navigation";
import { Splash } from "../components/splash";
import { About } from "../components/about";
import { Focus } from "../components/focus";
import { WhyUs } from "../components/whyus";
import { Offerings } from "../components/offerings";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import SmoothScroll from "smooth-scroll";
import styled from "@emotion/styled";
import { ColorKey, getColor } from "../colors";
import { useBackgroundColor } from "../hooks/useBackgroundColor";
import { useTextColor } from "../hooks/useTextColor";
import { CookieConsent } from "../components/cookieConsent";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 750,
  speedAsDuration: true
});

const BoundingBox = ({ maxWidth, children }: { maxWidth: string; children: React.ReactNode }) => {
  return <div style={{ width: "100%", maxWidth }}>{children}</div>;
};

const maxPageWidth = "1440px";
const CenteredPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoHorizontal = styled.div``;

export const Home = () => {
  useBackgroundColor(getColor(ColorKey.Background));
  useTextColor(getColor(ColorKey.Primary1A));
  return (
    <NoHorizontal>
      <CenteredPageContainer>
        <BoundingBox maxWidth={maxPageWidth}>
          <Navigation />
          <Splash />
        </BoundingBox>
      </CenteredPageContainer>
      <CenteredPageContainer>
        <BoundingBox maxWidth={maxPageWidth}>
          <About />
          <Focus />
        </BoundingBox>
      </CenteredPageContainer>
      <CenteredPageContainer>
        <BoundingBox maxWidth={maxPageWidth}>
          <WhyUs />
          <Offerings />
          <CenteredPageContainer>
            <Contact />
          </CenteredPageContainer>
          <Footer />
        </BoundingBox>
      </CenteredPageContainer>
      <CookieConsent />
    </NoHorizontal>
  );
};
