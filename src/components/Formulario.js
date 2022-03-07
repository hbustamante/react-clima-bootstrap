import React, { useEffect, useState } from "react";
import dataPais from "../data/paises.json";

const Formulario = ({ busqueda, setBusqueda, setConsultar }) => {
  const [paises, setPaises] = useState(dataPais || []);
  const [error, setError] = useState(false);
  const { ciudad, pais } = busqueda;

  useEffect(() => {
    console.log("paises", paises);
  }, []);

  const handleSubmit = (e) => {
    const { ciudad, pais } = busqueda;
    e.preventDefault();

    if (ciudad.trim() === "" || pais.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    setConsultar(true);
  };

  const handleChange = e => {
    // actualizar el state
    setBusqueda({
        ...busqueda,
        [e.target.name] : e.target.value
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group col-md-12 mt-3">
        <label htmlFor="exampleFormControlInput1">Ciudad</label>
        <input
          type="text"
          className="form-control mt-1"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handleChange}
          placeholder="Ingresa tu ciudad..."
        />
      </div>
      <div className="form-group col-md-12 mt-3">
        <label htmlFor="exampleFormControlSelect1">País</label>
        <select 
            className="form-control mt-1" 
            id="exampleFormControlSelect1"
            name="pais"
            id="pais"
            value={pais}
            onChange={handleChange}
            >
          <option selected>Selecciona tu país...</option>
          {paises.length > 0
            ? paises.map((opt) => {
                return (
                  <option key={opt.value} value={opt.value}>
                    {opt.name}
                  </option>
                );
              })
            : null}
        </select>
      </div>
      <div className="d-grid gap-2 col-md-12 mt-3 mb-3">
        <input
          type="submit"
          value="Buscar Clima"
          className="btn btn-lg btn-outline-dark py-1 px-2 mt-3 rounded-pill"
        />
      </div>
    </form>
  );
};

export default Formulario;
