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
        <h1>Formulário de cadastro</h1>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Digite seu email"
            id="email"
            name="email"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Digite a sua senha"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <fieldset>
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="10"
            placeholder="Digite a descrição"
          ></textarea>
        </fieldset>

        <div>
          <button onClick>Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
