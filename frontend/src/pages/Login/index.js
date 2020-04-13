import React from "react";
import "./styles.css";
import logotipo from "../../assets/logotipo.png";
import heroLogin from "../../assets/hero-login.png";

export default function Login() {
  return (
    <section className="login-container">
      <div className="column-1">
        <img src={logotipo} alt="" />
        <p>Bem vindo ao Software Médico</p>
        <form action="">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="youremail@domain.com"
            />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" />
          </div>
          <button type="submit" className="btn">
            Entrar
          </button>
        </form>
        <p>
          <a href="">Esqueci a senha</a>
        </p>
      </div>
      <div className="column-2">
        <img src={heroLogin} alt="" />
        <p>
          <strong>O melhor sistema para clínicas e consultórios</strong>
          <br />
          <span>Experimente grátis!</span>
        </p>
      </div>
    </section>
  );
}
