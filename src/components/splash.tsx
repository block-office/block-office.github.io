import styled from "@emotion/styled";
import { breakpoint } from "../breakpoints";
import { ColorKey, COLORS, getColor } from "../colors";
import { FontKey, getFont } from "../fonts";
import { SignUp } from "./signup/signup";

const SplashContainer = styled.div`
  margin: 0em 0 0 0;
  @media ${breakpoint.xs} {
    margin: 0rem 0 0;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SplashTextContainer = styled.div`
  display: block;
  text-align: start;
  color: ${getColor(ColorKey.Primary1A)};
  margin-left: 0;
`;

const TagLine = styled.div`
  font-size: 3.25em;
  font-weight: 500;
  font-family: ${getFont(FontKey.HEADING)};
`;

const OneLiner = styled.div`
  font-size: 1.5em;
  font-weight: 500;
  margin-top: 1em;
  line-height: 1.5em;
`;

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
`;

const SplashImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
  width: 35%;
`;

const SplashImage = styled.img`
  width: 100%;
`;

export const Splash = () => {
  return (
    <SplashContainer>
      <SplashTextContainer>
        <TagLine>Your dedicated Web3 CFO</TagLine>
        <OneLiner>Setup, accounting, payroll, compliance, tax, and filings</OneLiner>
        <SignUpContainer>
          <SignUp />
        </SignUpContainer>
      </SplashTextContainer>
      <SplashImageContainer>
        <SplashImage src="img/banner.png" />
      </SplashImageContainer>
    </SplashContainer>
  );
};
