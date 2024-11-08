
export interface Status{
    name: string,
    statusEntity: string,
}
export type StatusDto= Omit<Status,"id_status">;
export type UpdateStatus= Partial<Status>;