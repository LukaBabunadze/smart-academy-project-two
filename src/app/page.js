"use client";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import Feedback from "@/components/Feedback";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProductItem from "@/components/ProductItem";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>products are fetching!</p>;
  }

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        {products.map((product) => (
          <ProductItem
            product={product}
            key={product.id}
            products={products}
            setProducts={setProducts}
          />
        ))}
      </main>
    </>
  );
}
