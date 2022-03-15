import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TaskTable from "../components/tables/TaskTable";
import UserTable from "../components/tables/UserTable";
import { get } from "../services/GroupService";

const Group = () => {
  const { id } = useParams();
  const [name, setName] = useState("Grupo");
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  const getDataFromApi = () => {
    get(id).then((data) => {
      if (data.data) {
        setName(data.data.name);
        setTasks(data.data.tasks);
        setUsers(data.data.users);
      }
    });
  };

  useEffect(() => {
    getDataFromApi();
    // eslint-disable-next-line
  }, [id]);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <label>
              <b>Usuarios de {name}</b>
            </label>
            <UserTable id={id} users={users} reload={getDataFromApi} />
          </Paper>
          <br></br>
          <br></br>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <label>
              <b>Tareas de {name}</b>
            </label>
            <TaskTable
              type="group"
              id={id}
              tasks={tasks}
              reload={getDataFromApi}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Group;
