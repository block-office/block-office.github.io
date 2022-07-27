import styled from "styled-components";
import { breakpoint } from "../breakpoints";

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
`;

const OneLiner = styled.div`
  font-size: 1em;
  font-weight: 300;
  margin-top: 1em;
`;

export const Splash = () => {
  return (
    <SplashContainer>
      <SplashTextContainer>
        <TagLine>Your dedicated back office</TagLine>
        <OneLiner>We simplify the complexity and hassle of managing your own team</OneLiner>
      </SplashTextContainer>
    </SplashContainer>
  );
};
