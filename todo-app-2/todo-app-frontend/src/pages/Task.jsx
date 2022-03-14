import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import UpdateTaskDialog from "../components/dialogs/UpdateTaskDialog";
import CreateTaskDialog from "../components/dialogs/CreateTaskDialog";

const Task = () => {
  const [idUser, setIdUser] = React.useState("");
  const [tasks, setTasks] = React.useState([]);
  const [updateTask, setUpdateTask] = React.useState({});
  const [openUpdateTaskDialog, setOpenUpdateTaskDialog] = React.useState(false);
  const [openCreateTaskDialog, setOpenCreateTaskDialog] = React.useState(false);

  React.useEffect(() => {
    setTasks([
      { _id: "1234", name: "Tarea 1", status: "Finalizada" },
      { _id: "1384", name: "Tarea 2", status: "En Curso" },
    ]);
    setIdUser("12345");
  }, []);

  const closeUpdateTask = () => {
    setOpenUpdateTaskDialog(false);
  };

  const openUpdateTask = () => {
    setOpenUpdateTaskDialog(true);
  };

  const closeCreateTask = () => {
    setOpenCreateTaskDialog(false);
  };

  const openCreateTask = () => {
    setOpenCreateTaskDialog(true);
  };

  return (
    <>
      <UpdateTaskDialog
        updateTask={updateTask}
        open={openUpdateTaskDialog}
        closeDialog={closeUpdateTask}
      ></UpdateTaskDialog>
      <CreateTaskDialog
        id={idUser}
        type="user"
        open={openCreateTaskDialog}
        closeDialog={closeCreateTask}
      ></CreateTaskDialog>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <label>
              <b>Mis Tareas</b>
            </label>
            <AddTaskIcon
              style={{ cursor: "pointer" }}
              onClick={() => {
                openCreateTask();
              }}
            />
            <br></br>
            <TableContainer component={Paper}>
              <Table
                size="small"
                sx={{ minWidth: 650 }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Modificar</TableCell>
                    <TableCell>Eliminar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tasks.map((task) => (
                    <TableRow
                      key={task._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {task._id}
                      </TableCell>
                      <TableCell>{task.name}</TableCell>
                      <TableCell>{task.status}</TableCell>
                      <TableCell width={40}>
                        <EditIcon
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setUpdateTask(task);
                            openUpdateTask();
                          }}
                        />
                      </TableCell>
                      <TableCell width={40}>
                        <DeleteIcon style={{ cursor: "pointer" }} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Task;
