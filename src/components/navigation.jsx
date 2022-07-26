import styled from "styled-components";

const NavBrandLink = styled.a`
  text-decoration: none;
`;

const NavBrandTextContainer = styled.div`
  display: block;
  letter-spacing: 0.05rem;
  text-align: center;
  vertical-align: middle;
  line-height: 1.42857143;
`;

const NavBrand = styled.div`
  font-size: 24px;
  font-weight: 900;
  color: #333;
`;

const NavBrand2 = styled.div`
  font-size: 15px;
  font-weight: 900;
  margin-top: -0.55em;
`;

const NavBrandImg = styled.img`
  width: 40px;
  margin-left: 0.6em;
`;

const NavLink = styled.a`
  color: #555;
  font-size: 16px;
  font-weight: 400;
  padding: 8px 2px;
  border-radius: 0;
  margin: 0em 1.5em;
  text-decoration: none;
`;

const Nav = styled.nav``;
const NavbarBrand = (props) => {
  return (
    <div className="d-flex align-items-center">
      <NavBrandLink href="#page-top">
        <NavBrandTextContainer>
          <NavBrand className="serif">COMPANY NAME</NavBrand>
        </NavBrandTextContainer>
      </NavBrandLink>
      <NavBrandImg src="img/logo.png" width="40px" alt="logo" />
    </div>
  );
};

export const Navigation = (props) => {
  return (
    <nav
      id="menu"
      className="navbar fixed-top navbar-expand-lg navbar-light bg-light"
    >
      <div className="container">
        <NavbarBrand />
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav serif">
            <NavLink className="nav-link page-scroll" href="#about">
              ABOUT
            </NavLink>
            <NavLink className="nav-link page-scroll" href="#portfolio">
              PORTFOLIO
            </NavLink>
            <NavLink className="nav-link page-scroll" href="#team">
              TEAM
            </NavLink>
            <NavLink className="nav-link page-scroll" href="#contact">
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
