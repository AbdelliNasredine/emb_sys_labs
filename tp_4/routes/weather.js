module.exports = app => {
  const Weather = app.db.models.Weather;
  app.get("/weatherinfo", (req, res) => {
    Weather.findAll({}).then(winfo => { 
      res.json({weatherinformation: winfo});
    });
  });
};
