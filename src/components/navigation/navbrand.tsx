import styled from "styled-components";

const NavBrandLink = styled.a`
  text-decoration: none;
`;

const NavBrandTextContainer = styled.div`
  display: block;
  text-align: left;
  vertical-align: middle;
`;

const NavBrandText = styled.div`
  font-size: 24px;
  font-weight: 500;
  font-family: "Lexend Deca";
  color: #fff;
`;

const NavBrandImg = styled.img`
  width: 40px;
  margin-right: 0.6em;
`;

const NavBrandContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavBrand = () => {
  return (
    <NavBrandContainer>
      <NavBrandImg src="img/logo-bw.svg" width="40px" alt="logo" />
      <NavBrandLink href="#page-top">
        <NavBrandTextContainer>
          <NavBrandText>Block</NavBrandText>
          <NavBrandText>Office</NavBrandText>
        </NavBrandTextContainer>
      </NavBrandLink>
    </NavBrandContainer>
  );
};
