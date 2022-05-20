import React, { FC } from "react";

interface ProductCardProps {}

const ProductCard: FC<ProductCardProps> = () => {
  return (
    <div style={{ flex: 1, backgroundColor: "yellow" }}>
      <div>
        <p>Product Card</p>
      </div>
      <button>Redeem</button>
    </div>
  );
};

export default ProductCard;
