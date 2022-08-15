import styled from "styled-components";
import { ColorKey, getColor } from "../colors";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2em 0;
  gap: 1.5em;
`;

const Copyright = styled.span`
  color: ${getColor(ColorKey.Primary1B)};
`;

const Email = styled.span`
  font-size: 18px;
`;

const today = new Date();

export const Footer = () => {
  return (
    <FooterContainer id="footer">
      <Email>
        Need something else? Drop us an email at <a href="mailto:help@blockoffice.com">help@blockoffice.com</a>
      </Email>
      <Copyright>Copyright &copy; {today.getFullYear()} Block Office</Copyright>
    </FooterContainer>
  );
};
