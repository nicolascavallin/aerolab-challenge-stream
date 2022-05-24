import styled from "styled-components";

export const ProductCardContainer = styled.div`
  transition: transform 0.35s ease;
  &:hover {
    transform: scale(1.02);
    > * {
      &:first-child {
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
      }
    }
  }
`;

export const ProductCardData = styled.div`
  background-color: white;
  margin-bottom: 16px;
  border-radius: 16px;
  border: solid 1px ${(props) => props.theme.colors.neutral[300]};
  overflow: hidden;
`;

export const ProductCardImage = styled.div`
  display: flex;
  aspect-ratio: 320/344;
  border-bottom: solid 1px ${(props) => props.theme.colors.neutral[300]};
  padding: 20px;
`;

export const ProductCardInfo = styled.div`
  padding: 16px 24px 24px 24px;
`;
