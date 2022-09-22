import styled from "@emotion/styled";
import { BsCheckCircleFill } from "react-icons/bs";
import { breakpoint } from "../breakpoints";
import { ColorKey, getColor } from "../colors";
import { H2d, HR } from "../stylePrimitives";
import { SignUp } from "./signup/signup";

const Container = styled.div`
  margin: 5em 0 0 0;
  padding: 5em 0 5em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${getColor(ColorKey.Background2)};
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
`;

const ImageContainer = styled.div`
  margin: 0 3rem 0 0;
`;

const Image = styled.img`
  content: url("img/banner-2.svg");
  width: 100%;
`;

const TextContainer = styled.div`
  color: ${getColor(ColorKey.Primary2A)};
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 1rem;

  @media ${breakpoint.xs} {
    width: 100%;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ItemBody = styled.span`
  color: ${getColor(ColorKey.Primary2B)};
`;

const SignUpContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 2em;
`;

const Item = ({ children }: { children: React.ReactNode }) => {
  return (
    <ItemContainer>
      <BsCheckCircleFill size={18} fill={getColor(ColorKey.NoticeBackground)} />
      <ItemBody>{children}</ItemBody>
    </ItemContainer>
  );
};

export const Focus = () => {
  return (
    <Container>
      <HR color={getColor(ColorKey.Primary2A)} />
      <H2d>Focus on growth, we have your back covered</H2d>
      <ContentContainer>
        <ImageContainer>
          <Image />
        </ImageContainer>
        <TextContainer>
          <span>We offer a range of services to serve your back office needs</span>
          <List>
            <Item>CFO Services (fundraising, advisory and more)</Item>
            <Item>Management Accounting</Item>
            <Item>Bookkeeping</Item>
            <Item>Bank Account Opening</Item>
            <Item>Web3 Wallet Setup &amp; Ledger</Item>
            <Item>Tax Optimization</Item>
            <Item>Restructuring</Item>
          </List>
          <SignUpContainer>
            <SignUp />
          </SignUpContainer>
        </TextContainer>
      </ContentContainer>
    </Container>
  );
};
