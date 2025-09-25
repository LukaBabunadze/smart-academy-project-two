"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import ProductItem from "@/components/ProductItem";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [deletedProducts, setDeletedProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);

  return (
    <>
      <main className={styles.container}>
        {products.map((product) => (
          <ProductItem
            product={product}
            key={product.id}
            products={products}
            setProducts={setProducts}
            setDeletedProducts={setDeletedProducts}
          />
        ))}
      </main>
      <section>
        {deletedProducts.length > 0 ? <div>მეტია ნულზე</div> : null}
      </section>
    </>
  );
}
