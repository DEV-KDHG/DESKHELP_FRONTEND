import StartOutlinedIcon from "@mui/icons-material/StartOutlined";
import { Box, Drawer, Button, List, Divider, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SideBarAgente = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Maneja la navegación
  const handledNavigation = (path: string) => () => {
    navigate(path);
    setOpen(false); // Cerrar el Drawer al navegar
  };

  // Función para abrir y cerrar el Drawer
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // Lista de elementos de navegación
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[ 
          // Rutas verificadas
          { text: "Dashboard Agente", path: "/dashboardAgente" }, // RUTA CORREGIDA
          { text: "Historial de Tickets", path: "/verhistoriaAgentes" }, // RUTA CORREGIDA
          { text: "Tickets Cerrados", path: "/ticketsCerradoAgent" },
          { text: "Tickets Abiertos", path: "/ticketsAbiertoAgent" },
          { text: "Tickets en Progreso", path: "/ticketesEnProgresoAgente" },
          { text: "Consultar Tickets por Estados", path: "/estadosTickts-admin" },
          { text: "Crear avance de historia", path: "/crearAvanceYListarTicketsAgente" },
        ].map(({ text, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={handledNavigation(path)}>
              <ListItemText primary={text} primaryTypographyProps={{ fontSize: "1.4rem" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <StartOutlinedIcon fontSize="large" color="primary" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default SideBarAgente;
