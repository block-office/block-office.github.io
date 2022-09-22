import styled from "@emotion/styled";
import { ColorKey, COLORS, getColor } from "../colors";
import { breakpoint } from "../breakpoints";
import { validateEmail } from "../email-validate";
import { useForm } from "../hooks/useForm";
import { useState } from "react";
import { FontKey, getFont } from "../fonts";
import { FlexCol, FlexColC, HR } from "../stylePrimitives";

const ContactContainer = styled(FlexColC)`
  padding: 5rem 0;
  width: 90%;

  @media ${breakpoint.xs} {
    width: 100%;
  }
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
  gap: 1em;
`;

const FormBox = styled.div<{ width: string }>`
  background: ${COLORS.WHITE};
  border-radius: 2px;
  border: 1px solid ${getColor(ColorKey.Primary1A)};
  display: flex;
  padding: 0.25em 0;
  justify-content: space-between;

  width: ${(props) => props.width};
`;

const FormBoxOuter = styled(FlexCol)`
  gap: 0.25rem;b v  
`;

const FormLabel = styled.span`
  font-size: 0.85rem;
`;

const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
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

const Text = styled.span`
  margin: 1rem 0;
  text-align: center;
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
      <HR color={getColor(ColorKey.Primary1A)} />
      <ContactHeader>Contact us!</ContactHeader>
      <Text>Get in touch today to learn how we can provide customized help to your company!</Text>
      <ContactFormContainer>
        <form onSubmit={handleSubmit}>
          <FormInputs>
            <FormBoxOuter>
              <FormLabel>Name</FormLabel>
              <FormBox width="100%">
                <SubjectInput
                  type="text"
                  name="subject"
                  placeholder="How do we refer to you?"
                  value={(data.subject || "") as string}
                  size={getInputSize()}
                  onChange={handleChange("subject")}
                  required
                />
              </FormBox>
            </FormBoxOuter>
            <FormBoxOuter>
              <FormLabel>Email</FormLabel>
              <FormBox width="100%">
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
            </FormBoxOuter>
            <FormBoxOuter>
              <FormLabel>Message</FormLabel>
              <FormBox width="100%">
                <MessageInput
                  name="message"
                  placeholder="Which particular use cases are you interested in?"
                  value={(data.message || "") as string}
                  onChange={handleChange("message")}
                  cols={40}
                  rows={10}
                  required
                />
              </FormBox>
            </FormBoxOuter>
          </FormInputs>
          <CTA type="submit" disabled={submitSuccess}>
            {submitSuccess ? "Thanks!" : "Send Message"}
          </CTA>
        </form>
      </ContactFormContainer>
    </ContactContainer>
  );
};
