import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const [colaboradores, setColaborador] = useState([]);

  const newColaborador = (colab) => {
    setColaborador([...colaboradores, colab]);
    console.log(colaboradores);
  };

  const times = [
    {
      nome: "Programação",
      primaria: "#57c278",
      secundaria: "#d9f7e9",
    },
    {
      nome: "FrontEnd",
      primaria: "#82cffa",
      secundaria: "#e8f8ff",
    },
    {
      nome: "Data Science",
      primaria: "#a6d157",
      secundaria: "#f0f8e2",
    },
    {
      nome: "Devops",
      primaria: "#f26869",
      secundaria: "#fde7e8",
    },
    {
      nome: "Design",
      primaria: "#ff88a2",
      secundaria: "#e8f8ff",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Formulario
          times={times.map((time) => {
            return time.nome;
          })}
          onEnvio={(colaborador) => newColaborador(colaborador)}
        />
        {times.map((time) => {
          return (
            <Time
              nome={time.nome}
              key={time.nome}
              primaria={time.primaria}
              secundaria={time.secundaria}
              colaboradores={colaboradores.filter(
                (colaborador) => colaborador.list === time.nome
              )}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;
