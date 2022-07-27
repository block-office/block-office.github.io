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

const InvestorImage = styled.img`
  // margin: 2em;
`;

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
          <InvestorImage src={getInvestorImage("accel.svg")} />
          <InvestorImage src={getInvestorImage("atomico.svg")} />
          <InvestorImage src={getInvestorImage("coinbase.svg")} />
          <InvestorImage src={getInvestorImage("draper.svg")} />
          <InvestorImage src={getInvestorImage("kkr.svg")} />
          <InvestorImage src={getInvestorImage("nansen.svg")} />
          <InvestorImage src={getInvestorImage("revolut.svg")} />
          <InvestorImage src={getInvestorImage("sequoia.svg")} />
          <InvestorImage src={getInvestorImage("solana.svg")} />
          <InvestorImage src={getInvestorImage("temasek.svg")} />
          <InvestorImage src={getInvestorImage("wise.svg")} />
        </InvestorImages>
      </AboutContainer>
    </div>
  );
};
