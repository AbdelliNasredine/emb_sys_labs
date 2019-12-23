const cities = require("../libs/cities.js");
const _r = (nb) =>  Math.floor(Math.random() * nb);

module.exports = {
  willaya: () => cities[_r(cities.length)].name,
  temperature: () => _r(60),
  wind: () => _r(100),
  humidity: () => _r(1),
  humidity: () => _r(1),
}