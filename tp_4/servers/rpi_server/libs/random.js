const cities = require("../libs/cities.js");
const _u = (nb) =>  Math.floor(Math.random() * nb);

module.exports = {
  willaya: () => cities[_u(cities.length)].name,
  temperature: () => _u(60),
  wind: () => _u(40),
  pressure: () => _u(1600),
  humidity: () => _u(100),
}