import { helpdesk } from "../../api";
import {
  AssignTicketDto,
  ticketGetMultiFilters,
  TicketGetOpen,
  TicketInProcces,
  Tickets,
  TicketsDto,
  UpdateTicketsStatusDto,
} from "../../models/tickets";

export const saveTicket = async (ticket: TicketsDto) => {
  const { data } = await helpdesk.post("/tickets/create", ticket);

  return data as Tickets;
};

export const getOpenTicketsInSession = async () => {
  const { data } = await helpdesk.get("/tickets/open-tickets");

  return data as TicketGetOpen[];
};

export const getAllTicketsByStatus = async ({ status }: { status: string }) => {
  const { data } = await helpdesk.get("/tickets/like-status", {
    params: { status },
  });
  return data;
};

export const getTicketByCode = async ({
  codeTicket,
}: {
  codeTicket: string;
}) => {
  const { data } = await helpdesk.get("/tickets/consult", {
    params: { codeTicket },
  });

  return data;
};

export const getTicketByCodeInSession = async ({
  codeTicket,
}: {
  codeTicket: string;
}) => {
  const { data } = await helpdesk.get("/tickets/consult/code", {
    params: { codeTicket },
  });

  return data;
};

export const getTicketByCodeIfExist = async ({
  codeTicket,
}: {
  codeTicket: string;
}) => {
  const { data } = await helpdesk.get("/tickets/code", {
    params: { codeTicket },
  });

  return data;
};

export const getAllTicketsByCode = async ({ code }: { code: string }) => {
  const { data } = await helpdesk.get("/tickets/like-code", {
    params: { code },
  });
  return data;
};
export const getCountStadic = async ({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) => {
  const { data } = await helpdesk.get("/tickets/countStadistic", {
    params: { startDate, endDate },
  });
  return data;
};

export const getAllTicketsInProcess = async () => {
  const { data } = await helpdesk.get("tickets/inProcess");
  return data as TicketInProcces[];
};

export const getAllTicketsInProcessInSession = async () => {
  const { data } = await helpdesk.get("/tickets/in-progress-tickets");
  return data as TicketGetOpen[];
};

export const getAllOpenTickets = async () => {
  const { data } = await helpdesk.get("/tickets/listOpen");

  return data as TicketGetOpen[];
};

export const getTicketByMutiByFilter = async ({
  affair,
  status,
  userAssigned,
}: {
  affair: string;
  status: string;
  userAssigned: string;
}) => {
  const { data } = await helpdesk.get("/tickets/multi-filters", {
    params: { affair, status, userAssigned }, // Corrección: usar 'params' para pasar los parámetros
  });
  return data as ticketGetMultiFilters;
};

export const getAllTicket = async () => {
  const { data } = await helpdesk.get("/tickets/list ");

  return data as TicketGetOpen[];
};

export const updateStatusTicketsBycode = async (
  ticket: UpdateTicketsStatusDto
) => {
  const { codeTickets, newStatusCode } = ticket;
  const { data } = await helpdesk.put("/tickets/update-status", ticket, {
    params: { codeTickets, newStatusCode },
  });
  return data;
};

export const assignTicketToUser = async (ticket: AssignTicketDto) => {
  const { code, newUserCode } = ticket;

  // Realizamos la llamada PUT a la API
  const { data } = await helpdesk.put("/tickets/assign", ticket, {
    params: { code, newUserCode },
  });

  // Retornamos la respuesta de la API
  return data;
};

export const getTicketClosed = async () => {
  const { data } = await helpdesk.get("/tickets/closed");

  return data as TicketGetOpen[];
};

export const getTicketClosedInSession = async () => {
  const { data } = await helpdesk.get("/tickets/closed-tickets");

  return data as TicketGetOpen[];
};
