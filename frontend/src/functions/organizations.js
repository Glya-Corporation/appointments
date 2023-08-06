const sortByTime = (a, b) => {
  const timeA = a.dateTime.time;
  const timeB = b.dateTime.time;
  return timeA.localeCompare(timeB);
};

export default sortByTime;
