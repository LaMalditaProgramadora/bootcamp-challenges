import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TaskTable from "../components/tables/TaskTable";
import UserTable from "../components/tables/UserTable";
import { get } from "../services/GroupService";

const Group = () => {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  const getDataFromApi = () => {
    get(id).then((data) => {
      if (data.data) {
        setTasks(data.data.tasks);
        setUsers(data.data.users);
      }
    });
  };

  useEffect(() => {
    getDataFromApi();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <label>
              <b>Usuarios del Grupo 1</b>
            </label>
            <UserTable id={id} users={users} />
          </Paper>
          <br></br>
          <br></br>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <label>
              <b>Tareas del Grupo 1</b>
            </label>
            <TaskTable id={id} tasks={tasks} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Group;
