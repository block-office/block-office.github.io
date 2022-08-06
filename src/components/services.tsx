import styled from "styled-components";

import { breakpoint } from "../breakpoints";
import { ColorKey, getColor } from "../colors";

const ServicesContainer = styled.div`
  @media ${breakpoint.md} {
    padding: 7em 0 5em 0;
    margin: -5em 0 0 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${getColor(ColorKey.BACKGROUND)};
`;

const ServicesHeading = styled.div`
  font-variant: small-caps;
  color: ${getColor(ColorKey.PRIMARY)};
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 1.75em;
`;

const ServicesList = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 80%;
  gap: 2em;
  flex-wrap: wrap;
  margin-top: 3em;
`;

const ServiceItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

const ServiceItemHeading = styled.span`
  font-weight: 500;
  color: ${getColor(ColorKey.PRIMARY)};
`;

const ServiceItemBody = styled.span`
  text-align: center;
  color: ${getColor(ColorKey.PRIMARY)};
`;

export const ServiceItem = ({ heading, children }: { heading: string; children: React.ReactNode }) => {
  return (
    <ServiceItemContainer>
      <ServiceItemHeading>{heading}</ServiceItemHeading>
      <ServiceItemBody>{children}</ServiceItemBody>
    </ServiceItemContainer>
  );
};

export const Services = () => {
  return (
    <div id="services">
      <ServicesContainer>
        <ServicesHeading>Focus on sales, we have your back covered</ServicesHeading>
        <ServicesList>
          <ServiceItem heading={"Expert CFO services"}>
            Through strategic financial support including fundraising, advisory services, and more, our dedicated team
            of experts enable you to achieve your performance objectives.
          </ServiceItem>
          <ServiceItem heading={"Management accounting"}>
            Maintain a comprehensive understanding of your company's financial situation. We dissect your historical
            numbers and provide you a clear analysis to improve topline and profitability.
          </ServiceItem>
          <ServiceItem heading={"Tax"}>
            Our tax specialists help you navigate tax laws to optimize and file taxes with the appropriate tax
            authroities efficiently.
          </ServiceItem>
          <ServiceItem heading={"Bookkeeping"}>
            Entrust your bills and invoices to our Web3 accounting professionals. We'll tidy it up and provide you a
            clear outcome for your company's ledgers.
          </ServiceItem>
          <ServiceItem heading={"Bank account, web3 wallet, and ledger setup"}>
            We help you optimize treasury operational inefficiencies, avoid unnecessary delays, and prevent mistakes in
            routine transactions.
          </ServiceItem>
          <ServiceItem heading={"Closing a company"}>
            Require legal help to close a subsidiary, strike off a company, file for bankrupcy, or re-negotiate debt
            terms? Our liquidation as-a-service will help you find closure.
          </ServiceItem>
        </ServicesList>
      </ServicesContainer>
    </div>
  );
};
