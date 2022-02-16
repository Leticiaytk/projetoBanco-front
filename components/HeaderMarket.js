import Image from "next/image";
import Router from "next/router";
import { useState } from "react";
import { api } from "../api/api";
import style from "../styles/HeaderClient.module.css";
import Button from "./Button";
import { Form } from "react-bootstrap";

export default function HeaderMarket({ logo, adress }) {
  const [info, setInfo] = useState("");

  function searchProduct(value) {
    let query = "/product/?product_name=";
    query += `${value}`;

    try {
      const { data } = api.get(query);
      console.log("pesquisa por nome do produto");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={style.bar}>
      <div className={style.top}>
        <div
          className={style.logo}
          onClick={() => {
            Router.push("/");
          }}
        >
          <Image src={logo} alt="Market logo" width={65} height={65} />
        </div>
        <div className={style.adress}>{adress}</div>
        <div className={style.textInfo}>Aberto 7h-20h</div>
      </div>
    </div>
  );
}
