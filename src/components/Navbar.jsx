import menuIcon from "../assets/images/icon-menu.svg";
import logo from "../assets/images/logo.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import styles from "./Navbar.module.css";

function Navbar({ quantity, setIsCartOpen, isCartOpen }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoSection}>
        <img className={styles.menuIcon} src={menuIcon} alt="menu_icon" />
        <img src={logo} alt="logo" />

        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className={styles.cartSection}>
        <div>
          <img
            onClick={() => {
              setIsCartOpen(!isCartOpen);
            }}
            src={cartIcon}
            alt="cart_icon"
          />
          <div className={styles.quantity}>{quantity > 0 && quantity}</div>
        </div>
        <img className={styles.avatar} src={avatar} alt="avatar_icon" />
      </div>
    </nav>
  );
}

export default Navbar;
