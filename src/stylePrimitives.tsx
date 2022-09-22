import styled from "@emotion/styled";
import { ColorKey, getColor } from "./colors";

export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 500;
`;

export const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 600;
`;

export const H2d = styled(H2)`
  color: ${getColor(ColorKey.Primary2A)};
`;

export const H3 = styled.h3`
  font-size: 1.25rem;
  font-weight: 300;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexColC = styled(FlexCol)`
  align-items: center;
`;

type ColorProps = {
  color: string;
};

export const HR = styled.hr<ColorProps>`
  border: 0;
  border-bottom: 0.75rem solid ${(props) => props.color};
  width: 5%;
  margin-bottom: 2rem;
`;
