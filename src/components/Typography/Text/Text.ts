import styled from "styled-components";

type Variant = "L1" | "L1-Caps" | "L1-Light" | "L2" | "L2-Caps";

interface TextProps {
  variant?: Variant;
  numberOfLines?: number;
  noLineHeight?: boolean;
}

const Text = styled.p<TextProps>`
  margin: 0px;
  font-family: Montserrat;
  font-size: ${({ variant }) => (variant?.includes("L2") ? "14px" : "18px")};
  font-weight: ${({ variant }) => (variant === "L1-Light" ? 500 : 600)};
  line-height: ${({ noLineHeight }) => (noLineHeight ? "normal" : "150%")};
  letter-spacing: ${({ variant }) => {
    const size = variant?.includes("L2") ? 14 : 18;
    let factor = 0;
    if (variant === "L1-Caps") factor = 0.24;
    if (variant === "L2-Caps") factor = 0.05;
    return `${size * factor}px`;
  }};
  text-transform: ${({ variant }) =>
    variant?.includes("Caps") ? "uppercase" : "none"};
  color: ${({ color, theme }) => color ?? theme.colors.neutral[900]};
  @media screen and (max-width: 1024px) {
    font-size: ${({ variant }) => (variant?.includes("L2") ? "12px" : "16px")};
    letter-spacing: ${({ variant }) => {
      const size = variant?.includes("L2") ? 12 : 16;
      const factor = variant === "L1-Caps" ? 0.24 : 0;
      return `${size * factor}px`;
    }};
  }
`;

export default Text;
