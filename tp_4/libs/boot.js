module.exports = app => {
  app.listen(app.get("PORT"), () => {
    console.log(`API starting on localhost:${app.get("PORT")}`);
  })
}