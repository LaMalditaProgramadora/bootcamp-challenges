import React, { useState, useEffect } from "react";

export default function Formulario(props) {
  // estado del componente
  const [titulo, setTitulo] = useState("");

  // funcion propia del componente que puede emitir 2 funciones dependiendo de una propiedad
  const handleClick = (event) => {
    // prevenir redirección
    event.preventDefault();

    if (!props.editable) {
      // registrar una nueva tarea
      props.handleRegistrar(titulo);
    } else {
      // editar una tarea
      props.handleEditar({
        id: props.editable.id,
        titulo: titulo,
        completado: props.editable.completado,
      });
    }
    // limpiar el formulario
    setTitulo("");
  };

  // dos ciclos de vida, cuando el componente se monta por primera vez y cuando el componente se actualiza segun una propiedad de su estado
  useEffect(() => {
    if (props.editable) {
      setTitulo(props.editable.titulo);
    }
  }, [props.editable]);

  return (
    <form className="col-4 ml-auto mr-auto mb-5">
      <div className="form-group">
        <label>Titulo de la tarea</label>
        <input
          type="text"
          className="form-control"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <small className="form-text text-muted">
          Escribe la tarea que deseas registrar
        </small>
      </div>
      <button
        type="submit"
        className={props.editable ? "btn btn-warning" : "btn btn-primary"}
        onClick={handleClick}
        disabled={!titulo}
      >
        {props.editable ? "Editar" : "Registrar"}
      </button>
    </form>
  );
}