import { Snackbar } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { restorePassword } from "../services/UserService";

const PasswordRecovery = () => {
  const [snackbar, setSnackbar] = React.useState({ open: false, message: "" });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    if (email !== "") {
      restorePassword(email).then((data) => {
        setSnackbar({ open: true, message: data.message });
        if (data.status === 1) {
          navigate("/login", { replace: true });
        }
      });
    } else {
      setSnackbar({ open: true, message: "Ingrese todos los campos" });
    }
  };

  return (
    <>
      <label>Recupera tu Contraseña</label>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Correo electrónico"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Enviar correo
        </Button>
        <Link href="/login" variant="body2">
          Volver
        </Link>
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        message={snackbar.message}
        onClose={() => setSnackbar({ open: false, message: "" })}
      />
    </>
  );
};

export default PasswordRecovery;
