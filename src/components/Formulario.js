import React, { useState, Fragment } from "react";

function Formulario({ crearCita }) {

  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  const handleChange = e => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  }

  const sendCita = e => {
    e.preventDefault();
    if(Object.values(cita).includes("")){
      return;
    }
    crearCita(cita);
    e.target.reset();
  }

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form onSubmit={sendCita} >
        <label>Nombre Mascota</label>
        <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" onChange={handleChange} />

        <label>Nombre Dueño</label>
        <input type="text" name="propietario" className="u-full-width" placeholder="Nombre Dueño de la Mascota" onChange={handleChange} />

        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" onChange={handleChange} />


        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" onChange={handleChange} />


        <label>Sintomas</label>
        <textarea name="sintomas" className="u-full-width" onChange={handleChange} />

        <button className="button-primary u-full-width" type="submit">Agregar</button>

      </form>
    </Fragment>
  )
}

export default Formulario;