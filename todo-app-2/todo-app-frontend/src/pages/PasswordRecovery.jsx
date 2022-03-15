import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import * as React from "react";

const PasswordRecovery = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      eamil: data.get("email"),
    });
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
    </>
  );
};

export default PasswordRecovery;
