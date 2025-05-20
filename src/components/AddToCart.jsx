import cartIcon from "../assets/images/icon-cart.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";

import styles from "./AddToCart.module.css";
import Button from "./Button";

function AddToCart({ number, setNumber, setQuantity }) {
  function handleAddToCart() {
    setQuantity(number);
  }

  return (
    <div className={styles.addToCart}>
      <div className={styles.container}>
        <button
          className={styles.btn}
          onClick={() => {
            number > 0 && setNumber((number) => number - 1);
          }}
        >
          <span>
            <img src={minusIcon} alt="minus_icon" />
          </span>
        </button>
        <div>
          <h3>{number}</h3>
        </div>
        <button
          className={styles.btn}
          onClick={() => setNumber((number) => number + 1)}
        >
          <span>
            <img src={plusIcon} alt="plus_icon" />
          </span>
        </button>
      </div>

      <Button
        setQuantity={setQuantity}
        number={number}
        onClick={handleAddToCart}
      >
        <span>
          <img src={cartIcon} alt="cart_icon" />
        </span>
        Add to cart
      </Button>
    </div>
  );
}

export default AddToCart;
