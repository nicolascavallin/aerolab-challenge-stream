import React, { FC } from "react";
import { useTheme } from "styled-components";

import AerolabLogo from "@/assets/AerolabLogo";
import { Button } from "@/components/Touchables/Buttons";
import { ButtonVariant } from "@/components/Touchables/Buttons/Buttons";
import Text from "@/components/Typography/Text";

import {
  ProductCardContainer,
  ProductCardData,
  ProductCardImage,
  ProductCardInfo,
} from "./ProductCard.style";

export interface Product {
  _id: string;
  name: string;
  cost: number;
  category: string;
  img: Img;
}

export interface Img {
  url: string;
  hdUrl: string;
}

interface ProductCardProps {
  variant?: ButtonVariant;
  textLeft?: string;
  textRight?: string;
  showLogo?: boolean;
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({
  variant = "redeem",
  textLeft,
  textRight,
  showLogo = false,
  product,
}) => {
  //
  const theme = useTheme();

  const color =
    variant === "disabled"
      ? theme.colors.neutral[600]
      : theme.colors.neutral[0];

  return (
    <ProductCardContainer>
      <ProductCardData>
        <ProductCardImage>
          <div style={{ flex: 1, backgroundColor: "pink" }} />
        </ProductCardImage>
        <ProductCardInfo>
          <Text variant="L1">{product.name}</Text>
          <Text variant="L2-Caps" color={theme.colors.neutral[600]}>
            {product.category}
          </Text>
        </ProductCardInfo>
      </ProductCardData>
      <Button
        onClick={() => console.log("redeem")}
        variant={variant}
        disabled={["disabled", "loading"].includes(variant)}
      >
        {textLeft ? <Text color={color}>{textLeft}</Text> : null}
        {showLogo ? (
          <AerolabLogo
            style={{
              marginLeft: textLeft ? 8 : 0,
              marginRight: textRight ? 8 : 0,
              fill: color,
            }}
          />
        ) : null}
        {textRight ? <Text color={color}>{textRight}</Text> : null}
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
