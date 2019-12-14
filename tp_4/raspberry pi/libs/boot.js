module.exports = app => {
  app.db.sequelize.sync().done(() => {
    app.listen(app.get("port"), () => {
      console.log(`API starting on localhost:${app.get("port")}`);
    });
  });
};
