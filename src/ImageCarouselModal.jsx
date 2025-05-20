import closeBtn from "../src/assets/images/icon-close.svg";

import styles from "./ImageCarouselModal.module.css";

function ImageCarouselModal({
  imageIndex,
  setImageIndex,
  images,
  thumbnailImages,
  previousIcon,
  nextIcon,
}) {
  return (
    <div className={styles.imageCarousel}>
      <div>
        <img src={closeBtn} alt="close_icon" />
        <div>
          <img
            className={styles.mainImage}
            onClick={() => {
              setImageIndex(1);
            }}
            src={images[imageIndex]}
            alt="product_img"
          />
          <span>
            <img src={previousIcon} alt="" />
            <img src={nextIcon} alt="" />
          </span>
        </div>
      </div>

      {thumbnailImages.map((thumbnailImage, index) => (
        <div>
          <img key={index} src={thumbnailImage} alt="" />
        </div>
      ))}
    </div>
  );
}

export default ImageCarouselModal;
