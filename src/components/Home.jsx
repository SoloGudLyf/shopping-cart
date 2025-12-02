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
        <h1>Welcome to my shopping page</h1>
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
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}
