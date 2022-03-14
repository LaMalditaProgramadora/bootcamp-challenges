import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { login } from "../services/UserService";
import * as React from "react";
import { Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const Login = () => {
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = React.useState({ open: false, message: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const user = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    if (user.username !== "" && user.password !== "") {
      login(user).then((data) => {
        setSnackbar({ open: true, message: "data.message" });
        if (data.status === 1) {
          
          navigate("/todo-app/task", { replace: true });
        }
      });
    } else {
      setSnackbar({ open: true, message: "Ingrese todos los campos" });
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              ToDo App 2
            </Typography>
            <label>Inicia Sesión</label>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
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
          </Box>
        </Container>
      </ThemeProvider>
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
