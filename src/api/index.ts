import axios from "axios";

const { VITE_API_BACK_URL, VITE_API_BACK_KEY } = import.meta.env;

export const helpdesk = axios.create({
  baseURL: VITE_API_BACK_URL,
  headers: {
    "api-key": VITE_API_BACK_KEY,
  },
});

/*
#Antes de que se envíe una solicitud, se obtiene un token del localStorage.

#Si el token existe, se añade un encabezado de autorización (Authorization) con el valor Bearer ${token} 
a la configuración de la solicitud.

#Si hay un error en la configuración de la solicitud, se rechaza la promesa con el error. 
  */

helpdesk.interceptors.request.use(
  (config: any) => {
    const token = JSON.parse(localStorage.getItem("token") || "{}");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
