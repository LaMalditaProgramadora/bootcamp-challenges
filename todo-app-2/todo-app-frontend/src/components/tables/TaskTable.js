import AddTaskIcon from "@mui/icons-material/AddTask";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Snackbar } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import CreateTaskDialog from "../../components/dialogs/CreateTaskDialog";
import UpdateTaskDialog from "../../components/dialogs/UpdateTaskDialog";
import { removeTaskGroup } from "../../services/GroupService";
import { removeTaskUser } from "../../services/UserService";

const TaskTable = ({ id, type, tasks, reload }) => {
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const [updateTask, setUpdateTask] = useState({});
  const [openUpdateTask, setOpenUpdateTask] = useState(false);
  const [openCreateTask, setOpenCreateTask] = useState(false);

  const removeTaskFromApi = (idTask) => {
    if (type === "user") {
      removeTaskUser(id, idTask).then((data) => {
        setSnackbar({ open: true, message: data.message });
        if (data.status === 1) {
          reload();
        }
      });
    } else {
      removeTaskGroup(id, idTask).then((data) => {
        setSnackbar({ open: true, message: data.message });
        if (data.status === 1) {
          reload();
        }
      });
    }
  };

  return (
    <>
      <UpdateTaskDialog
        updateTask={updateTask}
        open={openUpdateTask}
        setOpen={setOpenUpdateTask}
        reload={reload}
      ></UpdateTaskDialog>
      <CreateTaskDialog
        id={id}
        type={type}
        open={openCreateTask}
        setOpen={setOpenCreateTask}
        reload={reload}
      ></CreateTaskDialog>
      <AddTaskIcon
        style={{ cursor: "pointer" }}
        onClick={() => {
          setOpenCreateTask(true);
        }}
      />
      <br></br>
      <TableContainer component={Paper}>
        <Table size="small" sx={{ minWidth: 650 }} aria-label="simple table">
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
                      setOpenUpdateTask(true);
                    }}
                  />
                </TableCell>
                <TableCell width={40}>
                  <DeleteIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => removeTaskFromApi(task._id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        message={snackbar.message}
        onClose={() => setSnackbar({ open: false, message: "" })}
      />
    </>
  );
};

export default TaskTable;
