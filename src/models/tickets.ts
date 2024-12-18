export interface Tickets {
  affair: string;
  body: string;
  file?: File | null;
  codeUserCreate: string;
  codeUserAssigne: string;
  codeCategory: string;
  codePriorities: string;
  codeStatus: string;
}
export type TicketsDto = Omit<Tickets, "id_tickets">;
export type UpdateTicketsDto = Partial<Tickets>;

export type UpdateTicketsStatusDto = {
  codeTickets: number; // The ticket code to be updated
  newStatusCode: number; // The new status code
};

export type AssignTicketDto = {
  code: number;
  newUserCode: number;
};
export type TicketGetOpen = {
  code: number;
  affair: string;
  body: string;
  createDate: string;
  file: string;
  fullNameUserCrea: string;
  categoryName: string;
  priorityName: string;
  statusName: string;
};

export type ticketGetMultiFilters = {
  affair?: string;
  status?: string;
  userAssigned?: string;
};


export type TicketInProcces= {
  code: number;
  affair: string;
  body: string;
  createDate: string;
  file: string | null;
  fullNameUserCrea: string;
  fullNameUserAsignado: string;
  categoryName: string;
  priorityName: string;
  statusName: string;
}
