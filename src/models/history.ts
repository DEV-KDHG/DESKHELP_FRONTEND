export interface History {
  advance: string;
  file: string;
}
export type HistoryDto = Omit<History, "id">;
export type UpdateHistoryDto = Partial<History>;

export type HistoryRecord = {
  codeticket: number;
  secuencia: number;
  fechaRegistro: string;
  affair: string;
  body: string;
  description: string;
  advance: string;
  name: string;
  file: string;
  codUserOwner: string;
  codUserAssigne: string;
  codUserAdvance: string;
};
