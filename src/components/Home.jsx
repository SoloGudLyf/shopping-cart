import { Link, useNavigate } from "react-router";
import styles from "../styles/Home.module.css";
import { ImageCarousel } from "./image-carousel/image-carousel/ImageCarousel";
import rebarImg from "/src/assets/images/rebar.png";
import masonryImg from "/src/assets/images/masonry.png";
import roofingSheetImg from "/src/assets/images/roofing.png";

export function Homepage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <section className={styles.navBar}>
        <span>Logo</span>
        <span>
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
          <Link to="/cart">Cart</Link>
        </span>
      </section>
      <div className={styles.content}>
        <section className={styles.headline}>
          <h1>BUILD SMARTER. BUILD STRONGER.</h1>
          <p>
            Your trusted source for high-quality steel, timber, cement, and
            construction essentials.
          </p>
          <button onClick={() => navigate("/shop")}>Shop All Materials</button>
        </section>
        <section className={styles.imageCarousel}>
          <p>
            Explore Our Core Materials like Steel & Rebar, Lumber & Timber,
            Foundation & Masonry and Roofing & Insulation{" "}
          </p>
          <img src="../" alt="" />
          <ImageCarousel
            imagesArr={[
              {
                src: rebarImg,
                alt: "Rebar",
              },
              {
                src: "src/assets/images/timber.png",
                alt: "timber",
              },
              {
                src: masonryImg,
                alt: "masonry",
              },
              {
                src: roofingSheetImg,
                alt: "roofing-materials",
              },
            ]}
          />
        </section>
        <section className={styles.info}>
          <div className={styles.features}>
            <h2>Why Choose Us?</h2>
            <p>
              <span className={styles.topic}>Quality Assured:</span> Materials
              sourced from certified, top-tier suppliers
            </p>
            <p>
              <span className={styles.topic}>Reliable Delivery:</span> On-time
              delivery directly to your job site or home.
            </p>
            <p>
              <span className={styles.topic}>Expert Support:</span> Get
              technical advice from our experienced team
            </p>
            <p>
              <span className={styles.topic}>Competitive Pricing:</span> Bulk
              discounts and transparent pricing for every project.
            </p>{" "}
          </div>
          <div className={styles.testimonial}>
            <h2>Testimonials</h2>
            <p>
              "The bulk order of rebar was delivered exactly on schedule, and
              the quality was perfect for our foundation pour. A reliable
              partner for our large projects."{" "}
              <span className={styles.clientName}>- John D., Site Manager</span>
            </p>
          </div>
        </section>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}
