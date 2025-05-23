import Button from "./Button";
import { motion } from "motion/react";

import thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import trashIcon from "../assets/images/icon-delete.svg";
import styles from "./CartItem.module.css";

function CartItem({ quantity, setQuantity, setIsCartOpen }) {
  function handleCheckout() {
    setQuantity(0);
    setIsCartOpen(false);
  }

  return (
    <motion.section
      initial={{ y: -30 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.header}>
        <h5>Cart</h5>
      </div>

      {quantity ? (
        <div className={styles.cartContainer}>
          <div className={styles.cartDetails}>
            <img
              className={styles.thumbnail}
              src={thumbnail}
              alt="product_img"
            />
            <div>
              <p>Fall Limited Edition Sneakers</p>
              <p>
                $125.00 x {quantity}
                <span className={styles.total}> ${125.0 * quantity}.00</span>
              </p>
            </div>
            <img
              onClick={() => {
                setQuantity(0);
              }}
              src={trashIcon}
              alt="trash_icon"
            />
          </div>

          <Button onClick={handleCheckout}>Checkout</Button>
        </div>
      ) : (
        <p className={styles.empty}>Your cart is empty.</p>
      )}
    </motion.section>
  );
}

export default CartItem;
