import styles from "./AssignTicketComponent.module.css";
import {
  useGetAllTicket,
  useGetAllUsers,
  useUpdateTicketAssing,
} from "../../../hooks";
import { useState } from "react";
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import ButtonComponet from "../../ui/Button";
import { AssignTicketDto } from "../../../models/tickets";

const AssignTicketComponent = () => {
  const { UpdateTicketAssing, isLoading: isUpdateLoading } =
    useUpdateTicketAssing();
  const { isLoading, ticket: ticketOpen } = useGetAllTicket();
  const { activeUsers, isLoading: isLoadingUsers } = useGetAllUsers();

  const [selectedTicketCode, setSelectedTicketCode] = useState<string | null>(
    null
  );
  const [selectedUserCode, setSelectedUserCode] = useState<string | null>(null);

  const handleTicketChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedTicketCode(e.target.value as string); // Guardamos el código del ticket seleccionado
  };

  const handleUserChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedUserCode(e.target.value as string); // Guardamos el código del usuario seleccionado
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async () => {
    if (selectedTicketCode && selectedUserCode) {
      try {
        // Convertir los valores a tipo number
        const ticketCodeNumber = Number(selectedTicketCode);
        const userCodeNumber = Number(selectedUserCode);

        // Verificar si la conversión fue exitosa
        if (isNaN(ticketCodeNumber) || isNaN(userCodeNumber)) {
          alert("El código del ticket o del usuario no es válido.");
          return;
        }

        // Crear el objeto AssignTicketDto
        const assignTicketDto: AssignTicketDto = {
          newUserCode: userCodeNumber,
          code: ticketCodeNumber,
        };

        // Llamamos a la función para actualizar la asignación del ticket
        await UpdateTicketAssing(assignTicketDto);
        alert("Ticket asignado correctamente.");
      } catch (error) {
        alert("Hubo un error al asignar el ticket.");
      }
    } else {
      alert("Por favor, selecciona un ticket y un usuario.");
    }

    // Resetear las selecciones después de enviar
    setSelectedTicketCode(null);
    setSelectedUserCode(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.cont}>
        <div className={styles.container_form}>
          <div className={styles.title}>
            <h1>Reasignar Ticketes</h1>
          </div>

          {/* Select para Tickets */}
          <div className={styles.inp}>
            <FormControl fullWidth>
              <InputLabel id="ticket-select-label">
                {isLoading ? "Cargando tickets..." : "Selecciona un ticket"}
              </InputLabel>
              <Select
                labelId="ticket-select-label"
                value={selectedTicketCode || ""}
                onChange={handleTicketChange}
                disabled={isLoading || isUpdateLoading} // Desactiva el select si está cargando
                displayEmpty
              >
                {/* Opción por defecto */}
                <MenuItem value="" disabled>
                  {isLoading ? (
                    <CircularProgress size={24} />
                  ) : (
                    "Selecciona un ticket"
                  )}
                </MenuItem>

                {/* Lista de tickets disponibles */}
                {ticketOpen && ticketOpen.length > 0 ? (
                  ticketOpen.map((ticket: any) => (
                    <MenuItem key={ticket.code} value={ticket.code}>
                      {ticket.name ? ticket.name : `Ticket: ${ticket.code}`}{" "}
                      {/* Ajusta según el nombre del ticket */}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem value="" disabled>
                    No hay tickets disponibles
                  </MenuItem>
                )}
              </Select>
            </FormControl>
          </div>

          {/* Select para Usuarios */}
          <div className={styles.inp}>
            <FormControl fullWidth>
              <InputLabel id="user-select-label">
                {isLoadingUsers
                  ? "Cargando usuarios..."
                  : "Selecciona un usuario"}
              </InputLabel>
              <Select
                labelId="user-select-label"
                value={selectedUserCode || ""}
                onChange={handleUserChange}
                disabled={isLoadingUsers} // Desactiva el select si está cargando
                displayEmpty
              >
                {/* Opción por defecto */}
                <MenuItem value="" disabled>
                  {isLoadingUsers ? (
                    <CircularProgress size={24} />
                  ) : (
                    "Selecciona un usuario"
                  )}
                </MenuItem>

                {/* Lista de usuarios disponibles */}
                {activeUsers && activeUsers.length > 0 ? (
                  activeUsers.map((user: any) => (
                    <MenuItem key={user.code} value={user.code}>
                      {user.name} {user.lastName}{" "}
                      {/* Muestra nombre y apellido del usuario */}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem value="" disabled>
                    No hay usuarios disponibles
                  </MenuItem>
                )}
              </Select>
            </FormControl>
          </div>

          {/* Botón para enviar */}
          <ButtonComponet
            label="Enviar"
            onClick={handleSubmit}
            disabled={isUpdateLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default AssignTicketComponent;
