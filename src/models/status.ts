
export interface Status{
    name: string,
    statusEntity: string,
    code: string,
}
export type StatusDto= Omit<Status,"id_status">;
export type UpdateStatus= Partial<Status>;