import styled from "@emotion/styled";
import { breakpoint } from "../breakpoints";
import { COLORS } from "../colors";
import { FontKey, getFont } from "../fonts";
import { SignUp } from "./signup/signup";

const SplashContainer = styled.div`
  margin: 12em 0 0;
  @media ${breakpoint.xs} {
    margin: 5rem 0 0;
  }
  display: flex;
  justify-content: center;
`;

const SplashTextContainer = styled.div`
  display: block;
  text-align: center;
  color: ${COLORS.WHITE};
  width: 90%;
`;

const TagLine = styled.div`
  font-size: 3.25em;
  font-weight: 700;
  font-family: ${getFont(FontKey.HEADING)};
`;

const OneLiner = styled.div`
  font-size: 1em;
  font-weight: 500;
  margin-top: 1em;
`;

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
`;

export const Splash = () => {
  return (
    <SplashContainer>
      <SplashTextContainer>
        <TagLine>Your dedicated back office</TagLine>
        <OneLiner>We handle all your web3 and web2 corporate services, accounting, tax, and audit needs</OneLiner>
        <SignUpContainer>
          <SignUp />
        </SignUpContainer>
      </SplashTextContainer>
    </SplashContainer>
  );
};
