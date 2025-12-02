import { Link } from "react-router";
import styles from "../styles/Home.module.css";
import { ImageCarousel } from "./image-carousel/image-carousel/ImageCarousel";

export function Homepage() {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <span>Logo</span>
        <span>
          <Link to="/">Home</Link>
          <Link>Shop</Link>
          <Link>Cart</Link>
        </span>
      </div>
      <div className={styles.content}>
        <section className="headline">
          <h1>BUILD SMARTER. BUILD STRONGER.</h1>
          <p>
            Your trusted source for high-quality steel, timber, cement, and
            construction essentials.
          </p>
          <button>
            <Link>Shop All Materials</Link>
          </button>
        </section>
        <p>
          Explore Our Core Materials like Steel & Rebar, Lumber & Timber,
          Foundation & Masonry and Roofing & Insulation{" "}
        </p>
        <ImageCarousel
          imagesArr={[
            {
              src: "src/components/image-carousel/image-carousel/images/cli-webpack.png",
              alt: "Screenshot",
            },
            {
              src: "src/components/image-carousel/image-carousel/images/Screenshot_2025-10-13_13-02-48.png",
              alt: "Screenshot",
            },
            {
              src: "src/components/image-carousel/image-carousel/images/Screenshot_2025-11-26_01-28-21.png",
              alt: "Screenshot",
            },
            {
              src: "src/components/image-carousel/image-carousel/images/vscode-webpack.png",
              alt: "screenshot",
            },
          ]}
        />
        <section className="container">
          <div className="features">
            <h2>Why Choose Us?</h2>
            <p>features&Trust</p>
            <p>
              <span className="topic">Quality Assured:</span> Materials sourced
              from certified, top-tier suppliers
            </p>
            <p>
              <span className="topic">Reliable Delivery:</span> On-time delivery
              directly to your job site or home.
            </p>
            <p>
              <span className="topic">Expert Support:</span> Get technical
              advice from our experienced team
            </p>
            <p>
              <span className="topic">Competitive Pricing:</span> Bulk discounts
              and transparent pricing for every project.
            </p>{" "}
          </div>
          <div className="testimonial">
            <h2>Testimonials</h2>
            <p>
              "The bulk order of rebar was delivered exactly on schedule, and
              the quality was perfect for our foundation pour. A reliable
              partner for our large projects."{" "}
              <span className="clientName">- John D., Site Manager</span>
            </p>
          </div>
        </section>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}
