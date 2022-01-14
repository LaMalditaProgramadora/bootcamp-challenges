import React from "react";
import PropTypes from "prop-types";
export default function ListaTareas({
  listaTareas,
  handleToggle,
  handleEliminar,
  recibirEditable,
}) {
  const botonIncompleta = (id) => (
    <button className="btn btn-primary mr-2" onClick={() => handleToggle(id)}>
      Marcar incompleta
    </button>
  );
  const botonCompleta = (id) => (
    <button className="btn btn-primary mr-2" onClick={() => handleToggle(id)}>
      Marcar completada
    </button>
  );
  const botonEditar = (tarea) => (
    <button className="btn btn-warning" onClick={() => recibirEditable(tarea)}>
      Editar
    </button>
  );
  const botonEliminar = (id) => (
    <button className="btn btn-danger" onClick={() => handleEliminar(id)}>
      Eliminar
    </button>
  );

  return (
    <div className="row">
      {listaTareas.map((tarea) => (
        <div className="col-4 mb-4" key={tarea.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{tarea.titulo}</h5>
              <p className="card-text">
                {tarea.completado ? "Tarea completada" : "Tarea incompleta"}
              </p>
              {tarea.completado
                ? botonIncompleta(tarea.id)
                : botonCompleta(tarea.id)}
              {tarea.completado ? botonEliminar(tarea.id) : botonEditar(tarea)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

ListaTareas.propTypes = {
  listaTareas: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleEliminar: PropTypes.func.isRequired,
  recibirEditable: PropTypes.func.isRequired,
};