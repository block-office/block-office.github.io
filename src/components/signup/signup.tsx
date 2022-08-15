import React from "react";
import styled from "@emotion/styled";
import { ColorKey, getColor } from "../../colors";

const SignUpLink = styled.a`
  color: ${getColor(ColorKey.NoticePrimary)};
  font-size: 16px;
  font-weight: 300;
  border-radius: 0;
  text-decoration: none;
`;

const SignUpCTA = styled.div`
  padding: 0.75em 1.75em;
  border-radius: 4px;
  background: ${getColor(ColorKey.NoticeBackground)};
  font-weight: 500;
  color: ${getColor(ColorKey.NoticePrimary)};
`;

export const SignUp = () => {
  return (
    <SignUpLink href="#contact">
      <SignUpCTA>Learn More</SignUpCTA>
    </SignUpLink>
  );
};
