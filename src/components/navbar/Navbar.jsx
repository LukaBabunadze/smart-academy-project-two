"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";
const links = [
  { name: "Products", url: "/products", id: 1 },
  { name: "Cart", url: "/cart", id: 2 },
  { name: "Profile", url: "/profile", id: 3 },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <section className={styles.navbarContainer}>
      {links.map((link) => (
        <Link key={link.id} href={link.url}>
          <div
            className={
              pathname.slice(1) === link.url.slice(1)
                ? styles.activeTab
                : styles.inactiveTab
            }
          >
            {link.name}
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Navbar;
