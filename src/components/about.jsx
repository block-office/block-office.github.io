import styled from "styled-components";

import { breakpoint } from "../breakpoints";

const AboutContainer = styled.div`
  // background: linear-gradient(to right, #7fc4fd 0%, #5f8dfd 100%);

  color: #fff;
  @media ${breakpoint.md} {
    padding: 5em 0 5em 0;
  }
  align-items: center;
`;

export const AboutV2 = (props) => {
  return (
    <div id="about">
      <AboutContainer>
        <div className="col-12 col-md-5 col-lg-3">
          <h2 className="white">About Us</h2>
        </div>
        <div className="col-12 col-md-7 col-lg-9">
          <div className="about-text">
            <p>Some about paragraph here.</p>
          </div>
        </div>
      </AboutContainer>
    </div>
  );
};
