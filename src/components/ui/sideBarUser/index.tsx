import StartOutlinedIcon from "@mui/icons-material/StartOutlined";
import {
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SideBarUser = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handledNavigation = (path: string) => () => {
    navigate(path);
    setOpen(false);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          { text: "Dashboard Usuario", path: "/dashboard_user" },
          { text: "Historial", path: "/verhistoriaUser" },
          { text: "Tickets Cerrados", path: "/ticketsCerrado" },
          { text: "Tickets Abiertos", path: "/ticketsAbierto" },
          { text: "Tickets en Progreso", path: "/ticketesEnProgreso" },
          {
            text: "Crear avance de historia",
            path: "/crearAvanceYListarTickets",
          },
        ].map(({ text, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={handledNavigation(path)}>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ fontSize: "1.4rem" }}
              />
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

export default SideBarUser;
