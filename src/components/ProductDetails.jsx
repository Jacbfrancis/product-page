import AddToCart from "./AddToCart";
import styles from "./ProductDetails.module.css";

function ProductDetails({ number, setNumber, setQuantity }) {
  return (
    <div className={styles.productDetails}>
      <p className={styles.heading}>SNEAKER COMPANY</p>
      <h1>Fall Limited Edition Sneakers</h1>
      <p className={styles.description}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <h2>
        $125.00 <span className={styles.currentPrice}>50%</span>
      </h2>
      <span className={styles.previousPrice}>$250.00</span>
      <AddToCart
        number={number}
        setNumber={setNumber}
        setQuantity={setQuantity}
      />
    </div>
  );
}

export default ProductDetails;
