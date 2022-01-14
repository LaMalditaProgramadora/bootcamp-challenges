import React, { useState, useEffect, useReducer } from "react";
import Formulario from "../components/formulario";
import ListaTareas from "../components/listaTareas";
import tareas from "../utils/tareas";

const ACTIONS = {
  CARGAR_TAREAS: "upload-todos",
  CREAR_TAREA: "create-todo",
  TOGGLE_TAREA: "toggle-tarea",
  ELIMINAR_TAREA: "delete-todo",
  MODIFICAR_TAREA: "update-todo",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CARGAR_TAREAS:
      return tareas;
    case ACTIONS.CREAR_TAREA:
      return [...state, crearTodo(action.payload.tarea)];
    case ACTIONS.TOGGLE_TAREA:
      return toggleTodo(state, action.payload.id);
    case ACTIONS.ELIMINAR_TAREA:
      return eliminarTodo(state, action.payload.id);
    case ACTIONS.EDITAR_TAREA:
      return editarTodo(state, action.payload.tarea);
    default:
      return state;
  }
}

function crearTodo(tarea) {
  return {
    id: Math.floor(Math.random * 100),
    titulo: tarea,
    completado: false,
  };
}

function toggleTodo(state, id) {
  return state.map((tarea) => {
    return tarea.id === id
      ? { ...tarea, completado: !tarea.completado }
      : tarea;
  });
}

function eliminarTodo(state, id) {
  return state
    .map((tarea) => (tarea.id === id ? null : tarea))
    .filter((tarea) => tarea != null);
}

function editarTodo(state, nuevaTarea) {
  return state.map((tarea) =>
    tarea.id === nuevaTarea.id
      ? {
          id: tarea.id,
          titulo: nuevaTarea.titulo,
          completado: nuevaTarea.completado,
        }
      : tarea
  );
}

export default function Principal() {
  const [state, dispatch] = useReducer(reducer, []);
  const [editable, setEditable] = useState(null);

  useEffect(() => {
    dispatch({ type: ACTIONS.CARGAR_TAREAS });
  }, []);

  const handleRegistrar = (tarea) => {
    dispatch({ type: ACTIONS.CREAR_TAREA, payload: { tarea } });
  };

  const handleToggle = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_TAREA, payload: { id } });
  };

  const handleEliminar = (id) => {
    dispatch({ type: ACTIONS.ELIMINAR_TAREA, payload: { id } });
  };

  const handleEditar = (tarea) => {
    dispatch({ type: ACTIONS.EDITAR_TAREA, payload: { tarea } });
  };

  const recibirEditable = (tarea) => {
    setEditable(tarea);
  };

  return (
    <>
      <div className="container flex flex-column">
        <h1 className="text-center mt-5 mb-5">Lista de tareas</h1>
        <div className="d-flex justify-content-center">
          <Formulario
            handleRegistrar={handleRegistrar}
            handleEditar={handleEditar}
            editable={editable}
          />
        </div>
        <ListaTareas
          listaTareas={state}
          handleToggle={handleToggle}
          handleEliminar={handleEliminar}
          recibirEditable={recibirEditable}
        />
      </div>
    </>
  );
}
