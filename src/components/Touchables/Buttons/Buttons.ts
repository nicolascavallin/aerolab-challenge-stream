import styled from "styled-components";

export type ButtonVariant = "redeem" | "loading" | "disabled";

interface ButtonProps {
  variant?: ButtonVariant;
}

export const Button = styled.button<ButtonProps>`
  background: ${({ variant, theme }) =>
    variant === "disabled"
      ? theme.colors.neutral[200]
      : "linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%)"};
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  border: none;
  cursor: ${({ variant }) => (variant === "redeem" ? "pointer" : undefined)};
  opacity: ${({ variant }) => (variant === "loading" ? 0.7 : 1)};
  display: flex;
  justify-content: center;
  &:hover {
    background: ${({ variant, theme }) =>
      variant === "disabled"
        ? theme.colors.neutral[200]
        : variant === "loading"
        ? "linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%)"
        : "linear-gradient(102.47deg, #1667d9 -5.34%, #f279f2 106.58%)"};
  }
  &:active {
    opacity: ${({ variant }) =>
      variant === "loading" ? 0.7 : variant === "disabled" ? 1 : 0.8};
  }
`;
