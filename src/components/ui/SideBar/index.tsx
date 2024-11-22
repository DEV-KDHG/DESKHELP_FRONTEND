import StartOutlinedIcon from "@mui/icons-material/StartOutlined";
import styles from "./Sidebar.module.css";
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

const SideBarComponent = () => {
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
          { text: "Home", path: "/dashboard_admin" },
          { text: "Admin Dashboard", path: "/dashboard_admin" },
          { text: "Administracion de cuentas", path: "/admin" },
          { text: "Categorias", path: "/categoria" },
          { text: "Administracion de areas", path: "/area" },

          { text: "Estadistica de tickets", path: "/estadisitica" },
          { text: "Estado de ticketes", path: "/estadosTickts-admin" },

          { text: "Crear estados de tickets", path: "/estado" },
          { text: "Cambiar contraseña", path: "/cambiaContraseña" },
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
      <List>
        {[
          { text: "Historial de tickets", path: "/verhistoria" },
          { text: "Prioridad", path: "/priorities" },
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
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <div className={styles.icon_container}>
          <StartOutlinedIcon fontSize={"large"} color={"primary"} />
        </div>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default SideBarComponent;
