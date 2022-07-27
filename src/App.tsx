import { Navigation } from "./components/navigation/navigation";
import { Splash } from "./components/splash";
import { AboutV2 } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import styled from "styled-components";
import { ColorKey, getColor } from "./colors";
import { useBackgroundColor } from "./hooks/useBackgroundColor";
import { useTextColor } from "./hooks/useTextColor";
import { breakpoint } from "./breakpoints";

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
  background-image: url("img/curve-light.svg");
  background-position: top center;
  background-size: auto 100vw;
  position: relative;
  top: -200px;
  padding-top: 50px;
  width: 100vw;

  @media ${breakpoint.xs} {
    top: -270px;
  }

  @media (prefers-color-scheme: dark) {
    background-image: url("img/curve-dark.svg");
  }
`;

const NoHorizontal = styled.div``;

const App = () => {
  useBackgroundColor(getColor(ColorKey.BACKGROUND));
  useTextColor(getColor(ColorKey.PRIMARY));
  return (
    <NoHorizontal>
      <RainbowContainer>
        <CenteredPageContainer>
          <BoundingBox maxWidth={maxPageWidth}>
            <Navigation />
            <Splash />
            <Contact />
          </BoundingBox>
        </CenteredPageContainer>
      </RainbowContainer>
      <CurveContainer>
        <CenteredPageContainer>
          <BoundingBox maxWidth={maxPageWidth}>
            <AboutV2 />
            <Footer />
          </BoundingBox>
        </CenteredPageContainer>
      </CurveContainer>
    </NoHorizontal>
  );
};

export default App;
