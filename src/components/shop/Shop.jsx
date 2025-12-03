import styles from "/home/gud-lyf/repos/shopping-cart/src/styles/Shop.module.css";
import { Link } from "react-router";
import homePageStyles from "/home/gud-lyf/repos/shopping-cart/src/styles/Home.module.css";
import { products } from "./products";
import ProductCard from "./productCard";

export default function Shop() {
  return (
    <div className={styles.container}>
      <div className={homePageStyles.navBar}>
        <span>Logo</span>
        <span>
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
          <Link>Cart</Link>
        </span>
      </div>
      <h1>Shopping Page</h1>
      <section className={styles.items}>
        {products.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </section>
    </div>
  );
}
