import ListaSuspensa from "../ListaSuspensa";
import CampoTexto from "../CampoTexto";
import Botao from "../Botao";
import "./Formulario.css";
import { useState } from "react";

const Formulario = (props) => {
  const aoSalvar = (e) => {
    e.preventDefault();
    props.onEnvio({ nome: nome, cargo: cargo, imagem: imagem, list: list });
    setNome("");
    setCargo("");
    setImagem("");
    setLista("");
  };

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [list, setLista] = useState("");
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card</h2>
        <CampoTexto
          label="nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
          placeholder="Digite seu nome"
        />
        <CampoTexto
          label="cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
          placeholder="Digite seu cargo"
        />
        <CampoTexto
          label="imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
          placeholder="Digite o endereço da imagem"
        />
        <ListaSuspensa
          items={props.times}
          label="Time"
          oqueveio={list}
          funcDeSetar={(list) => setLista(list)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
