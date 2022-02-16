import { React } from "react";
import Router from "next/router";
import style from "../styles/Signinup.module.css";

import Button from "../components/Button";

function SignInUp() {
  return (
    <div className={style.container}>
      <main className={style.main}>
        <Button
          text="Cadastrar"
          onClick={() => {
            Router.push("/signin");
          }}
        />
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

export default SignInUp;
