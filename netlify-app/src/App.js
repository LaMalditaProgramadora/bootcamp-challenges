import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/LaMalditaProgramadora">
        LaMalditaProgramadora
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Album() {
  const [cards, setCards] = React.useState([]);

  const getCardsFromApi = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    ).then((res) => res.json());
    setCards(response.slice(0, 52));
  };

  React.useEffect(() => {
    getCardsFromApi();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Deploy a Netlify
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 4,
            pb: 4,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h3"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Deploy a Netlify
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
            >
              Crear una aplicación en react, que muestre los datos luego de
              hacer fetch a esta api:
              <br></br>
              <a href="https://jsonplaceholder.typicode.com/photos">
                https://jsonplaceholder.typicode.com/photos
              </a>
              <br></br>
              Una vez lograda la interfaz, hacer deploy de la aplicación
              utilizando el servicio Netlify, subir el código al repo de los
              challenges y como respuesta a la misión la URL de netlify.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 1 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={3} md={3}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={card.url}
                    alt="{card.title}"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3">
                      {card.title}
                    </Typography>
                    <Typography>Album id: {card.albumId}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Make It Real - Programa Full Stack JavaScript - Tiempo Parcial
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Módulo 4
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
