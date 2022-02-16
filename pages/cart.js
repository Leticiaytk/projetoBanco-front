import { React, useEffect, useState } from "react";

import style from "../styles/Index.module.css";

import { api } from "../api/api";
import { useCart } from "../lib/CardContext";

import Button from "../components/Button";
import CardProduct from "../components/CardProduct";
import HeaderClient from "../components/HeaderClient";

function Cart() {
  const [adress, setAdress] = useState("");

  const { cart } = useCart();

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async (event) => {
    try {
      const { data } = await api.get("/market");
      setAdress(data[0].market_adress);
    } catch (error) {
      console.error(error);
    }
  };

  const Finish = (data) => {
    // não funfa
    try {
      const { teste } = api.post("/order", data);
      alert(`Compra finalizada`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.container}>
      <HeaderClient logo="/logo.png" adress={adress}></HeaderClient>

      <main className={style.main}>
        <div className={style.products}>
          {cart.map((item) => {
            return (
              <CardProduct
                image={"/noImage.png"}
                product={item}
                key={item.id}
              />
            );
          })}
        </div>
      </main>

      <div className={style.footer}>
        <Button
          text="Finalizar a compra"
          onClick={() => {
            Finish();
          }}
        />
      </div>
    </div>
  );
}

export default Cart;
