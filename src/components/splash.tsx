import styled from "styled-components";

const SplashContainer = styled.div`
  margin: 12rem 0 0;
`;

const SplashImg = styled.img`
  max-width: 1440px;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
`;

const SplashTextContainer = styled.div`
  display: block;
  text-align: center;
  color: #fff;
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
      <SplashImg src="img/banner.svg" className="d-none d-md-block" alt="banner" />
      <SplashTextContainer>
        <TagLine>Your dedicated back office</TagLine>
        <OneLiner>We simplify the complexity and hassle of managing your own team</OneLiner>
      </SplashTextContainer>
    </SplashContainer>
  );
};
