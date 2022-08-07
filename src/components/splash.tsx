import styled from "styled-components";
import { breakpoint } from "../breakpoints";
import { FontKey, getFont } from "../fonts";
import { SignUp } from "./signUp/signUp";

const SplashContainer = styled.div`
  margin: 12em 0 0;
  @media ${breakpoint.xs} {
    margin: 8rem 0 0;
  }
  display: flex;
  justify-content: center;
`;

const SplashTextContainer = styled.div`
  display: block;
  text-align: center;
  color: #fff;
  width: 90%;
`;

const TagLine = styled.div`
  font-size: 3.25em;
  font-weight: 500;
  font-family: ${getFont(FontKey.HEADING)};
`;

const OneLiner = styled.div`
  font-size: 1em;
  font-weight: 300;
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
        <OneLiner>We handle all your web2 and web3 corporate services, accounting, tax, and audit needs</OneLiner>
        <SignUpContainer>
          <SignUp />
        </SignUpContainer>
      </SplashTextContainer>
    </SplashContainer>
  );
};
