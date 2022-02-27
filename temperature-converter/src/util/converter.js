const convertCelciusToFarenheit = (temperature) => {
  return ((temperature * 9) / 5 + 32).toFixed(2);
};

const convertFarenheitToCelcius = (temperature) => {
  return (((temperature - 32) * 5) / 9).toFixed(2);
};

export { convertCelciusToFarenheit, convertFarenheitToCelcius };
