import { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductImage from "./components/ProductImage";
import ImageCarouselStyles from "./ImageCarouselModal.module.css";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [number, setNumber] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <Navbar
        quantity={quantity}
        setIsCartOpen={setIsCartOpen}
        isCartOpen={isCartOpen}
      />
      <Product
        quantity={quantity}
        number={number}
        setNumber={setNumber}
        setQuantity={setQuantity}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        setIsModalOpen={setIsModalOpen}
      />
      {isModalOpen && (
        <ProductImage styles={ImageCarouselStyles} onClick={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
