import { products } from "./products";

export default function Shop() {
  return (
    <div className="container">
      <h1>Shopping Page</h1>
      <section className="items">
        {products.map((item) => {
        return  <div className={item.imgAlt}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <img src={item.imgSrc} alt={item.alt} />
            <p>
              <span className="topic">Price:</span>
              {item.priceDesc || item.price}
            </p>
            <p>
              <span className="topic">Bulk Price:</span>
              {item.bulkPriceDesc || item.bulkPrice}
            </p>
            <button>Add To Cart</button>
          </div>;
        })}
      </section>
    </div>
  );
}
