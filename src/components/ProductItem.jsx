"use client";
import styles from "@/app/page.module.css";
import Image from "next/image";
const ProductItem = ({ product, products, setProducts }) => {
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((prod) => prod.id !== id));
  };
  return (
    <section className={styles.itemContainer}>
      <Image src={product.image} width={80} height={100} alt={product.title} />
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
  );
};

export default ProductItem;
