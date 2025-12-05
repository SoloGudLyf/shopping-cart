import styles from "/src/styles/Shop.module.css";
import { Link, Outlet } from "react-router";
import homePageStyles from "/src/styles/Home.module.css";
import { products } from "./products";
import ProductCard from "./productCard";
import { useEffect } from "react";
import { CartPage } from "../cart/Cart";
import { useSharedState } from "../sharedCart";

export default function Shop() {
  const { cart, setCart } = useSharedState();

  function updateCart(newItem) {
    if (cart.length === 0) return setCart([newItem]);
    let counter = 0;
    const newCart = cart.map((item) => {
      if (item.name === newItem.name) {
        const Item = { ...item, quantity: item.quantity + newItem.quantity };
        return Item;
      }
      counter++;
      return item;
    });

    if (counter === cart.length) return setCart([...cart, newItem]);
    setCart(newCart);
  }

  useEffect(() => {
    <CartPage cart={cart} updateCart={updateCart} />;
  }, [cart]);

  return (
    <div className={styles.container}>
      <div className={homePageStyles.navBar}>
        <span>Logo</span>
        <span>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">
            Cart{" "}
            <span className={styles.cartSize}>
              {cart
                .map((item) => item.quantity)
                .reduce((acc, curr) => acc + curr, 0)}
            </span>
          </Link>
        </span>
      </div>
      <h1>Shopping Page</h1>
      <section className={styles.items}>
        {products.map((item, index) => (
          <ProductCard
            key={index}
            item={item}
            id={index}
            updateCart={updateCart}
          />
        ))}
      </section>
    </div>
  );
}
