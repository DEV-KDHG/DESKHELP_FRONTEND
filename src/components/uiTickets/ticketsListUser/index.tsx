import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  Paper,
} from "@mui/material";
import { useCreateHistory, useGetAllTicket } from "../../../hooks";
import SideBarUser from "../../ui/sideBarUser";

const TicketListUser = () => {
  const { isLoading, ticket } = useGetAllTicket();
  const { createHistoryMutation, isPending } = useCreateHistory();

  // Estados para el modal
  const [openModal, setOpenModal] = useState(false);
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const [advance, setAdvance] = useState<string>("");
  const [file, setFile] = useState<string>("");

  // Mapear datos de tickets
  const rows =
    ticket?.map((ticketItem, index) => ({
      id: index,
      code: ticketItem.code,
      affair: ticketItem.affair,
      body: ticketItem.body,
      createDate: ticketItem.createDate,
      file: ticketItem.file,
      fullNameUserCrea: ticketItem.fullNameUserCrea,
      categoryName: ticketItem.categoryName,
      priorityName: ticketItem.priorityName,
      statusName: ticketItem.statusName,
    })) || [];

  // Abrir el modal y limpiar campos
  const handleOpenModal = (code: string) => {
    setSelectedCode(code);
    setAdvance("");
    setFile("");
    setOpenModal(true);
  };

  // Cerrar el modal y limpiar selección
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedCode(null);
  };

  // Validar y enviar datos
  const handleSubmit = async () => {
    if (!advance || !file) {
      alert("Por favor, completa todos los campos antes de enviar.");
      return;
    }

    if (selectedCode) {
      try {
        await createHistoryMutation({
          ticketCode: selectedCode,
          advance,
          file,
        });
        alert("¡Historia creada exitosamente!");
        handleCloseModal();
      } catch (error) {
        console.error("Error al crear historia:", error);
        alert("Ocurrió un error al intentar crear la historia.");
      }
    }
  };

  const columns: GridColDef[] = [
    { field: "code", headerName: "CÓDIGO", width: 80 },
    { field: "affair", headerName: "ASUNTO", width: 100 },
    { field: "body", headerName: "CUERPO", width: 200 },
    { field: "createDate", headerName: "FECHA DE CREACIÓN", width: 150 },
    { field: "file", headerName: "ARCHIVO", width: 120 },
    { field: "fullNameUserCrea", headerName: "USUARIO CREADOR", width: 100 },
    { field: "categoryName", headerName: "CATEGORÍA", width: 150 },
    { field: "priorityName", headerName: "PRIORIDAD", width: 150 },
    { field: "statusName", headerName: "ESTADO", width: 150 },
    {
      field: "actions",
      headerName: "Acciones",
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => handleOpenModal(params.row.code)}
        >
          Crear
        </Button>
      ),
    },
  ];

  return (
    <>
    <SideBarUser/>
      <Paper sx={{ height: 500, width: "90%", margin: "auto", mt: 3 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoPageSize
          sx={{
            "& .MuiDataGrid-cell": { fontSize: "1rem" },
            "& .MuiDataGrid-columnHeaders": { fontSize: "1.2rem" },
          }}
          loading={isLoading}
        />
      </Paper>

      {/* Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Nueva historia
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Código seleccionado: <strong>{selectedCode}</strong>
          </Typography>
          <TextField
            fullWidth
            label="Avance"
            variant="outlined"
            value={advance}
            onChange={(e) => setAdvance(e.target.value)}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            label="Archivo"
            variant="outlined"
            value={file}
            onChange={(e) => setFile(e.target.value)}
            sx={{ mt: 2 }}
          />
          <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={isPending}
            >
              Crear
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleCloseModal}
            >
              Cerrar
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default TicketListUser;
