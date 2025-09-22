"use client";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import Feedback from "@/components/Feedback";
import Image from "next/image";
import { useEffect, useState } from "react";

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

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((prod) => prod.id !== id));
  };

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        {products.map((product) => (
          <section key={product.id} className={styles.itemContainer}>
            <Image
              src={product.image}
              width={80}
              height={100}
              alt={product.title}
            />
            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.desc}>{product.description}</p>
            <div className={styles.priceWrapper}>
              <p>${product.price}</p>
              <button
                onClick={() => console.log("clicked")}
                className={styles.button}
              >
                see details
              </button>
              <button onClick={() => handleDeleteProduct(product.id)}>
                Delete this product
              </button>
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
