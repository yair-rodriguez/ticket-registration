import { Paper, Link } from "@mui/material";
import theme from "../data/theme";

const Footer = () => {
  return (
    <Paper
      component="footer"
      elevation={0}
      square
      sx={{
        p: 2,
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        textAlign: "center",
      }}
    >
      &copy; 2021{" "}
      <Link
        href="https://anconaautopartes.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: theme.palette.primary.light }}
      >
        Ancona Autopartes
      </Link>{" "}
      todos los derechos reservados.
    </Paper>
  );
};

export default Footer;
