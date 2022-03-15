import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { update } from "../../services/TaskService";
import * as React from "react";

const UpdateTaskDialog = ({ updateTask, open, setOpen, reload }) => {
  const [snackbar, setSnackbar] = React.useState({ open: false, message: "" });
  const [task, setTask] = React.useState({});

  const handleName = (event) => {
    setTask({ name: event.target.value, status: task.status });
  };

  const handleStatus = (event) => {
    setTask({ name: task.name, status: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const taskAux = {
      _id: updateTask._id,
      name: formData.get("name"),
      status: formData.get("status"),
    };
    if (taskAux !== "") {
      update(taskAux).then((data) => {
        setSnackbar({ open: true, message: data.message });
        if (data.status === 1) {
          reload();
          setOpen(false);
        }
      });
    } else {
      setSnackbar({ open: true, message: "Ingrese todos los campos" });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setTask(updateTask);
  }, [updateTask]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth={true}
        component="form"
        onSubmit={handleSubmit}
      >
        <DialogTitle>Actualizar Tarea</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            type="name"
            fullWidth
            value={task.name}
            name="name"
            onChange={handleName}
          />
          <br></br>
          <br></br>
          <FormControl fullWidth={true} sx={{ fontWeight: "fontWeightBold" }}>
            <InputLabel id="labelCategory">Estado</InputLabel>
            <Select
              labelId="labelCategory"
              label="Estado"
              value={task.status}
              name="status"
              onChange={handleStatus}
            >
              <MenuItem value="No Iniciada">No Iniciada</MenuItem>
              <MenuItem value="En Curso">En Curso</MenuItem>
              <MenuItem value="Finalizada">Finalizada</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit">Actualizar</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        message={snackbar.message}
        onClose={() => setSnackbar({ open: false, message: "" })}
      />
    </div>
  );
};

export default UpdateTaskDialog;
