import styled from "styled-components";

import { breakpoint } from "../breakpoints";
import { ColorKey, getColor } from "../colors";

const AboutContainer = styled.div`
  @media ${breakpoint.md} {
    padding: 3em 0 0 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutText = styled.div`
  font-variant: small-caps;
  color: ${getColor(ColorKey.Primary1A)};
  letter-spacing: 1px;
  font-weight: 400;
  font-size: 1.25em;
`;

const InvestorImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  gap: 2em;
  flex-wrap: wrap;
  margin-top: 1em;
`;

const InvestorImage = styled.img<{ imgSrc: string }>`
  content: url("img/partners/dark/${(props) => props.imgSrc}");
`;

export const About = () => {
  return (
    <div id="about">
      <AboutContainer>
        <AboutText>backed by investors from</AboutText>
        <InvestorImages>
          <InvestorImage imgSrc={"accel.svg"} />
          <InvestorImage imgSrc={"blockdaemon.svg"} />
          <InvestorImage imgSrc={"coinbase.svg"} />
          <InvestorImage imgSrc={"draper.svg"} />
          <InvestorImage imgSrc={"ey.svg"} height={"45px"} />
          <InvestorImage imgSrc={"kkr.svg"} />
          <InvestorImage imgSrc={"nansen.png"} height={"40px"} />
          <InvestorImage imgSrc={"nium.svg"} height={"50px"} />
          <InvestorImage imgSrc={"revolut.svg"} />
          <InvestorImage imgSrc={"stripe.svg"} />
          <InvestorImage imgSrc={"temasek.svg"} />
          <InvestorImage imgSrc={"wise.svg"} />
        </InvestorImages>
      </AboutContainer>
    </div>
  );
};
