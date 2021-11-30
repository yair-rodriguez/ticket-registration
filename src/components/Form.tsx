import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Snackbar,
  IconButton,
} from "@mui/material";
import {
  Receipt,
  Person,
  AlternateEmail,
  Phone,
  Close,
} from "@mui/icons-material";
import { offertsAPI } from "../api";
import { IPostOffertsRequest } from "../interfaces/offerts";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const [formData, setFormData] = useState({
    fullName: "",
    ticketNum: "",
    email: "",
    tel: "",
  } as IPostOffertsRequest);

  const handleChange = (e: React.FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    offertsAPI.post(formData).then(({ data, errors, message, succeeded }) => {
      if (errors) console.error(errors);
      if (succeeded && data !== 0) {
        setSnackbar({
          open: true,
          message: `Registro exitoso, ¡Mucha suerte! 🍀`,
        });
      } else {
        setSnackbar({
          open: true,
          message: `${message} 👀`,
        });
      }
    });
    setLoading(false);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setSnackbar({
      open: false,
      message: "",
    });
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close />
      </IconButton>
    </>
  );

  return (
    <Box
      component="main"
      sx={{
        // minHeight: "100vh",
        padding: "1rem 0",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper variant="outlined" sx={{ p: 2, m: "auto", width: "100%" }}>
        <Typography variant="h6" component="h2">
          Registro
        </Typography>
        <Typography variant="caption" sx={{ mt: 1 }}>
          * Campos obligatorios
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
            <Receipt sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="ticket-num"
              name="ticketNum"
              label="Número de ticket"
              variant="standard"
              onChange={handleChange}
              fullWidth
              required
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
            <Person sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="full-name"
              name="fullName"
              label="Nombre completo"
              variant="standard"
              onChange={handleChange}
              fullWidth
              required
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
            <AlternateEmail sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="email"
              name="email"
              type="email"
              label="Correo electrónico"
              variant="standard"
              onChange={handleChange}
              fullWidth
              required
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
            <Phone sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="tel"
              name="tel"
              type="tel"
              label="Número telefónico"
              variant="standard"
              onChange={handleChange}
              fullWidth
              required
            />
          </Box>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            disableElevation
            fullWidth
            // endIcon={<Send />}
            sx={{ mt: 1 }}
          >
            {loading ? "Enviando..." : "Completar registro"}
          </Button>
          <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={snackbar.message}
            action={action}
          />
        </form>
      </Paper>
    </Box>
  );
};

export default Form;
