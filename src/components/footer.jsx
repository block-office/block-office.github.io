import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em 0;
`;

const today = new Date();

export const Footer = () => {
  return (
    <FooterContainer id="footer">
      <span>Copyright &copy; {today.getFullYear()} Block Office</span>
    </FooterContainer>
  );
};
