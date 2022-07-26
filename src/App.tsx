import { Navigation } from "./components/navigation";
import { Splash } from "./components/splash";
import { AboutV2 } from "./components/about";
import { ContactV2 } from "./components/contact";
import { Footer } from "./components/footer";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 750,
  speedAsDuration: true,
});

const BoundingBox = ({
  maxWidth,
  children,
}: {
  maxWidth: string;
  children: React.ReactNode;
}) => {
  return <div style={{ width: "100%", maxWidth }}>{children}</div>;
};

const App = () => {
  return (
    <div>
      <Navigation />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <BoundingBox maxWidth={"1440px"}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <BoundingBox maxWidth="85%">
              <Splash />
            </BoundingBox>
            <BoundingBox maxWidth="100%">
              <AboutV2 />
            </BoundingBox>
            <BoundingBox maxWidth="100%">
              <ContactV2 />
            </BoundingBox>
            <BoundingBox maxWidth="100%">
              <Footer />
            </BoundingBox>
          </div>
        </BoundingBox>
      </div>
    </div>
  );
};

export default App;
