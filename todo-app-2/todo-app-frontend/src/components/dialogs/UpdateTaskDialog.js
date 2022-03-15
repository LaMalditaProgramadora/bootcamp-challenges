import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import * as React from "react";

const UpdateTaskDialog = ({ updateTask, open, setOpen }) => {
  const [task, setTask] = React.useState({});

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setTask(updateTask);
  }, [updateTask]);

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth={true}>
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
          />
          <br></br>
          <br></br>
          <FormControl fullWidth={true} sx={{ fontWeight: "fontWeightBold" }}>
            <InputLabel id="labelCategory">Estado</InputLabel>
            <Select labelId="labelCategory" label="Estado" value={task.status}>
              <MenuItem value="No Iniciada">No Iniciada</MenuItem>
              <MenuItem value="En Curso">En Curso</MenuItem>
              <MenuItem value="Finalizada">Finalizada</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Actualizar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdateTaskDialog;
