import styled from "@emotion/styled";
import { ColorKey, getColor } from "../colors";

import { GrLinkedin, GrTwitter } from "react-icons/gr";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em 0 4em;
  gap: 1.5em;
  background: ${getColor(ColorKey.Background2)};
`;

const Copyright = styled.span`
  color: ${getColor(ColorKey.Primary2A)};
`;

const Email = styled.span`
  font-size: 18px;
  color: ${getColor(ColorKey.Primary2A)};
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 1rem;
`;
const today = new Date();

export const Footer = () => {
  return (
    <FooterContainer id="footer">
      <Email>
        Need something else? Drop us an email at <a href="mailto:help@blockoffice.com">help@blockoffice.com</a>
      </Email>
      <SocialMedia>
        <GrLinkedin size={30} color={getColor(ColorKey.Primary2A)} />
        <GrTwitter size={30} color={getColor(ColorKey.Primary2A)} />
      </SocialMedia>
      <Copyright>Copyright &copy; {today.getFullYear()} Block Office</Copyright>
    </FooterContainer>
  );
};
