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
import { addTaskGroup } from "../../services/GroupService";
import { addTaskUser } from "../../services/UserService";
import * as React from "react";

const CreateTaskDialog = ({ id, type, open, setOpen, reload }) => {
  const [snackbar, setSnackbar] = React.useState({ open: false, message: "" });

  const handleClose = () => {
    setOpen(false);
  };

  const addTaskFromApi = (task) => {
    if (type === "user") {
      addTaskUser(id, task).then((data) => {
        setSnackbar({ open: true, message: data.message });
        if (data.status === 1) {
          reload();
          setOpen(false);
        }
      });
    } else {
      addTaskGroup(id, task).then((data) => {
        setSnackbar({ open: true, message: data.message });
        if (data.status === 1) {
          reload();
          setOpen(false);
        }
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const task = {
      name: formData.get("name"),
      status: formData.get("status"),
    };
    if (task.name === "") {
      setSnackbar({ open: true, message: "Ingrese todos los campos" });
    } else {
      addTaskFromApi(task);
    }
  };

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
        <DialogTitle>Crear Tarea</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            type="name"
            fullWidth
            name="name"
          />
          <br></br>
          <br></br>
          <FormControl fullWidth={true} sx={{ fontWeight: "fontWeightBold" }}>
            <InputLabel id="labelCategory">Estado</InputLabel>
            <Select
              labelId="labelCategory"
              label="Estado"
              defaultValue="No Iniciada"
              name="status"
            >
              <MenuItem value="No Iniciada">No Iniciada</MenuItem>
              <MenuItem value="En Curso">En Curso</MenuItem>
              <MenuItem value="Finalizada">Finalizada</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit">Crear</Button>
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

export default CreateTaskDialog;
