const setCategory = (s, a) => {
  const arrayEmpty = [];

  a.forEach(item => {
    s.forEach(itemA => {
      if (item.galery_appointment[0].serviceId === itemA.id) {
        const element = { ...item, service: itemA.category.name };
        arrayEmpty.push(element);
      }
    });
  });

  return arrayEmpty;
};

export default setCategory;