import styled from "styled-components";
import { COLORS } from "../colors";
import { breakpoint } from "../breakpoints";

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2em 0 2em 0;
`;

const EmailFormBox = styled.form`
  background: #fff;
  border-radius: 4px;
  display: flex;
  padding: 0.25em;
  justify-content: space-between;
`;

const EmailInput = styled.input`
  color: #000;
  margin: 0 1em 0 1em;
  background: none;
  border: 0;
  size: 100;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #bababa;
    font-family: "Heebo", sans-serif;
    font-weight: 300;
  }
`;

const CTA = styled.button`
  padding: 0.75em 2em;
  border-radius: 4px;
  background: ${COLORS.NAVY};
  display: flex;
  align-items: center;
  color: #fff;
`;

function getInputSize() {
  const query = window.matchMedia(breakpoint.xs);
  if (query.matches) {
    return 25;
  }
  return 35;
}

export const Contact = () => {
  return (
    <ContactContainer>
      <EmailFormBox action="https://getform.io/f/df6ce6ea-44dd-4f44-9bd5-5365a060920c" method="POST">
        <EmailInput type="email" name="email" placeholder="Enter email address" size={getInputSize()} />
        <CTA type="submit">Join waitlist</CTA>
      </EmailFormBox>
    </ContactContainer>
  );
};
