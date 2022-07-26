import styled from "styled-components";

const FooterContainer = styled.div`
  padding: 2em 0;
`;

export const Footer = (props) => {
  return (
    <FooterContainer id="footer">
      <div className="footer-container text-center">
        <p>&copy; 2021 Biosphere Investment Group, LLC</p>
      </div>
    </FooterContainer>
  );
};
