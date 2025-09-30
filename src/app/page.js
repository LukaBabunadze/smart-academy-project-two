"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import ProductItem from "@/components/ProductItem";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [deletedProducts, setDeletedProducts] = useState([]);
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
    return <div>content loading</div>;
  }

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
