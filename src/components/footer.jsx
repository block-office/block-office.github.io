import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;
  padding-top: 10em;
`;

const today = new Date();

export const Footer = () => {
  return (
    <FooterContainer id="footer">
      <span>Copyright &copy; {today.getFullYear()} Block Office</span>
    </FooterContainer>
  );
};
