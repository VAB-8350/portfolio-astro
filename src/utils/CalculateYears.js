// Formatos validos
// 'YYYY-MM-DD'
// 'MM/DD/YYYY'
// 'Jan 1, 2000'
// Timestamp en milisegundos

export function CalculateYears(stringDate) {
  // Convertir la fecha pasada a objeto Date
  const lastDate = new Date(stringDate);
  const currentDate = new Date();
  
  // Validar que la fecha sea válida
  if (isNaN(lastDate.getTime())) {
      throw new Error('Invalid date format');
  }
  
  // Verificar que la fecha no sea en el futuro
  if (lastDate > currentDate) {
      throw new Error('Date cannot be in the future');
  }
  
  // Calcular la diferencia en años
  let years = currentDate.getFullYear() - lastDate.getFullYear();
  
  // Ajustar si aún no ha pasado el mes o el día del año
  const currentMonth = currentDate.getMonth();
  const beforeMonth = lastDate.getMonth();
  
  if (beforeMonth > currentMonth || 
      (beforeMonth === currentMonth && lastDate.getDate() > currentDate.getDate())) {
      years--;
  }
  
  return years;
}