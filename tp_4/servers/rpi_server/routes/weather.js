module.exports = app => {
  // weather model (weather_info table)
  const Weather = app.db.models.Weather;
  const cities = require("../libs/cities.js");
  const random = require("../libs/random.js");

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
        };
      });
      res.json(weatherinfo);
    });
  });

  // /gen/:number route is used to gerenate
  // random weather information
  app.get("/gen/:number", (req, res) => {
    let number = req.param("number");
    if (number < 0)
      res.json({
        err: "wrong parameter",
        description: `${number} is negative, it should be positive`
      });
    else {
      while (number > 0) {
        Weather.create({
          willaya: random.willaya(),
          temp: random.temperature(),
          wind: random.wind()
        }).then(winfo => {
          console.log(`new weather_data added with id ${winfo.id}`);
        });
        number--;
      }
      res.redirect("/show");
    }
  });

  // /delete/all route is to delete all the data
  // found in database
  app.get("/delete/all", (req, res) => {
    Weather.destroy({truncate: true}).then(nb => {
      res.json({msg: `${nb} record${nb != 0 ? "s" : ""} destroyed`});
    });
  });
};
