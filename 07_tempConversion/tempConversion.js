const convertToCelsius = function(fahrenheit) {

  let cels = (fahrenheit - 32) * 0.5556;
  let rounded = Number(cels).toFixed(1);
  let result = parseFloat(rounded);

  return result;

};

const convertToFahrenheit = function(celsius) {

  let fahr = (celsius * 1.8) + 32;
  let rounded = Number(fahr).toFixed(1);
  let result = parseFloat(rounded);

  return result;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
