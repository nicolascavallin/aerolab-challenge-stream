import React, { FC } from "react";
import { useTheme } from "styled-components";

import {
  ProductCardContainer,
  ProductCardData,
  ProductCardImage,
  ProductCardInfo,
} from "./ProductCard.style";
import { Button } from "@/components/Touchables/Buttons";
import Text from "@/components/Typography/Text";

interface ProductCardProps {}

const ProductCard: FC<ProductCardProps> = () => {
  //
  const theme = useTheme();

  return (
    <ProductCardContainer>
      <ProductCardData>
        <ProductCardImage>
          <div style={{ flex: 1, backgroundColor: "pink" }} />
        </ProductCardImage>
        <ProductCardInfo>
          <Text variant="L1">Name</Text>
          <Text variant="L2-Caps" color={theme.colors.neutral[600]}>
            Product type
          </Text>
        </ProductCardInfo>
      </ProductCardData>
      <Button onClick={() => console.log("redeem")}>
        <Text color={theme.colors.neutral[0]}>Redeem</Text>
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
