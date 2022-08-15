import styled from "@emotion/styled";

import { breakpoint } from "../breakpoints";
import { ColorKey, COLORS, getColor } from "../colors";

const ServicesContainer = styled.div`
  margin: 9em 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServicesTextContainer = styled.div`
  width: 90%;
  margin-top: 2em;
`;

const ServicesHeading = styled.div`
  color: ${getColor(ColorKey.Primary1A)};
  font-weight: 700;
  font-size: 1.75em;
  text-align: center;
`;

const ServicesList = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 4em;
  flex-wrap: wrap;
  margin-top: 3.5em;

  @media ${breakpoint.xs} {
    width: 100%;
  }
`;

const ServiceItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 28%;

  @media ${breakpoint.xs} {
    width: 100%;
  }
`;

const ServiceItemHeading = styled.span`
  font-weight: 600;
  font-size: 18px;
  color: ${getColor(ColorKey.Primary1A)};
`;

const ServiceItemBody = styled.span`
  text-align: left;
  margin-top: 1.25em;
  line-height: 1.5em;
  color: ${getColor(ColorKey.Primary1B)};
`;

const ServiceItemBullet = styled.span`
  color: ${COLORS.NEON_GREEN};
`;

const Rectangle = styled.img`
  content: url("img/rectangle.svg");
`;

const Bullet = () => {
  return <ServiceItemBullet>⯀ </ServiceItemBullet>;
};

const ServiceItem = ({ heading, children }: { heading: string; children: React.ReactNode }) => {
  return (
    <ServiceItemContainer>
      <ServiceItemHeading>
        <Bullet />
        {heading}
      </ServiceItemHeading>
      <ServiceItemBody>{children}</ServiceItemBody>
    </ServiceItemContainer>
  );
};

export const Services = () => {
  return (
    <ServicesContainer id="services">
      <Rectangle />
      <ServicesTextContainer>
        <ServicesHeading>Focus on sales, we have your back covered</ServicesHeading>
        <ServicesList>
          <ServiceItem heading={"CFO services"}>
            Through strategic financial support including fundraising, advisory services, and more, our dedicated team
            enable you to achieve your performance objectives
          </ServiceItem>
          <ServiceItem heading={"Management accounting"}>
            Rely on us to maintain a comprehensive understanding of your company's financial situation. We dissect your
            historical numbers and provide you a clear analysis to improve topline and profitability
          </ServiceItem>
          <ServiceItem heading={"Tax"}>
            Our tax specialists help you navigate tax laws to optimize and file taxes with the appropriate tax
            authorities efficiently
          </ServiceItem>
          <ServiceItem heading={"Bookkeeping"}>
            Our accounting team will help you tidy up your bills and invoices, and provide a clear outcome for your
            company's ledger
          </ServiceItem>
          <ServiceItem heading={"Bank account, web3 wallet, and ledger setup"}>
            We help you optimize treasury operational inefficiencies, avoid unnecessary delays, and prevent mistakes in
            routine transactions
          </ServiceItem>
          <ServiceItem heading={"Closing a company"}>
            Sometimes things don't go as planned. We help close a subsidiary, strike off a company, file for bankruptcy,
            or re-negotiate debt terms
          </ServiceItem>
        </ServicesList>
      </ServicesTextContainer>
    </ServicesContainer>
  );
};
