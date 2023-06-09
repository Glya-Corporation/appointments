const getDuration = duration => {
  console.log(duration)
  let value = 0;
  const hour = parseInt(duration.split(':')[0]);
  const minute = parseInt(duration.split(':')[1]);

  for (let i = 0; i < hour; i++) {
    value += 2;
  }

  if (minute === 30) value += 1;

  return value;
};

export default getDuration;
