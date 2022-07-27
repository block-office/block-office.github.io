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
  color: ${getColor(ColorKey.PRIMARY)};
  letter-spacing: 0.1em;
  font-weight: 400;
  font-size: 1.25em;
`;

const InvestorImages = styled.div`
  display: flex;
  width: 70%;
  gap: 2em;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1em;
`;

const InvestorImage = styled.img<{ imgSrc: string }>`
@media (prefers-color-scheme: dark) {
  content: url('img/partners/dark/${(props) => props.imgSrc}')
}

@media (prefers-color-scheme: light) {
  content: url('img/partners/light/${(props) => props.imgSrc}')
  }
}`;

function getInvestorImage(svg: string) {
  var prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDarkScheme ? "img/partners/dark/" + svg : "img/partners/light/" + svg;
}

export const AboutV2 = () => {
  return (
    <div id="about">
      <AboutContainer>
        <AboutText>backed by investors from</AboutText>
        <InvestorImages>
          <InvestorImage imgSrc={"accel.svg"} />
          <InvestorImage imgSrc={"atomico.svg"} />
          <InvestorImage imgSrc={"coinbase.svg"} />
          <InvestorImage imgSrc={"draper.svg"} />
          <InvestorImage imgSrc={"kkr.svg"} />
          <InvestorImage imgSrc={"nansen.svg"} />
          <InvestorImage imgSrc={"revolut.svg"} />
          <InvestorImage imgSrc={"sequoia.svg"} />
          <InvestorImage imgSrc={"solana.svg"} />
          <InvestorImage imgSrc={"temasek.svg"} />
          <InvestorImage imgSrc={"wise.svg"} />
        </InvestorImages>
      </AboutContainer>
    </div>
  );
};
