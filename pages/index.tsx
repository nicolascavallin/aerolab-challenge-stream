import type { NextPage } from "next";
import Head from "next/head";

import ProductsContainer from "@/components/Layout/ProductsContainer";
import ProductCard from "@/components/Products/ProductCard";
import ProductsGrid from "@/components/Products/ProductsGrid";

const Home: NextPage = () => {
  //

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <ProductsContainer>
        <div>
          <h1>Aerolab Challenge</h1>
        </div>
        <ProductsGrid>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductsGrid>
      </ProductsContainer>
    </>
  );
};

export default Home;
