import React, { useState, useEffect, Fragment } from 'react';
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {

  let initCitas = JSON.parse(localStorage.getItem("citas"));
  if(!initCitas){
    initCitas = [];
  }

  const [citas, setCitas] = useState(initCitas);

  useEffect(() => {
    const getCitas = JSON.parse(localStorage.getItem("citas"));
    if(getCitas){
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  const crearCita = cita => {

    const newCitas = [...citas, cita];

    setCitas(newCitas);
  }

  const deleteCita = id => {
    const newCitas = [...citas];
    newCitas.splice(id, 1);
    setCitas(newCitas);
  }

  const message = citas.length === 0 ? "No Hay Citas" : "Administra tu Citas";

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita}  />
          </div>
          <div className="one-half column">
            <h2>{message}</h2>
            {
              citas.map((cita, index) => (
                <Cita
                  key={index}
                  id={index}
                  cita={cita}
                  deleteCita={deleteCita}
                />
              ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
