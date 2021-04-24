const formatDate = (timestamp) => {
  let date = null;
  if (timestamp) {
    date = new Date(timestamp);
    return `${date.getDay()}.${date.getMonth()}.${date.getYear()}`;
  }
  return date;
};

export default formatDate;
