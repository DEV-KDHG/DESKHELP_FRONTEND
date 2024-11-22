import {
  AppBar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  FormControl,
  Grid,
  Grid2,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Toolbar,
  Typography,
} from "@mui/material";
import style from "./boards.module.css";
import ListTicketsInProcess from "../../../components/uiTickets/InProcess";
import { useState } from "react";
import OpenTicketsList from "../../../components/uiTickets/openTicketsList";
import ClosedTicketList from "../../../components/uiTickets/closedTicketList";
import SideBarComponent from "../../../components/ui/SideBar";

const TicketsAdmin = () => {
  const [selectedComponent, setSelectedComponent] = useState("Abiertos");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedComponent(event.target.value as string);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "En proceseso":
        return <ListTicketsInProcess />;
      case "Abiertos":
        return <OpenTicketsList />;
      case "Cerrados":
        return <ClosedTicketList />;
      default:
        return null;
    }
  };

  return (
    <> 
    <SideBarComponent/>
    <Box sx={{ flexGrow: 1 }}>
      
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid2 container spacing={3}>
          <Grid component="div" item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "row", gap: 2 }}>
              <FormControl fullWidth>
                <InputLabel>Estado</InputLabel>
                <Select
                  label="Estado"
                  value={selectedComponent}
                  onChange={handleChange}
                  sx={{ backgroundColor: "white", borderRadius: 1 }}
                >
                  <MenuItem value="En proceseso">En proceseso</MenuItem>
                  <MenuItem value="Abiertos">Abiertos</MenuItem>
                  <MenuItem value="Cerrados">Cerrados</MenuItem>
                </Select>
              </FormControl>
            </Paper>
          </Grid>
          <div className={style.containerBoard}>{renderComponent()}</div>
        </Grid2>
      </Container>
    </Box>
  
    </>);
};

export default TicketsAdmin;
