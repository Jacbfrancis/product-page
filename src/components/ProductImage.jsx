import { useState } from "react";

import imageProduct1 from "../assets/images/image-product-1.jpg";
import imageProduct2 from "../assets/images/image-product-2.jpg";
import imageProduct3 from "../assets/images/image-product-3.jpg";
import imageProduct4 from "../assets/images/image-product-4.jpg";
import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";
import nextIcon from "../assets/images/icon-next.svg";
import previousIcon from "../assets/images/icon-previous.svg";
import closeIcon from "../assets/images/icon-close.svg";

function ProductImage({ styles, onClick }) {
  const images = [imageProduct1, imageProduct2, imageProduct3, imageProduct4];
  const thumbnailImages = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.closeIcon}
        onClick={onClick}
        src={closeIcon}
        alt="closeIcon"
      />
      <img
        className={styles.productImage}
        onClick={onClick}
        src={images[imageIndex]}
        alt="image_product_one"
      />
      <div>
        <button
          className={`${styles.previous} ${styles.btn}`}
          onClick={() => {
            imageIndex >= 0 && setImageIndex(imageIndex - 1);
            imageIndex <= 0 && setImageIndex(3);
          }}
        >
          <span>
            <img src={previousIcon} alt="previous_icon" />
          </span>
        </button>

        <button
          className={`${styles.next} ${styles.btn}`}
          onClick={() => {
            imageIndex >= 0 && setImageIndex((imageIndex) => imageIndex + 1);
            imageIndex >= 3 && setImageIndex(0);
          }}
        >
          <span>
            <img src={nextIcon} alt="next_icon" />
          </span>
        </button>
      </div>
      <div className={styles.thumbnailContainer}>
        {thumbnailImages.map((thumbnail, index) => (
          <div
            className={`${styles.thumbnail} ${
              index === imageIndex ? styles.selected : ""
            }`}
            key={index}
            onClick={() => {
              setImageIndex(index);
            }}
          >
            <img
              className={styles.thumbnailImage}
              src={thumbnail}
              alt={`thumbnail_image_${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImage;
