import ProductDetails from "./ProductDetails";
import CartItem from "./CartItem";
import ProductImage from "./ProductImage";

import ProductImageStyles from "./ProductImage.module.css";
import styles from "./Product.module.css";

function Product({
  quantity,
  number,
  setNumber,
  setQuantity,
  isCartOpen,
  setIsCartOpen,
  setIsModalOpen,
}) {
  function handleOpenModal() {
    setIsModalOpen(true);
  }

  return (
    <main className={styles.main}>
      <ProductImage styles={ProductImageStyles} onClick={handleOpenModal} />
      <ProductDetails
        number={number}
        setNumber={setNumber}
        setQuantity={setQuantity}
      />
      {isCartOpen && (
        <CartItem
          quantity={quantity}
          setQuantity={setQuantity}
          setIsCartOpen={setIsCartOpen}
        />
      )}
    </main>
  );
}

export default Product;
