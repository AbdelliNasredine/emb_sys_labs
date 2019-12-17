module.exports = app => {
  const info = {
    msg: "hello MSIR / All Students!",
    description:
      "Now you running the API, go to localhost:8000/show"+
      " to see what is inside the database, enjoy !"
  };
  app.get("/", (req, res) => res.json(info));
};
