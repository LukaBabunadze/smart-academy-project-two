"use client";
import styles from "@/app/products/page.module.css";
import Image from "next/image";
import Link from "next/link";
const ProductItem = ({
  product,
  products,
  setProducts,
  setDeletedProducts,
}) => {
  const deleteProductOnServer = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${product.id}`,
      {
        method: "DELETE",
      }
    );
    const result = await response.json();
    console.log("deleted product: ", response);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((prod) => prod.id !== id));
    setDeletedProducts((prev) => [...prev, product]);
    deleteProductOnServer();
  };
  return (
    <section className={styles.itemContainer}>
      <Image src={product.image} width={80} height={100} alt={product.title} />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.desc}>{product.description}</p>
      <div className={styles.priceWrapper}>
        <p>${product.price}</p>
        <Link href={`/products/${product.id}`}>
          <button
            onClick={() => console.log("clicked")}
            className={styles.button}
          >
            see details
          </button>
        </Link>
        <button onClick={() => handleDeleteProduct(product.id)}>
          Delete this product
        </button>
      </div>
    </section>
  );
};

export default ProductItem;
