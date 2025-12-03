import { useState } from "react";
import styles from "/home/gud-lyf/repos/shopping-cart/src/styles/Shop.module.css";

export default function ProductCard({ item,id }) {
  const [itemSize, setItemSize] = useState(1);

  return (
    <>
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
          <form action="#">
              <label htmlFor={id}>
                No. of Items:{" "}
                <input
                  type="number"
                  value={itemSize}
                  onChange={(e) => setItemSize(Number(e.target.value))}
                  id={id}
                />
                <div onClick={() => setItemSize(itemSize + 1)}>+</div>
                <div onClick={() => itemSize !== 0 && setItemSize(itemSize - 1)}>
                  -
                </div>
              </label>
          </form>
          <div>
            <button>Add To Cart</button>
          </div>
      </div>
    </>
  );
}
