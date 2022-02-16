import { React } from "react";
import Router from "next/router";
import { FormControl, InputGroup } from "react-bootstrap";
import style from "../styles/Signup.module.css";

import Button from "../components/Button";

function SignUp() {
  return (
    <div className={style.container}>
      <main className={style.main}>
        <InputGroup className={style.fieldBlock}>
          <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
          <FormControl
            className={style.field}
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>

        <InputGroup className={style.fieldBlock}>
          <InputGroup.Text id="inputGroup-sizing-sm">Senha</InputGroup.Text>
          <FormControl
            className={style.field}
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>

        <Button
          text="Entrar"
          onClick={() => {
            Router.push("/");
          }}
        />
      </main>
    </div>
  );
}

export default SignUp;
