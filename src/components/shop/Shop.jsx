import { products } from "./products";
import styles from "/home/gud-lyf/repos/shopping-cart/src/styles/Shop.module.css";

export default function Shop() {
  return (
    <div className={styles.container}>
      <h1>Shopping Page</h1>
      <section className={styles.items}>
        {products.map((item) => {
          return (
            <div>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <img src={item.imgSrc} alt={item.alt} />
              <p>
                <span className={styles.topic}>Price:</span>
                {item.priceDesc || item.price}
              </p>
              <p>
                <span className={styles.topic}>Bulk Price:</span>
                {item.bulkPriceDesc || item.bulkPrice}
              </p>
              <button>Add To Cart</button>
            </div>
          );
        })}
      </section>
    </div>
  );
}
