import styled from "styled-components";
import { ColorKey, COLORS, getColor } from "../colors";
import { breakpoint } from "../breakpoints";
import { validateEmail } from "../email-validate";
import { useForm } from "../hooks/useForm";
import { useState } from "react";
import { FontKey, getFont } from "../fonts";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 0 5em 0;
`;

const ContactHeader = styled.span`
  color: ${getColor(ColorKey.Primary1A)};
  font-weight: 700;
  font-size: 1.75em;
  text-align: center;
`;

const ContactFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 2em;
  gap: 1em;
`;

const FormBox = styled.div<{ width: string }>`
  background: ${COLORS.WHITE};
  border-radius: 4px;
  display: flex;
  padding: 0.25em;
  justify-content: space-between;
  border: 1px solid black;
  width: ${(props) => props.width};
`;

const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const EmailInput = styled.input`
  color: #000;
  margin: 0.25em 0.5em;
  background: none;
  border: 0;

  font-family: ${getFont(FontKey.BODY)};
  font-weight: 400;
  font-size: 13px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #bababa;
    font-family: ${getFont(FontKey.BODY)};
    font-weight: 400;
    font-size: 14px;
  }
`;

const SubjectInput = styled.input`
  color: #000;
  margin: 0.25em 0.5em;
  background: none;
  border: 0;

  font-family: ${getFont(FontKey.BODY)};
  font-weight: 400;
  font-size: 13px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #bababa;
    font-family: ${getFont(FontKey.BODY)};
    font-weight: 400;
    font-size: 14px;
  }
`;

const MessageInput = styled.textarea`
  color: #000;
  margin: 0.25rem 0.5rem;
  background: none;
  border: 0;

  font-family: ${getFont(FontKey.BODY)};
  font-weight: 400;
  font-size: 13px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #bababa;
    font-family: ${getFont(FontKey.BODY)};
    font-weight: 400;
    font-size: 14px;
  }
`;

const CTA = styled.button`
  padding: 0.75em 1.75em;
  margin-top: 1em;
  border-radius: 4px;
  background: ${getColor(ColorKey.NoticeBackground)};
  display: flex;
  align-items: center;
  color: ${getColor(ColorKey.NoticePrimary)};
  font-weight: 500;
  border: 0;

  &:disabled {
    background: ${getColor(ColorKey.Success)};
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
      },
      subject: {},
      message: {}
    },
    onSubmit: async () => {
      const { email, subject, message } = data;
      const URL = "https://getform.io/f/df6ce6ea-44dd-4f44-9bd5-5365a060920c";
      const formData = new FormData();
      formData.append("email", email as string);
      formData.append("subject", subject as string);
      formData.append("message", message as string);

      await fetch(URL, {
        method: "POST",
        body: formData
      });
      setSuccessfullySubmitted(true);
    },
    initialValues: { email: "", subject: "", message: "" }
  });

  return (
    <ContactContainer id="contact">
      <ContactHeader>Be the first to experience BlockOffice</ContactHeader>
      <ContactFormContainer>
        <form onSubmit={handleSubmit}>
          <FormInputs>
            <FormBox width="15em">
              <EmailInput
                type="email"
                name="email"
                placeholder="What's your email address?"
                value={(data.email || "") as string}
                size={getInputSize()}
                onChange={handleChange("email")}
                required
              />
            </FormBox>
            <FormBox width="25em">
              <SubjectInput
                type="text"
                name="subject"
                placeholder="Who do you represent?"
                value={(data.subject || "") as string}
                size={getInputSize()}
                onChange={handleChange("subject")}
                required
              />
            </FormBox>
            <FormBox width="25em">
              <MessageInput
                name="message"
                placeholder="Which particular use cases are you interested in?"
                value={(data.message || "") as string}
                onChange={handleChange("message")}
                cols={150}
                rows={10}
                required
              />
            </FormBox>
          </FormInputs>
          <CTA type="submit" disabled={submitSuccess}>
            {submitSuccess ? "Thanks!" : "Send Message"}
          </CTA>
        </form>
      </ContactFormContainer>
    </ContactContainer>
  );
};
