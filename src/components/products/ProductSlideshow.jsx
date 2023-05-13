import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./ProductSlideshow.module.css";
const ProductSlideshow = ({ images }) => {
  return (
    <Slide easing="linear" duration={7000} indicators>
      {images.map((image) => {
        const url = `/products/${image}`;
        return (
          <div className={styles["each-slide"]} key={image}>
            <div
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        );
      })}
    </Slide>
  );
};

export default ProductSlideshow;
