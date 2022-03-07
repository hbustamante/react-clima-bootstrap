import React from "react";
import Maps from "./Maps";

const Detalle = ({ clima }) => {
  const { name, main, coord} = clima;
  const kelvin = 273.15;
  return (
    <div>
      {main ? (
        <>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  T° Actual: {parseFloat(main.temp - kelvin, 10).toFixed(2)}
                </li>
                <li className="list-group-item">
                  T° Max: {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}
                </li>
                <li className="list-group-item">
                  T° Min: {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}
                </li>
              </ul>
            </div>
            {coord ? (
            <div className="container-fluid mb-3">
              <Maps
                latitude={coord.lat}
                longitude={coord.lon}
              />
            </div>
            ) : null}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Detalle;
