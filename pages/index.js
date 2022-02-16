import { React, useEffect, useState } from "react";

import style from "../styles/Index.module.css";

import { api } from "../api/api";
import { useCart } from "../lib/CardContext";

import HeaderClient from "../components/HeaderClient";
import CategoryMenu from "../components/CategoryMenu";
import CardProduct from "../components/CardProduct";

function Home() {
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
      const { data } = await api.get("/product");
      setProducts(data);
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
          {products.map((p) => {
            return (
              <CardProduct image={"/noImage.png"} product={p} key={p.id} />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Home;
