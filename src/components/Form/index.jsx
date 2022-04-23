import { useState } from "react";
import styles from "./Form.module.css";

const Form = (nome) => {
  const cadastrarUsuario = (e) => {
    e.preventDefault();
    console.log(
      `Usuário ${name} foi cadastrado com a senha: ${password} com êxito!`
    );
  };

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <form className={styles.form}>
        <h1>Meu Formulário</h1>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="Digite a sua senha"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Digite seu email"
            id="email"
            name="email"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button onClick>Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
