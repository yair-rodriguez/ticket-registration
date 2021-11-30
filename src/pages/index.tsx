import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Form from "../components/Form";
import Footer from "../components/Footer";
import { CardMedia, Grid, Typography } from "@mui/material";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Registro de ticket - Ancona Autopartes</title>
        <meta
          name="description"
          content="Registra tus tickets de compra de Ancona Autopartes"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <NavBar />
      <Grid container>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image="img/bg.png"
            alt="Ancona Autopartes"
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 4 }}>
          <Typography variant="h5" component="h1">
            ¡Participa en las rifas decembrinas de Ancona Autopartes!
          </Typography>
          <Typography variant="subtitle1">Instrucciones:</Typography>
          <ul>
            <li>
              Captura tu ticket de compra y datos de contacto en el formulario
              de esta página web.
            </li>
            <li>
              Verifica tus datos, ya que de resultar ganador te contactaremos
              por alguno de esos medios.
            </li>
            <li> Da clic en el botón "Completar registro".</li>
            <li>
              ¡Listo!, Tu registro habrá sido capturado y ya estarás
              participando.
            </li>
          </ul>
          <Form />
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
};

export default Home;
