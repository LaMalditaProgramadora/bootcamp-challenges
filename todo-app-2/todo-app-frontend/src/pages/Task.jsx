import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import TaskTable from "../components/tables/TaskTable";
import { getIdUser } from "../services/StorageService";
import { getTasks } from "../services/UserService";

const Task = () => {
  const [tasks, setTasks] = useState([]);

  const getTasksFromApi = () => {
    getTasks(getIdUser()).then((data) => {
      if (data.data) {
        setTasks(data.data);
      }
    });
  };

  useEffect(() => {
    getTasksFromApi();
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <label>
              <b>Mis Tareas</b>
            </label>
            <TaskTable id={getIdUser()} tasks={tasks} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Task;
