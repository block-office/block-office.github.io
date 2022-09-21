import { Navigation } from "../components/navigation/navigation";
import { Splash } from "../components/splash";
import { About } from "../components/about";
import { WhyUs } from "../components/whyus";
import { Services } from "../components/services";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import styled from "@emotion/styled";
import { ColorKey, getColor } from "../colors";
import { useBackgroundColor } from "../hooks/useBackgroundColor";
import { useTextColor } from "../hooks/useTextColor";
import { breakpoint } from "../breakpoints";
import { LeftFractal, RightFractal } from "../components/floatingFractals";
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

const RainbowContainer = styled.div`
  background-image: url("img/banner.svg");
  background-size: cover;
  padding-bottom: 300px;
  width: 100vw;
`;

const CurveContainer = styled.div`
  background-image: url("img/curve-dark.svg");
  background-position: top center;
  background-size: auto 100vw;
  position: relative;
  top: -175px;
  padding-top: 50px;
  width: 100vw;

  @media ${breakpoint.xs} {
    top: -270px;
  }
`;

const NoHorizontal = styled.div``;

export const Home = () => {
  useBackgroundColor(getColor(ColorKey.Background));
  useTextColor(getColor(ColorKey.Primary1A));
  return (
    <NoHorizontal>
      <RainbowContainer>
        <CenteredPageContainer>
          <BoundingBox maxWidth={maxPageWidth}>
            <Navigation />
            <Splash />
          </BoundingBox>
        </CenteredPageContainer>
      </RainbowContainer>
      <CurveContainer>
        <CenteredPageContainer>
          <BoundingBox maxWidth={maxPageWidth}>
            <About />
          </BoundingBox>
        </CenteredPageContainer>
      </CurveContainer>
      <CenteredPageContainer>
        <BoundingBox maxWidth={maxPageWidth}>
          <LeftFractal />
          <WhyUs />
          <RightFractal />
          <Services />
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
