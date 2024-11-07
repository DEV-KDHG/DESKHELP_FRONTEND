
export interface Status{
    name: string
}
export type StatusDto= Omit<Status,"id_status">;
export type UpdateStatus= Partial<Status>;