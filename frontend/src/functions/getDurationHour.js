const getDurationHour = duration => {
  const minutos = duration * 30;
  let horas = Math.floor(minutos / 60); // Obtener la parte entera de las horas
  let minutosRestantes = minutos % 60; // Obtener los minutos restantes
  return horas + ' horas y ' + minutosRestantes + ' minutos'; 
};

export default getDurationHour;
