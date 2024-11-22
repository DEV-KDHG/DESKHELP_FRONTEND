import { useState, useEffect } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  CircularProgress,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetAllTicket } from "../../../hooks";
import { useGetHistoryTicketByCode } from "../../../hooks/history/useGetHistoryTicket";
import { HistoryRecord } from "../../../models/history";

import styles from "./SeeHistory.module.css";
import SideBarUser from "../../ui/sideBarUser";

const SeeHistoryUser = () => {
  const { ticket, isLoading: isLoadingTickets } = useGetAllTicket();
  const [selectedTicket, setSelectedTicket] = useState<string>(""); // Estado para el código seleccionado
  const [historyData, setHistoryData] = useState<HistoryRecord[]>([]); // Para almacenar los datos de la historia

  // Llamada al hook que obtiene la historia por código
  const { isLoading: isLoadingHistory, ticketGetHistory } =
    useGetHistoryTicketByCode();

  // Función para manejar el cambio en la selección del ticket
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setSelectedTicket(value); // Actualiza el valor seleccionado
  };

  // Efecto para obtener la historia del ticket seleccionado
  useEffect(() => {
    const fetchHistory = async () => {
      if (selectedTicket && ticketGetHistory) {
        try {
          // Asegurarnos de que ticketGetHistory retorne un array de historia
          const history: HistoryRecord[] = await ticketGetHistory({
            codeTicket: selectedTicket,
          });
          setHistoryData(history); // Almacenar la historia en el estado
        } catch (error) {
          console.error("Error al obtener la historia del ticket", error);
        }
      }
    };

    if (selectedTicket) {
      fetchHistory(); // Ejecutar la búsqueda de historia si hay un ticket seleccionado
    }
  }, [selectedTicket, ticketGetHistory]);

  // Definir las columnas para la tabla de DataGrid
  const columns: GridColDef[] = [
    { field: "secuencia", headerName: "SECUENCIA", width: 50 },
    { field: "fechaRegistro", headerName: "FECHA REGISTRO", width: 180 },
    { field: "affair", headerName: "ASUNTO", width: 100 },
    { field: "body", headerName: "CUERPO", width: 120 },
    { field: "description", headerName: "DESCRIPCIÓN", width: 120 },
    { field: "advance", headerName: "AVANCE", width: 100 },
    { field: "name", headerName: "NOMBRE", width: 120 },
    { field: "file", headerName: "ARCHIVO", width: 80 },
    { field: "codUserOwner", headerName: "USUARIO CREADOR", width: 100 },
    { field: "codUserAssigne", headerName: "USUARIO ASIGNADO", width: 100 },
    { field: "codUserAdvance", headerName: "USUARIO AVANCE", width: 100 },
  ];

  // Mapeamos la historia a las filas para el DataGrid
  const rows = historyData.map((history: HistoryRecord, index: number) => ({
    id: index,
    secuencia: history.secuencia,
    fechaRegistro: history.fechaRegistro,
    affair: history.affair,
    body: history.body,
    description: history.description,
    advance: history.advance,
    name: history.name,
    file: history.file,
    codUserOwner: history.codUserOwner,
    codUserAssigne: history.codUserAssigne,
    codUserAdvance: history.codUserAdvance,
  }));

  return (
    <div className="">
      <SideBarUser />
      <h1>Historial de avance de tickets</h1>
      <div className={styles.history}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          {/* Selección de código de ticket */}
          <FormControl
            size="small"
            fullWidth
            sx={{ maxWidth: 300, marginBottom: 2 }}
          >
            <InputLabel>Seleccione un Código</InputLabel>
            <Select
              value={selectedTicket}
              onChange={handleChange}
              label="Código"
              disabled={isLoadingTickets}
              sx={{
                backgroundColor: "white",
                "& .MuiSelect-icon": {
                  color: "#000",
                },
                "& .MuiInputBase-input": {
                  color: "#000",
                },
              }}
            >
              <MenuItem value="">Seleccione un código</MenuItem>

              {isLoadingTickets ? (
                <MenuItem disabled>Loading...</MenuItem>
              ) : (
                ticket?.map((item) => (
                  <MenuItem key={item.code} value={item.code}>
                    {item.code}
                  </MenuItem>
                ))
              )}
            </Select>
          </FormControl>

          {/* Tabla para mostrar la historia */}
          {isLoadingHistory ? (
            <CircularProgress sx={{ marginTop: 4 }} />
          ) : (
            <Box sx={{ height: 500, width: "80%", marginTop: "20px" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10} // Página más grande
                autoHeight // Hace que la tabla ajuste su altura automáticamente
                disableSelectionOnClick
                sx={{
                  backgroundColor: "white",
                  boxShadow: 3, // Agregar sombra para hacerla más visible
                  borderRadius: 1, // Bordes redondeados
                }}
              />
            </Box>
          )}
        </Box>
      </div>
    </div>
  );
};

export default SeeHistoryUser;
