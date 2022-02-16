import Image from "next/image";

import { useCart } from "../lib/CardContext";
import style from "../styles/CardProduct.module.css";

export default function CardIcon({ image, product, key }) {
  const { saveProduct, removeProduct } = useCart();

  const handleAddToCart = (item) => {
    saveProduct(item);
  };

  const handleRemoveFromCart = (item) => {
    removeProduct(item);
  };

  return (
    <div className={style.card}>
      <Image src={image} alt="Card Product" width={65} height={65} />
      <div className={style.text}>
        <div className={style.name}>{product.product_name}</div>
        <div className={style.price}>{product.product_price.toFixed(2)}</div>
        <div className={style.buttons}>
          <div
            className={style.minusButton}
            onClick={() => {
              handleRemoveFromCart(product), console.log(product);
            }}
          >
            -
          </div>
          <div
            className={style.plusButton}
            onClick={() => handleAddToCart(product)}
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
}
