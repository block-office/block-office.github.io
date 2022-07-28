import React from "react";
import styled from "styled-components";
import { COLORS } from "../../colors";
import { NavBrand } from "./navbrand";

import { breakpoint } from "../../breakpoints";

const NavFixedPosition = styled.div`
  width: 100%;
  top: 0;
`;
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1em 2em;
`;

const NavLeft = styled.nav`
  display: flex;
`;

const NavRight = styled.nav`
  display: flex;
`;

const Nav = ({ left, right }: { left: React.ReactNode; right: React.ReactNode }) => {
  return (
    <NavFixedPosition>
      <NavContainer>
        <NavLeft>{left}</NavLeft>
        <NavRight>{right}</NavRight>
      </NavContainer>
    </NavFixedPosition>
  );
};

const NavLinks = styled.div`
  display: flex;
  @media ${breakpoint.xs} {
    display: none;
  }
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  border-radius: 0;
  margin-left: 1.5em;
  text-decoration: none;
`;

const NavCTA = styled.div`
  padding: 0.8em 2em;
  border-radius: 4px;
  background: ${COLORS.NAVY};
`;

export const Navigation = () => {
  return (
    <Nav
      left={<NavBrand />}
      right={
        <NavLinks>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">
            <NavCTA>Join waitlist</NavCTA>
          </NavLink>
        </NavLinks>
      }
    />
  );
};
