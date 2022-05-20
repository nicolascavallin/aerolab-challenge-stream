import styled from "styled-components";

const ProductsContainer = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  max-width: 1464px;
  margin: 0 80px;
  @media screen and (max-width: 1024px) {
    margin: 0 20px;
  }
`;

export default ProductsContainer;
