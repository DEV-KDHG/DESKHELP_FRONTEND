import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { useGetCountStadistic } from "../../../hooks";
import DatePicker from "react-datepicker";
import styles from "./count.module.css"
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

  const CountStadisticChart= () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
  
    // Convierte las fechas al formato esperado por el backend (DD/MM/YYYY)
    const formatDate = (date: Date | null) => {
      if (!date) return "";
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Los meses empiezan en 0
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };
  
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);
  
    // Hook para obtener las estadísticas
    const { countStadistic, isLoading } = useGetCountStadistic(formattedStartDate, formattedEndDate);
  
  
    return (
      <div className={styles.container}>
      <div className={styles.containerTodata}>
        <div className={styles.containerData}>
          <h2 className={styles.header}>Estadísticas de Tickets</h2>
          <div className={styles.datePickerContainer}>
            <div className={styles.datePickerField}>
              <label htmlFor="startDate">Fecha de Inicio:</label>
              <DatePicker
                id="startDate"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Seleccionar fecha de inicio"
                className={styles.dateInput}
                calendarClassName={styles.customCalendar}
              />
            </div>
            <div className={styles.datePickerField}>
              <label htmlFor="endDate">Fecha de Fin:</label>
              <DatePicker
                id="endDate"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Seleccionar fecha de fin"
                className={styles.dateInput}
                calendarClassName={styles.customCalendar}
              />
            </div>
          </div>
        </div>
        <div className={styles.chartContainer}>
          {isLoading ? (
            <p className={styles.loadingText}>Cargando datos...</p>
          ) : countStadistic && countStadistic.length > 0 ? (
            <BarChart
              width={600}
              height={350}
              data={countStadistic}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="statusName" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          ) : (
            <p className={styles.noDataText}>
              No se encontraron datos para el rango de fechas seleccionado.
            </p>
          )}
        </div>
      </div>
    </div>
    );
  };
  
  export default CountStadisticChart;