import { React, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import style from "../styles/AddProduct.module.css";

import { api } from "../api/api";

import HeaderMarket from "../components/HeaderMarket";

function AddProduct() {
  const [adress, setAdress] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [marca, setMarca] = useState("");
  const [heigth, setHeigth] = useState("");
  const [qnt, setQnt] = useState("");

  const [informacoes, setInformacoes] = useState({});

  const setInformacoesForm = (event) => {
    event.persist();
    setInformacoes((informacoes) => ({
      ...informacoes,
      [event.target.name]: event.target.value,
    }));
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      product_name,
      product_description,
      product_category,
      product_price,
      product_marca,
      product_heigth,
      product_qnt,
    } = {
      informacoes,
    };
    console.log(informacoes);
    try {
      const response = await api.post("/product", informacoes);
      alert("Produto cadastrado com sucesso!");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.container}>
      <HeaderMarket logo="/logo.png" adress={adress} />
      <div className={style.form}>
        <div className={style.title}>Cadastre um novo produto</div>
        <div className={style.formContainer} onSubmit={handleSubmit}>
          <Form>
            <Form.Group className={style.fieldBlock}>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                className={style.field}
                type="name"
                placeholder=""
                value={(informacoes.name = name)}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className={style.fieldBlock}>
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                className={style.field}
                type="description"
                placeholder=""
                value={(informacoes.description = description)}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className={style.fieldBlock}>
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                as="select"
                name="category"
                aria-label="Default select example"
                onChange={setInformacoesForm}
              >
                <option name="category" value="limpeza">
                  Limpeza
                </option>
                <option name="category" value="alimentosbasicos">
                  Alimentos básicos
                </option>
                <option name="category" value="feira">
                  Feira
                </option>
                <option name="category" value="carneavesepeixes">
                  Carne, aves e peixes
                </option>
                <option name="category" value="bebidas">
                  Bebidas
                </option>
                <option name="category" value="bebidasalcoolicas">
                  Bebidas alcóolicas
                </option>
                <option name="category" value="higieneecuidadospessoais">
                  Higiene e Cuidados Pessoais
                </option>
                <option value="biscoitosesalgadinho">
                  Biscoitos e salgadinhos
                </option>
              </Form.Control>
            </Form.Group>

            <Form.Group className={style.fieldBlock}>
              <Form.Label>Preço</Form.Label>
              <Form.Control
                className={style.field}
                type="price"
                placeholder=""
                value={(informacoes.price = price)}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group className={style.fieldBlock}>
              <Form.Label>Marca</Form.Label>
              <Form.Control
                className={style.field}
                type="marca"
                placeholder=""
                value={(informacoes.marca = marca)}
                onChange={(e) => setMarca(e.target.value)}
              />
            </Form.Group>

            <Form.Group className={style.fieldBlock}>
              <Form.Label>Peso</Form.Label>
              <Form.Control
                className={style.field}
                type="heigth"
                placeholder=""
                value={(informacoes.heigth = heigth)}
                onChange={(e) => setHeigth(e.target.value)}
              />
            </Form.Group>

            <Form.Group className={style.fieldBlock}>
              <Form.Label>Quantidade</Form.Label>
              <Form.Control
                className={style.field}
                type="qnt"
                placeholder=""
                value={(informacoes.qnt = qnt)}
                onChange={(e) => setQnt(e.target.value)}
              />
            </Form.Group>

            <div className={style.button}>
              <Button variant="primary" type="submit">
                Cadastrar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
