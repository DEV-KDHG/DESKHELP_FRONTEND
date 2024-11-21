import { BarChart } from "@mui/icons-material";
import {
  AppBar,
  Box,
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

import {
  Bar,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ListTicketsInProcess from "../../../components/uiTickets/InProcess";
import { useState } from "react";
import OpenTicketsList from "../../../components/uiTickets/openTicketsList";
import ClosedTicketList from "../../../components/uiTickets/closedTicketList";

const TicketsAdmin = () => {
  const [selectedComponent, setSelectedComponent] = useState("En progreso");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedComponent(event.target.value as string);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "En progreso":
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard de Helpdesk
          </Typography>
        </Toolbar>
      </AppBar>
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
                >
                  <MenuItem value="En progreso">En progreso</MenuItem>
                  <MenuItem value="Abiertos">Abiertos</MenuItem>
                  <MenuItem value="Cerrados">Cerrados</MenuItem>
                </Select>
              </FormControl>
            </Paper>
          </Grid>
          <Paper sx={{ marginTop: 1 }}>
            {renderComponent()}
          </Paper>
        </Grid2>
      </Container>
    </Box>
  );
};

export default TicketsAdmin;
