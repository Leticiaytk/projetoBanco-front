import { React, useEffect, useState } from "react";

import style from "../styles/Index.module.css";

import { api } from "../api/api";
import HeaderClient from "../components/HeaderClient";
import CategoryMenu from "../components/CategoryMenu";
import CardProduct from "../components/CardProduct";

function Bebidasalcoolicas() {
  const [adress, setAdress] = useState("");
  const [product, setProducts] = useState("");
  const products = Array.from(product);

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  const getInfo = async (event) => {
    try {
      const { data } = await api.get("/market");
      setAdress(data[0].market_adress);
    } catch (error) {
      console.error(error);
    }
  };

  const getProducts = async (event) => {
    try {
      const { data } = await api.get(
        "/product/?product_category=bebidasalcoolicas"
      );
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.container}>
      <HeaderClient logo="/logo.png" adress={adress}></HeaderClient>

      <main className={style.main}>
        <div className={style.middle}>
          <CategoryMenu />

          <img src="/banner.png" alt="Market banner" className={style.banner} />
        </div>

        <div className={style.products}>
          {products.map((p, i) => {
            return <CardProduct image={"/noImage.png"} product={p} key={i} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default Bebidasalcoolicas;
