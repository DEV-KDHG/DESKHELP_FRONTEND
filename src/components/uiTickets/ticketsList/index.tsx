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

const TicketList = () => {
  const { isLoading, ticket } = useGetAllTicket();
  const { createHistoryMutation, isPending } = useCreateHistory();

  // Estados para el modal
  const [openModal, setOpenModal] = useState(false);
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const [advance, setAdvance] = useState<string>(""); // Estado para 'advance'
  const [file, setFile] = useState<string>(""); // Estado para 'file'

  // Si ticket es un arreglo
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

  const handleOpenModal = (code: string) => {
    setSelectedCode(code); // Guardar el código seleccionado
    setAdvance(""); // Limpiar el campo 'advance' al abrir el modal
    setFile(""); // Limpiar el campo 'file' al abrir el modal
    setOpenModal(true); // Abrir el modal
  };

  const handleCloseModal = () => {
    setOpenModal(false); // Cerrar el modal
    setSelectedCode(null); // Limpiar el código seleccionado
  };

  const handleSubmit = async () => {
    if (selectedCode && advance && file) {
      // Lógica para crear historia con el código, avance y archivo
      try {
        await createHistoryMutation({
          ticketCode: selectedCode,
          advance,
          file,
        });
        alert(" Creado exitosamente historia:");

        // Limpiar los campos y cerrar el modal
        setAdvance("");
        setFile("");
        setSelectedCode(null);
        handleCloseModal();

        // Puedes realizar más acciones si es necesario, como recargar la lista de tickets.
      } catch (error) {
        console.error("Error al crear historia:", error);
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
      headerName: "Crear historia",
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
      <Paper sx={{ height: 500, width: "90%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoPageSize
          sx={{
            "& .MuiDataGrid-cell": {
              fontSize: "1rem",
            },
            "& .MuiDataGrid-columnHeaders": {
              fontSize: "1.2rem",
            },
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
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            onClick={handleSubmit}
            disabled={isPending} // Deshabilitar el botón mientras se está enviando
          >
            Crear avance de historia
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 3, ml: 2 }}
            onClick={handleCloseModal}
          >
            Cerrar
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default TicketList;
