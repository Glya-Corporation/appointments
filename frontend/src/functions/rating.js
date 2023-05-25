const sortRating = array => {
  // Crear una copia del arreglo
  const newArray = [...array];

  return newArray.sort((a, b) => {
    if (a.rating < b.rating) {
      return 1;
    }
    if (a.rating > b.rating) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
};

export default sortRating;
