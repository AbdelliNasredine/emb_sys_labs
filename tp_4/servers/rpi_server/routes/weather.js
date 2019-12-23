module.exports = app => {
  // weather model (weather_info table)
  const Weather = app.db.models.Weather;
  const willayas = require("../libs/cities.js");
  const random = require("../libs/random.js");
  const getW = name => willayas.filter(w => w.name == name)[0];
  const sendWInfo = (winfo, res, onErr) => {
    if (winfo.length == 0) res.json(onErr);
    else {
      const weatherinfo = winfo.map(s => {
        return {
          willaya: s.willaya,
          temperature: s.temp,
          wind: s.wind,
          pressure: s.pressure,
          humidity: s.humidity,
          latitude: getW(s.willaya).lat,
          longitude: getW(s.willaya).lon
        };
      });
      res.json(weatherinfo);
    }
  };

  // /show is used to see the sqlite
  // database(weather info table)
  app.get("/show", (req, res) => {
    const onErr = {
      status: "database is empty",
      msg:
        "to generate new data, you may go tp /gen/{number}" +
        "to generate {number} random records"
    };
    Weather.findAll({}).then(winfo => sendWInfo(winfo, res, onErr));
  });

  // /show/:w get specifique weather
  // data about [w:willaya]
  app.get("/show/:w", (req, res) => {
    const willaya = req.param("w");
    const onErr = {
      status: "404 not found",
      msg: `weatherdata of ${willaya} not found`
    };
    Weather.findAll({ where: { willaya: willaya } }).then(winfo =>
      sendWInfo(winfo, res, onErr)
    );
  });

  // /gen/:number route is used to gerenate
  // random weather information
  app.get("/gen/:number", (req, res) => {
    let number = req.param("number");
    if (number <= 0)
      res.json({
        err: "wrong parameter",
        description: `${number} is negative or zero, it should be positive`
      });
    else {
      while (number > 0) {
        Weather.create({
          willaya: random.willaya(),
          temp: random.temperature(),
          wind: random.wind(),
          pressure: random.pressure(),
          humidity: random.humidity()
        }).then(winfo => {
          console.log(`new weather_data added with id ${winfo.id}`);
        });
        number--;
      }
      res.redirect("/show");
    }
  });

  // /delete/all route is to delete all the data
  // found in database, making it empty
  app.get("/delete/all", (req, res) => {
    Weather.destroy({ truncate: true }).then(nb => {
      res.json({
        status: `${nb} record${nb != 0 ? "s" : ""} destroyed`,
        msg:
          "to generate new data, you may go tp /gen/{number}" +
          "to generate {number} random records"
      });
    });
  });
};
