import { helpdesk } from "../../api";
import { HistoryDto, HistoryRecord } from "../../models/history";

export const saveHistory = async (history: HistoryDto) => {
  const { ticketCode } = history;
  const { data } = await helpdesk.post("/history/advance", history, {
    params: { ticketCode },
  });

  return data as History;
};

export const getHistoryAllByCode = async ({
  codeTicket,
}: {
  codeTicket: string;
}) => {
  const { data } = await helpdesk.get("/history", {
    params: { codeTicket },
  });

  return data as HistoryRecord;
};
