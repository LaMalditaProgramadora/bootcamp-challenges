import { Box, Snackbar } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { removeAll, setAll } from "../services/StorageService";
import { login } from "../services/UserService";

const Login = () => {
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = React.useState({ open: false, message: "" });
  const initLocalStorage = () => {
    removeAll();
  };

  React.useEffect(() => {
    initLocalStorage();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const user = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    if (user.username !== "" && user.password !== "") {
      login(user).then((data) => {
        setSnackbar({ open: true, message: data.message });
        if (data.status === 1) {
          setAll(data.data._id, data.data.username, "Bearer " + data.data.token.toString());
          navigate("/task", { replace: true });
        }
      });
    } else {
      setSnackbar({ open: true, message: "Ingrese todos los campos" });
    }
  };

  return (
    <>
      <label>Inicia Sesión</label>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Usuario"
          name="username"
          autoComplete="username"
          autoFocus
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
          Ingresa
        </Button>
        <Link href="/passwordRecovery" variant="body2">
          ¿Olvidaste la contraseña?
        </Link>
        <br></br>
        <Link href="/register" variant="body2">
          Regístrate
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

export default Login;
