import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import {
  useCreateTicket,
  useGetAllCategories,
  useGetAllPriorities,
  useGetAllStatus,
  useGetAllUsers,
  useGetUserInSession,
} from "../../../hooks";
import { TicketsDto } from "../../../models/tickets";
import React, { useRef } from "react";

const CreateTicket = () => {
  const { CrateTicketMutation: create, isPending, reset } = useCreateTicket();
  const { getCurrentUser, isLoading: isUserLoading } = useGetUserInSession();
  const { isLoading: isCategoryLoading, category } = useGetAllCategories();
  const { isLoading: isPrioritisLoading, priorities } = useGetAllPriorities();
  const { isLoading: isStatusLoading, status } = useGetAllStatus();
  const { isLoading: isUsersLoading, activeUsers } = useGetAllUsers();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const formRef = useRef<HTMLFormElement>(null); // Referencia al formulario
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset(); // Limpiar el estado global del hook
    if (formRef.current) {
      formRef.current.reset(); // Resetear los campos del formulario
    }
  };

  const saveTicket = async (data: TicketsDto) => {
    console.log("Datos enviados", data); // Para debugging
    try {
      await create({ ...data }); // Envía los datos al hook
      reset(); // Limpia el estado del hook después de la creación
      setOpen(false); // Cierra el modal
    } catch (error) {
      console.error("Error al guardar el ticket:", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const ticketData: TicketsDto = {
        affair: formData.get("affair") as string,
        body: formData.get("body") as string,
        file: formData.get("file") as File | null,
        codeUserCreate: formData.get("codeUserCreate") as string,
        codeUserAssigne: formData.get("codeUserAssigne") as string,
        codeCategory: formData.get("codeCategory") as string,
        codePriorities: formData.get("codePriorities") as string,
        codeStatus: formData.get("codeStatus") as string,
      };

      await saveTicket(ticketData); // Llama a la función para gestionar el guardado
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
        sx={{
          borderRadius: "20px",
          padding: "10px 20px",
          textTransform: "none",
          fontWeight: "bold",
        }}
      >
        Crear Ticket
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen={fullScreen}
        PaperProps={{
          sx: {
            borderRadius: fullScreen ? 0 : "10px",
            minWidth: fullScreen ? "100%" : "600px",
          },
        }}
      >
        <DialogTitle
          sx={{ m: 0, p: 2, bgcolor: "primary.main", color: "white" }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            Crear Nuevo Ticket
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "white",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box
            component="form"
            ref={formRef}
            onSubmit={handleSubmit}
            id="create-ticket-form"
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="affair"
              label="Asunto"
              name="affair"
              autoFocus
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="body"
              label="Descripción"
              id="body"
              multiline
              rows={4}
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              margin="normal"
              fullWidth
              type="file"
              id="file"
              name="subir archivo"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <FormControl
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            >
              <InputLabel id="codeUserCreate-label">Usuario Creador</InputLabel>
              <Select
                labelId="codeUserCreate-label"
                id="codeUserCreate"
                name="codeUserCreate"
                label="Usuario Creador"
                value={getCurrentUser?.code || ""}
              >
                <MenuItem
                  value={getCurrentUser?.code}
                >{`Usuario ${getCurrentUser?.code}`}</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            >
              <InputLabel id="codeUserAssigne-label">Asignar a:</InputLabel>
              <Select
                labelId="codeUserAssigne-label"
                id="codeUserAssigne"
                name="codeUserAssigne"
                label="Usuario Asignado"
              >
                {activeUsers?.map((user) => (
                  <MenuItem key={user.code} value={user.code}>
                    {user.code}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            >
              <InputLabel id="codeCategory-label">Categoría</InputLabel>
              <Select
                labelId="codeCategory-label"
                id="codeCategory"
                name="codeCategory"
                label="Categoría"
              >
                {category?.content.map((cat) => (
                  <MenuItem key={cat.code} value={cat.code}>
                    {cat.code}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            >
              <InputLabel id="codePriorities-label">Prioridad</InputLabel>
              <Select
                labelId="codePriorities-label"
                id="codePriorities"
                name="codePriorities"
                label="Prioridad"
              >
                {priorities?.content.map((priority) => (
                  <MenuItem key={priority.code} value={priority.code}>
                    {priority.code}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            >
              <InputLabel id="codeStatus-label">Estado</InputLabel>
              <Select
                labelId="codeStatus-label"
                id="codeStatus"
                name="codeStatus"
                label="Estado"
              >
                {status?.content.map((statu) => (
                  <MenuItem key={statu.code} value={statu.code}>
                    {statu.code}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions
          sx={{ padding: "16px", justifyContent: "space-between" }}
        >
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Cancelar
          </Button>
          <Button
            type="submit"
            form="create-ticket-form"
            variant="contained"
            color="primary"
            disabled={isPending}
          >
            Crear Ticket
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateTicket;
