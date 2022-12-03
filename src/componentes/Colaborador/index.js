import "./Colaborador.css";

const Colaborador = ({ nome, cargo, img, cor }) => {
  return (
    <div style={{ backgroundColor: cor }} className="colaborador">
      <div className="cabecalho">
        <img src={img} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
