import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function saveProduct(product) {
    const newCart = [...cart];
    newCart.push(product);
    alert(`${product.product_name} adicionado ao carrinho.`);

    setCart(newCart);
    console.log(cart);
  }

  function removeProduct(product) {
    const newCart = [...cart];

    const index = newCart.indexOf(product);
    console.log(newCart.indexOf(product));
    newCart.splice(index, 1);

    alert(`${product.product_name} removido do carrinho.`);

    setCart(newCart);
  }
  return (
    <CartContext.Provider value={{ saveProduct, removeProduct, cart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
