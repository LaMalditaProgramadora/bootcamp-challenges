import AddTaskIcon from "@mui/icons-material/AddTask";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
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

const TaskTable = ({ id, tasks }) => {
  const [updateTask, setUpdateTask] = useState({});
  const [openUpdateTask, setOpenUpdateTask] = useState(false);
  const [openCreateTask, setOpenCreateTask] = useState(false);

  return (
    <>
      <UpdateTaskDialog
        updateTask={updateTask}
        open={openUpdateTask}
        setOpen={setOpenUpdateTask}
      ></UpdateTaskDialog>
      <CreateTaskDialog
        id={id}
        type="user"
        open={openCreateTask}
        setOpen={setOpenCreateTask}
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
                  <DeleteIcon style={{ cursor: "pointer" }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TaskTable;
