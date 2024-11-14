import { helpdesk } from "../../api";
import { Area, AreaDto } from "../../models/area";

export const saveArea = async (area: AreaDto) => {
  const { data } = await helpdesk.post("/area/create", area);

  return data as Area;
};
export const getAllAreas = async () => {
  const { data } = await helpdesk.get("/area/list");

  return data as Area[];
};

export const searchAreaByCode = async (code: string) => {
  const { data } = await helpdesk.get(`/area/searchByCode?code=${code}`);

  return data[0] as Area;
};

export const updateArea = async (area: AreaDto) => {
  const { code, name } = area;
  const { data } = await helpdesk.put(`/area/update-name`, null, {
    params: {
      code,
      name,
    },
  });

  return data as Area;
};
