import { AiOutlineMail } from "react-icons/ai";
import styled from "styled-components";
import { breakpoint } from "../breakpoints";

const ContactContainer = styled.div`
  background: linear-gradient(to right, #7fc4fd 0%, #5f8dfd 100%);
  color: #fff;
  width: 100%;

  padding: 5em 3em 3em;
  @media ${breakpoint.md} {
    padding: 5em 8em;
  }
`;

const ContactContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const MailTo = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: inherit;
  }
`;

export const ContactV2 = (props) => {
  return (
    <div id="contact">
      <ContactContainer>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-4">
            <h2 className="white">Get In Touch</h2>
          </div>
          <div className="col-12 col-md-8">
            <div className="about-text">
              <ContactContent>
                <AiOutlineMail />
                <span className="contact-item">
                  <MailTo href="mailto:email@email.com">email@email.com</MailTo>
                </span>
              </ContactContent>
            </div>
          </div>
        </div>
      </ContactContainer>
    </div>
  );
};
