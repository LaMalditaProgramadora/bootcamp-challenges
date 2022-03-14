import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddTaskIcon from "@mui/icons-material/AddTask";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
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
import AddUserDialog from "../components/dialogs/AddUserDialog";

const Group = () => {
  const [tasks, setTasks] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [updateTask, setUpdateTask] = React.useState({});
  const [openUpdateTaskDialog, setOpenUpdateTaskDialog] = React.useState(false);
  const [openCreateTaskDialog, setOpenCreateTaskDialog] = React.useState(false);
  const [openAddUserDialog, setOpenAddUserDialog] = React.useState(false);

  React.useEffect(() => {
    setTasks([
      { _id: "1234", name: "Tarea 1", status: "Finalizado" },
      { _id: "1384", name: "Tarea 2", status: "En Curso" },
    ]);
    setUsers([
      { _id: "9652", username: "Usuario1", email: "usuario1@gmail.com" },
      { _id: "6985", username: "Usuario2", email: "usuario2@gmail.com" },
    ]);
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

  const closeAddUser = () => {
    setOpenAddUserDialog(false);
  };

  const openAddUser = () => {
    setOpenAddUserDialog(true);
  };

  return (
    <>
      <AddUserDialog
        idGroup="156156"
        open={openAddUserDialog}
        closeDialog={closeAddUser}
      ></AddUserDialog>
      <UpdateTaskDialog
        updateTask={updateTask}
        open={openUpdateTaskDialog}
        closeDialog={closeUpdateTask}
      ></UpdateTaskDialog>
      <CreateTaskDialog
        id="56465"
        type="group"
        open={openCreateTaskDialog}
        closeDialog={closeCreateTask}
      ></CreateTaskDialog>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <label>
              <b>Usuarios del Grupo 1</b>
            </label>
            <PersonAddIcon
              style={{ cursor: "pointer" }}
              onClick={() => {
                openAddUser();
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
                    <TableCell>Usuario</TableCell>
                    <TableCell>Correo</TableCell>
                    <TableCell width={40}>Eliminar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <TableRow
                      key={user._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {user._id}
                      </TableCell>
                      <TableCell>{user.username}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell width={40}>
                        <DeleteIcon style={{ cursor: "pointer" }} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <br></br>
          <br></br>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <label>
              <b>Tareas del Grupo 1</b>
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
                    <TableCell width={40}>Modificar</TableCell>
                    <TableCell width={40}>Eliminar</TableCell>
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

export default Group;
