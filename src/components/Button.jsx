import styles from "./Button.module.css";

function Button({ children, onClick }) {
  return (
    <button className={styles.cartBtn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
