import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import ProductsContainer from "@/components/Layout/ProductsContainer";
import ProductCard from "@/components/Products/ProductCard";
import { Product } from "@/components/Products/ProductCard/ProductCard";
import ProductsGrid from "@/components/Products/ProductsGrid";

interface HomePageProps {
  products: Product[];
}

const Home: NextPage<HomePageProps> = ({ products }) => {
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
          {products.map((prod) => (
            <ProductCard
              product={prod}
              key={prod._id}
              variant="redeem"
              textLeft="Redeem for"
              textRight={prod.cost.toString()}
              showLogo
            />
          ))}
        </ProductsGrid>
      </ProductsContainer>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  //
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjM3MzYzMzA2MTJjZDAwMjE3YjhiZjAiLCJpYXQiOjE2NDc3ODU1MjN9.64_CyQHxBWutnj1BF-XOeOziLbMWjolBnIqt_FdsFuc";

  const products = await fetch(
    "https://coding-challenge-api.aerolab.co/products",
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  ).then((res) => res.json());

  return {
    props: {
      products,
    },
  };
};
