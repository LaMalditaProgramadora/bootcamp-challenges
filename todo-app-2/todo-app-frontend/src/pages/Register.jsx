import { Snackbar } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/UserService";

const Register = () => {
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = React.useState({ open: false, message: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const user = {
      username: formData.get("username"),
      password: formData.get("password"),
      email: formData.get("email"),
    };
    if (user.username !== "" && user.password !== "" && user.email !== "") {
      register(user).then((data) => {
        setSnackbar({ open: true, message: "data.message" });
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
      <label>Regístrate</label>
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
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Usuario"
          name="username"
          autoComplete="username"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Contraseña"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Registrarse
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

export default Register;
