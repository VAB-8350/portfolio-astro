import { CalculateYears } from "./CalculateYears";

export default function replaceYearMarks(texto) {
  // Expresión regular para encontrar los marcadores {years[dd/mm/yyyy]}
  const regex = /\{\s*years\s*\[\s*(\d{2}\/\d{2}\/\d{4})\s*\]\s*\}/g;
  
  // Reemplazar cada coincidencia
  return texto.replace(regex, (match, fecha) => {
      try {
          const anios = CalculateYears(fecha);
          return anios.toString();
      } catch (error) {
          console.error(`Error al procesar la fecha ${fecha}: ${error.message}`);
          return match; // Si hay error, dejar el marcador original
      }
  });
}