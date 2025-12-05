import { Link } from "react-router";
import { useSharedState } from "../sharedCart";
import styles from "/home/gud-lyf/repos/shopping-cart/src/styles/Cart.module.css";
import homePageStyles from "/home/gud-lyf/repos/shopping-cart/src/styles/Home.module.css";
import shopPageStyles from "/home/gud-lyf/repos/shopping-cart/src/styles/Shop.module.css";

export function CartPage() {
  const { cart, setCart } = useSharedState();
  console.log(cart);

  function increaseQuantity(updatedItem) {
    const updatedCart = cart.map((item) => {
      if (item === updatedItem) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  }

  function decreaseQuantity(updatedItem) {
    let updatedCart = cart.map((item) => {
      if (item === updatedItem && updatedItem.quantity !== 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    updatedCart = updatedCart.filter((item) => item.quantity !== 0);
    console.log(updatedCart);

    setCart(updatedCart);
  }

  return (
    <div className={styles.container}>
      <section className={homePageStyles.navBar}>
        <span>Logo</span>
        <span>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">
            Cart{" "}
            <span className={shopPageStyles.cartSize}>
              {cart
                .map((item) => item.quantity)
                .reduce((acc, curr) => acc + curr, 0)}
            </span>
          </Link>
        </span>
      </section>
      <section>
        <h1>Cart Page</h1>
        <table>
          <caption>Your Cart Summary </caption>
          <thead>
            <tr>
              <th scope="col">ITEM</th>
              <th scope="col">PRICE</th>
              <th scope="col">QUANTITY</th>
              <th scope="col">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => {
              if (!item) return;
              return (
                <tr key={index}>
                  <th scope="row">{item.name}</th>
                  <td>$ {item.price}</td>
                  <td className={styles.quantity}>
                    {item.quantity}{" "}
                    <div onClick={() => increaseQuantity(item)}>+</div>
                    <div onClick={() => decreaseQuantity(item)}>-</div>
                  </td>
                  <td>
                    $ {Math.round(item.price * item.quantity * 100) / 100}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colSpan="3">
                Total Amount
              </th>
              <td>
                ${" "}
                {Math.round(
                  cart.reduce(
                    (acc, curr) => acc + curr.price * curr.quantity,
                    0
                  ) * 100
                ) / 100}
              </td>
            </tr>
          </tfoot>
        </table>
      </section>
    </div>
  );
}
