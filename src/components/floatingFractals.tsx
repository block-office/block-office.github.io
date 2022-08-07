import styled from "styled-components";

const FloatingFractal = styled.img`
  position: absolute;
  z-index: -1;
`;

export const LeftFractal = () => (
  <FloatingFractal
    style={{
      left: 0
    }}
    alt=""
    src="img/left-floating-fractal.svg"
  ></FloatingFractal>
);
export const RightFractal = () => (
  <FloatingFractal style={{ right: 0 }} alt="" src="img/right-floating-fractal.svg"></FloatingFractal>
);
