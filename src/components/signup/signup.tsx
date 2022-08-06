import React from "react";
import styled from "styled-components";
import { COLORS } from "../../colors";

const SignupLink = styled.a`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  border-radius: 0;
  text-decoration: none;
`;

const SignupCTA = styled.div`
  padding: 0.75em 1.75em;
  border-radius: 4px;
  background: ${COLORS.NAVY};
  font-weight: 500;
`;

export const Signup = () => {
  return (
    <SignupLink href="#contact">
      <SignupCTA>Learn More</SignupCTA>
    </SignupLink>
  );
};
