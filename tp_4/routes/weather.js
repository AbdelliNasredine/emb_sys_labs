module.exports = app => {
  const Weather = app.models.weather;
  app.get("/weatherinfo", (req, res) => {
    Weather.getAllInformation(info => {
      res.json(info);
    });
  });
};
