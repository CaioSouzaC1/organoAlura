import "./Time.css";
import Colaborador from "../Colaborador";

const Time = (props) => {
  return (
    props.colaboradores.length > 0 && (
      <section style={{ backgroundColor: props.secundaria }} className="time">
        <h3 style={{ borderColor: props.primaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((e) => {
            return (
              <Colaborador
                key={props.nome}
                nome={e.nome}
                cargo={e.cargo}
                img={e.imagem}
                cor={props.primaria}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
