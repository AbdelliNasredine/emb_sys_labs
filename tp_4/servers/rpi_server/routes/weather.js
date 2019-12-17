module.exports = app => {
  // weather model (weather_info table)
  const Weather = app.db.models.Weather;
  const cities = require("../libs/cities.js");

  // /show is used to see the sqlite
  // database(weather info table)
  app.get("/show", (req, res) => {
    Weather.findAll({}).then(winfo => {
      const willaya = cities[0];
      const position = {
        latitude: willaya.lat,
        longitude: willaya.lon
      };
      const weatherinfo = winfo.map(station => {
        return {
          station,
          position
        }
      });
      res.json(weatherinfo);
    });
  });

  // /gen/:number route is used to gerenate
  // random weather information
  app.get("/gen/:number", (req, res) => {
    let number = req.param("number");
    console.log(number);
    while (number > 0) {
      Weather.create({
        willaya: cities[0].name,
        temp: Math.floor(Math.random() * 60),
        wind: Math.floor(Math.random() * 100)
      }).then(winfo => {
        console.log(`new weather info added with id ${winfo.id}`);
      });
      number--;
    }
    res.redirect("/show");
  });
};
