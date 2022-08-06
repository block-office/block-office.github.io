import styled from "styled-components";
import { ColorKey, COLORS, getColor } from "../colors";
import { breakpoint } from "../breakpoints";
import { validateEmail } from "../email-validate";
import { useForm } from "../hooks/useForm";
import { useState } from "react";
import { FontKey, getFont } from "../fonts";

const ContactContainer = styled.div`
  background-color: ${getColor(ColorKey.PRIMARY)};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 0 5em 0;
  color: ${getColor(ColorKey.BACKGROUND)};
`;

const ContactHeader = styled.span`
  font-weight: 700;
`;

const ContactFormContainer = styled.div`
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
    font-family: ${getFont(FontKey.BODY)};
    font-weight: 400;
  }
`;

const CTA = styled.button`
  padding: 0.75em 1.75em;
  border-radius: 4px;
  background: ${COLORS.NAVY};
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 500;
  border: 0;

  &:disabled {
    background: ${getColor(ColorKey.SUCCESS)};
    border: 0;
  }
`;

function getInputSize() {
  const query = window.matchMedia(breakpoint.xs);
  if (query.matches) {
    return 25;
  }
  return 35;
}

export const Contact = () => {
  const [submitSuccess, setSuccessfullySubmitted] = useState(false);
  const { handleSubmit, handleChange, data } = useForm({
    validations: {
      email: {
        custom: {
          isValid: validateEmail,
          message: "Please type a valid email"
        }
      }
    },
    onSubmit: async () => {
      const { email } = data;
      const URL = "https://getform.io/f/df6ce6ea-44dd-4f44-9bd5-5365a060920c";
      const formData = new FormData();
      formData.append("email", email);

      await fetch(URL, {
        method: "POST",
        body: formData
      });
      setSuccessfullySubmitted(true);
    },
    initialValues: { email: "" }
  });

  return (
    <ContactContainer id="contact">
      <ContactHeader>Be the first to experience BlockOffice</ContactHeader>
      <ContactFormContainer>
        <EmailFormBox onSubmit={handleSubmit}>
          <EmailInput
            type="email"
            name="email"
            placeholder="Enter email address"
            value={data.email || ""}
            size={getInputSize()}
            onChange={handleChange("email")}
            required
          />
          <CTA type="submit" disabled={submitSuccess}>
            {submitSuccess ? "Thanks!" : "Join waitlist"}
          </CTA>
        </EmailFormBox>
      </ContactFormContainer>
    </ContactContainer>
  );
};
