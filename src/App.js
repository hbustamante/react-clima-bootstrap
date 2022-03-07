import { Fragment, useEffect, useState, useCallback } from "react";
import Detalle from "./components/Detalle";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

function App() {
  const [busqueda, setBusqueda] = useState({ ciudad: "", pais: "" });
  const [consultar, setConsultar] = useState(false);
  const [clima, setClima] = useState({});
  const [error, setError] = useState(false);
  const { ciudad, pais } = busqueda;

  const currentClima = useCallback(async () => {
    if (consultar) {
      console.log(process.env);
      const appId = process.env.REACT_APP_API_KEY_WHEATER;
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${appId}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      
      setClima(resultado);
      setConsultar(false);

      if (resultado.cod === "404") {
        setError(true);
      } else {
        setError(false);
      }
    }
  }, [consultar]);

  useEffect(() => {
    currentClima();
  }, [consultar]);

  return (
    <Fragment>
      <Header />
      <div className="masthead">
        <div className="container px-5">
          <div className="row align-items-start">
            <div className="col-12 col-md-6 col-sm-12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col-12 col-md-6 col-sm-12">{clima ? <Detalle clima={clima} /> : null}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
