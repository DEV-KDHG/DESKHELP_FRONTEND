import StartOutlinedIcon from "@mui/icons-material/StartOutlined";
import styles from './Sidebar.module.css';
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
          "Home",
          "My Dashboard",
          "Servicios",
          "Administracion de cuentas",
          "Categorias",
          "Administracion de areas",
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
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
        {["Historial de tickets", "Trazabilidad de tickets", "Prioridad"].map(
          (text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{ fontSize: "1.4rem" }}
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <div className={styles.icon_container }>
          <StartOutlinedIcon fontSize={"large"}  color={"primary"}/>
        </div>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default SideBarComponent;
