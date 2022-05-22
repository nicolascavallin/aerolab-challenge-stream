import styled from "styled-components";

export const Button = styled.button`
  background-image: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background-image: linear-gradient(
      102.47deg,
      #1667d9 -5.34%,
      #f279f2 106.58%
    );
    background-position: right;
  }
  &:active {
    opacity: 0.8;
  }
`;

// export const RedeemButton = styled.button`
//   // background: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);
//   // border-radius: 16px;
//   // padding: 16px;
//   // width: 100%;
//   // border: none;
//   // cursor: pointer;
//   // &:hover {
//   //   background: linear-gradient(102.47deg, #1667d9 -5.34%, #f279f2 106.58%);
//   // }
//   // &:active {
//   //   opacity: 0.8;
//   // }
// `;
