import styled from "@emotion/styled";
import { BsCheckCircleFill } from "react-icons/bs";
import { breakpoint } from "../breakpoints";
import { ColorKey, getColor } from "../colors";
import { H2d, HR, RespRow } from "../stylePrimitives";
import { SignUp } from "./signup/signup";

const Container = styled.div`
  margin: 5em 0 0 0;
  padding: 5em 0 5em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${getColor(ColorKey.Background2)};
`;

const ContentContainer = styled(RespRow)`
  align-items: center;
  justify-content: center;
  margin-top: 2em;
  width: 90%;
  gap: 2rem;
`;

const ImageContainer = styled.div`
  margin: 0;
  @media ${breakpoint.xs} {
    width: 65%;
  }
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

  @media ${breakpoint.xs} {
    justify-content: center;
  }
`;

const SomeText = styled.span`
  text-align: center;
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
      <H2d>Focus on growth</H2d>
      <ContentContainer>
        <ImageContainer>
          <Image />
        </ImageContainer>
        <TextContainer>
          <SomeText>We offer a range of services to serve your back office needs</SomeText>
          <List>
            <Item>CFO Services (fundraising, advisory)</Item>
            <Item>Management Accounting</Item>
            <Item>Bookkeeping</Item>
            <Item>Bank Account Provisioning</Item>
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
