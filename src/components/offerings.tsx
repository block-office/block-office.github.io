import styled from "@emotion/styled";
import { BsCheckCircleFill } from "react-icons/bs";
import { breakpoint } from "../breakpoints";
import { ColorKey, getColor } from "../colors";
import { FlexCol, FlexColC, H2d, HR } from "../stylePrimitives";
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
  justify-content: center;
  gap: 2rem;
  margin-top: 2em;
  width: 75%;
`;

const AdditionalServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2em;
  width: 75%;
`;

const TagLine = styled.span`
  color: ${getColor(ColorKey.Primary2A)};
  margin-top: 1rem;
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
  color: ${getColor(ColorKey.Primary1A)};
`;

const SignUpContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 4em;
`;

const Card = styled(FlexCol)`
  background-color: ${getColor(ColorKey.Background)};
  padding: 1rem;
  box-shadow: 4px 4px 4px ${getColor(ColorKey.LogoColor1)};
  width: 100%;
`;

const Tier = styled.span`
  color: ${getColor(ColorKey.Primary1A)};
  font-size: 1.75rem;
  font-weight: 700;
`;

const SomeLine = styled.hr`
  border: 0;
  border-bottom: 1px solid ${getColor(ColorKey.Primary1B)};
  width: 95%;
`;

const Category = styled.span`
  color: ${getColor(ColorKey.Primary1A)};
  font-size: 1.25rem;
  margin-top: 1.5rem;
`;

const Inclusion = styled.span`
  font-weight: 700;
`;

const SomeDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item = ({ children }: { children: React.ReactNode }) => {
  return (
    <ItemContainer>
      <BsCheckCircleFill size={18} fill={getColor(ColorKey.NoticeBackground)} />
      <ItemBody>{children}</ItemBody>
    </ItemContainer>
  );
};

const CardGroup = ({ tier, children }: { tier: string; children: React.ReactNode }) => {
  return (
    <Card>
      <FlexColC>
        <Tier>{tier}</Tier>
        <SomeLine />
      </FlexColC>
      <FlexCol>{children}</FlexCol>
    </Card>
  );
};

export const Offerings = () => {
  return (
    <Container>
      <HR color={getColor(ColorKey.Primary2A)} />
      <H2d>Scale your Web3 company with BlockOffice</H2d>
      <TagLine>
        We provide various back office solutions to help you grow your company. Pick the plan that best suits your needs
      </TagLine>
      <ContentContainer>
        <CardGroup tier="Basic">
          <Category>CFO Advisory</Category>
          <List>
            <Item>Incorporation</Item>
            <Item>Structuring</Item>
            <Item>Advisory</Item>
            <Item>Tax</Item>
            <Item>Fundraising Support</Item>
          </List>
          <Category>Accounting</Category>
          <List>
            <Item>Bookkeeping (on/off-chain)</Item>
          </List>
          <Category>Provisioning</Category>
          <List>
            <Item>Bank Account</Item>
            <Item>Hardware/Multisig Wallet</Item>
          </List>
        </CardGroup>
        <CardGroup tier="Standard">
          <Inclusion>Everything in Basic plus:</Inclusion>
          <Category>CFO Advisory</Category>
          <List>
            <Item>Filings</Item>
          </List>
          <Category>Accounting</Category>
          <List>
            <Item>Payroll (Fiat/Crypto)</Item>
          </List>
          <Category>Provisioning</Category>
          <List>
            <Item>Credit Card</Item>
          </List>
        </CardGroup>
        <CardGroup tier="Premium">
          <Inclusion>Everything in Standard plus:</Inclusion>
          <Category>Accounting</Category>
          <List>
            <Item>Custody</Item>
            <Item>Reconciliation</Item>
          </List>
          <Category>Provisioning</Category>
          <List>
            <Item>Finance Team</Item>
          </List>
        </CardGroup>
      </ContentContainer>
      <AdditionalServicesContainer>
        <CardGroup tier="Add-on Services">
          <SomeDiv>
            <List>
              <Item>AML/KYC</Item>
              <Item>Licensing</Item>
              <Item>Whitepaper</Item>
              <Item>Tokenomics</Item>
            </List>
            <List>
              <Item>Investor Presentation</Item>
              <Item>Token Listing</Item>
              <Item>On/off-ramp</Item>
              <Item>Legal Guidance</Item>
            </List>
            <List>
              <Item>Valuation Services</Item>
              <Item>Forecasting</Item>
            </List>
          </SomeDiv>
        </CardGroup>
      </AdditionalServicesContainer>
      <SignUpContainer>
        <SignUp />
      </SignUpContainer>
    </Container>
  );
};
