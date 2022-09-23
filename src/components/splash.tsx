import styled from "@emotion/styled";
import { breakpoint } from "../breakpoints";
import { ColorKey, getColor } from "../colors";
import { FontKey, getFont } from "../fonts";
import { RespRow } from "../stylePrimitives";
import { SignUp } from "./signup/signup";

const SplashContainer = styled(RespRow)`
  margin: 0em 0 2rem 0;
  @media ${breakpoint.xs} {
    margin: 2rem 0 2rem;
  }
  justify-content: center;
  align-items: center;
  gap: 2em;
`;

const SplashTextContainer = styled.div`
  display: block;
  text-align: center;
  color: ${getColor(ColorKey.Primary1A)};
  margin-left: 0;
  max-width: 50%;
  @media ${breakpoint.xs} {
    max-width: initial;
  }
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
  width: 35%;

  @media ${breakpoint.xs} {
    width: 60%;
  }
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
