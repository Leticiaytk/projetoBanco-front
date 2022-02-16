import { React, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

import style from "../styles/Signin.module.css";

import { api } from "../api/api";

function Signin() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [cep, setCep] = useState("");
  const [adress, setAdress] = useState("");
  const [number, setNumber] = useState("");
  const [bairro, setBairro] = useState("");

  const [informacoes, setInformacoes] = useState({});

  const setInformacoesForm = (event) => {
    event.persist();
    setInformacoes((informacoes) => ({
      ...informacoes,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      client_name,
      client_cpf,
      client_mail,
      client_password,
      client_cep,
      client_adress,
      client_number,
      client_bairro,
    } = {
      informacoes,
    };
    console.log(informacoes);
    try {
      const response = await api.post("/client", informacoes);
      alert("Cliente cadastrado com sucesso!");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.form}>
        <div className={style.title}>Faça seu cadastro</div>
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
              <Form.Label>CPF</Form.Label>
              <Form.Control
                className={style.field}
                type="cpf"
                placeholder=""
                value={(informacoes.cpf = cpf)}
                onChange={(e) => setCpf(e.target.value)}
              />
            </Form.Group>

            <Form.Group className={style.fieldBlock}>
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                className={style.field}
                type="email"
                placeholder=""
                value={(informacoes.mail = mail)}
                onChange={(e) => setMail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className={style.fieldBlock}>
              <Form.Label>Endereço</Form.Label>
              <Form.Control
                className={style.field}
                type="adress"
                placeholder=""
                value={(informacoes.adress = adress)}
                onChange={(e) => setAdress(e.target.value)}
              />
            </Form.Group>

            <Form.Group className={style.fieldBlock}>
              <Form.Label>Número</Form.Label>
              <Form.Control
                className={style.field}
                type="number"
                placeholder=""
                value={(informacoes.number = number)}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group className={style.fieldBlock}>
              <Form.Label>Bairro</Form.Label>
              <Form.Control
                className={style.field}
                type="bairro"
                placeholder=""
                value={(informacoes.bairro = bairro)}
                onChange={(e) => setBairro(e.target.value)}
              />
            </Form.Group>

            <Form.Group className={style.fieldBlock}>
              <Form.Label>CEP</Form.Label>
              <Form.Control
                className={style.field}
                type="cep"
                placeholder=""
                value={(informacoes.cep = cep)}
                onChange={(e) => setCep(e.target.value)}
              />
            </Form.Group>

            <Form.Group className={style.fieldBlock}>
              <Form.Label>Senha</Form.Label>
              <Form.Control
                className={style.field}
                type="password"
                placeholder=""
                value={(informacoes.password = password)}
                onChange={(e) => setPassword(e.target.value)}
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
export default Signin;
