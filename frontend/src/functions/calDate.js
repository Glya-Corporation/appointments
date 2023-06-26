const calDate = (valor1, valor2, operation) => {
  console.log(valor1, valor2, operation);
  const [hour1, minute1] = valor1.split(':').map(Number);
  const [hour2, minute2] = valor2.split(':').map(Number);

  let hour = 0;
  let minute = 0;

  if (operation === '+') {
    hour = hour1 + hour2;
    minute = minute1 + minute2;

    if (minute >= 60) {
      hour += Math.floor(minute / 60);
      minute %= 60;
    }
  } else if (operation === '-') {
    hour = hour1 - hour2;
    minute = minute1 - minute2;

    if (minute < 0) {
      hour -= 1;
      minute += 60;
    }
  }

  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:00`;
};

export default calDate;
