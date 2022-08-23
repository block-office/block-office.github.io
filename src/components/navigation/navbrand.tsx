import styled from "@emotion/styled";

const NavBrandLink = styled.a`
  text-decoration: none;
`;

const NavBrandImg = styled.img`
  height: 45px;
  margin-right: 0.6em;
`;

const NavBrandContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavBrand = () => {
  return (
    <NavBrandContainer>
      <NavBrandLink href="#page-top">
        <NavBrandImg src="img/logo-color.svg" alt="logo" />
      </NavBrandLink>
    </NavBrandContainer>
  );
};
