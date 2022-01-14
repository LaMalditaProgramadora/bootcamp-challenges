import React, { useState, useEffect } from "react";
import Formulario from "../components/formulario";
import ListaTareas from "../components/listaTareas";
import tareas from "../utils/tareas";

export default function Principal() {
  // Estados del componente
  const [listaTareas, setListaTareas] = useState([]);
  const [editable, setEditable] = useState(null);

  // Ciclo de vida con hook useEffect
  useEffect(() => {
    setListaTareas(tareas);
  }, []);

  // función para agregar una nueva tarea
  const handleRegistrar = (tarea) => {
    const ultimoId = listaTareas[listaTareas.length - 1].id;
    setListaTareas((estadoPrevio) => [
      ...estadoPrevio,
      { id: ultimoId + 1, titulo: tarea, completado: false },
    ]);
  };

  // función para cambiar el estado de una tarea
  const handleToggle = (id) => {
    const nuevaLista = listaTareas.map((tarea) =>
      tarea.id === id ? { ...tarea, completado: !tarea.completado } : tarea
    );
    setListaTareas(nuevaLista);
  };

  // funcion para recibir una tarea que se va a editar
  const recibirEditable = (tarea) => {
    setEditable(tarea);
  };

  // funcion para editar una tarea
  const handleEditar = (nuevaTarea) => {
    const nuevaLista = listaTareas.map((tarea) =>
      tarea.id === nuevaTarea.id
        ? {
            id: nuevaTarea.id,
            titulo: nuevaTarea.titulo,
            completado: nuevaTarea.completado,
          }
        : tarea
    );
    setListaTareas(nuevaLista);
    setEditable(null);
  };

  // Eliminar una tarea
  const handleEliminar = (id) => {
    const nuevaLista = listaTareas
      .map((tarea) => (tarea.id === id ? null : tarea))
      .filter((tarea) => tarea != null);
    setListaTareas(nuevaLista);
  };

  // Renderizar el componente
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 mb-5">Lista de tareas</h1>
        <Formulario className="text-center"
          handleRegistrar={handleRegistrar}
          handleEditar={handleEditar}
          editable={editable}
        />
        <ListaTareas
          listaTareas={listaTareas}
          handleToggle={handleToggle}
          handleEliminar={handleEliminar}
          recibirEditable={recibirEditable}
        />
      </div>
    </>
  );
}