import { Navigation } from "./components/navigation/navigation";
import { Splash } from "./components/splash";
import { AboutV2 } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import styled from "styled-components";
import { ColorKey, COLORS, getColor } from "./colors";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 750,
  speedAsDuration: true
});

const BoundingBox = ({ maxWidth, children }: { maxWidth: string; children: React.ReactNode }) => {
  return <div style={{ width: "100%", maxWidth }}>{children}</div>;
};

const CenteredPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // background: ${getColor(ColorKey.BACKGROUND)};
  z-index: -2;
`;

const App = () => {
  return (
    <CenteredPageContainer>
      <BoundingBox maxWidth={"1440px"}>
        <Navigation />
        <BoundingBox maxWidth="100%">
          <Splash />
        </BoundingBox>
        <BoundingBox maxWidth="100%">
          <Contact />
        </BoundingBox>
        <BoundingBox maxWidth="100%">
          <AboutV2 />
        </BoundingBox>
        <BoundingBox maxWidth="100%">
          <Footer />
        </BoundingBox>
      </BoundingBox>
    </CenteredPageContainer>
  );
};

export default App;
