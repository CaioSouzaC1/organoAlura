import "./CampoTexto.css";

const CampoTexto = (props) => {
  const aoDigitado = (e) => {
    props.aoAlterado(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={aoDigitado}
        value={props.valor}
        required
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};

export default CampoTexto;
