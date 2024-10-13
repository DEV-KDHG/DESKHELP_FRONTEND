import axios from "axios";

const { VITE_API_BACK_URL, VITE_API_BACK_KEY } = import.meta.env;

export const helpdesk = axios.create({
  baseURL: VITE_API_BACK_URL,
  headers: {
    "api-key": VITE_API_BACK_KEY,
  },
});

helpdesk.interceptors.request.use(
  (config: any) => {
    // Obtener el token directamente del localStorage
    const token = localStorage.getItem("token");

    if (token) {
      // Configurar el header de autorización si el token es válido
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
