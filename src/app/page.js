import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import Feedback from "@/components/Feedback";
import { PRODUCTS } from "@/lib/products_data";
import Image from "next/image";

export default function Home() {
  const secretNumber = 1234;
  console.log("Home component", secretNumber);

  return (
    <>
      <Navbar number={secretNumber} />
      <main className={styles.container}>
        {PRODUCTS.map((product) => (
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
              <button className={styles.button}>see details</button>
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
