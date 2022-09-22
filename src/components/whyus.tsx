import styled from "@emotion/styled";

import { breakpoint } from "../breakpoints";
import { ColorKey, getColor } from "../colors";
import { HR } from "../stylePrimitives";

const WhyUsContainer = styled.div`
  @media ${breakpoint.xs} {
    padding: 2rem 0 2rem 0;
  }

  padding: 5rem 0 5rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WhyUsTextContainer = styled.div`
  width: 90%;
`;

const WhyUsHeading = styled.div`
  color: ${getColor(ColorKey.Primary1A)};
  font-weight: 700;
  font-size: 1.75em;
  text-align: center;
`;

const WhyUsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 4em;
  flex-wrap: wrap;
  margin-top: 3em;
  @media ${breakpoint.xs} {
    width: 100%;
  }
`;

const ServiceItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 29%;

  @media ${breakpoint.xs} {
    width: 100%;
  }
`;

const ServiceItemImage = styled.img<{ imgSrc: string }>`
  content: url("img/whyus/light/${(props) => props.imgSrc}");
`;

const ServiceItemHeading = styled.span`
  font-weight: 600;
  font-size: 18px;
  margin-top: 1.25em;
  text-align: center;
  color: ${getColor(ColorKey.Primary1A)};
`;

const ServiceItemBody = styled.span`
  text-align: center;
  margin-top: 1.25em;
  line-height: 1.5em;
  color: ${getColor(ColorKey.Primary1A)};
`;

export const ServiceItem = ({
  imageSrc,
  heading,
  children
}: {
  imageSrc: string;
  heading: string;
  children: React.ReactNode;
}) => {
  return (
    <ServiceItemContainer>
      <ServiceItemImage imgSrc={imageSrc} height={"60px"} />
      <ServiceItemHeading>{heading}</ServiceItemHeading>
      <ServiceItemBody>{children}</ServiceItemBody>
    </ServiceItemContainer>
  );
};

export const WhyUs = () => {
  return (
    <WhyUsContainer>
      <HR color={getColor(ColorKey.Primary1A)} />
      <WhyUsTextContainer>
        <WhyUsHeading>Why choose BlockOffice?</WhyUsHeading>
        <WhyUsList>
          <ServiceItem imageSrc="support.svg" heading={"Experienced and specialized support"}>
            Our web3 accounting and finance specialists are ex-big 4 and from other reputable firms, dedicated to
            supporting you in achieving organizational success. Employ a BlockOffice team that understands your unique
            business, accounting standards, and local regulations
          </ServiceItem>
          <ServiceItem imageSrc="founders.svg" heading={"Ex-Founders and Startup DNA"}>
            Our co-founders and early employees have founded companies and helped scaled sub-10M valuation companies to
            unicorns. We will hustle with you, helping you get your back office needs sorted out in the quickest and
            most dedicated manner
          </ServiceItem>
          <ServiceItem imageSrc="growing.svg" heading={"Growing with you"}>
            It is difficult to navigate changing regulatory requirements for web3 companies and we are here to help. We
            align our level of support and engagement to your growth needs. Whether you have a high-growth startup, a
            fund, or a profitable enterprise, we'll be at your back supporting your every need
          </ServiceItem>
        </WhyUsList>
      </WhyUsTextContainer>
    </WhyUsContainer>
  );
};
