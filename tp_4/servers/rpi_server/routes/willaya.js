module.exports = app => {
  const willayas = require("../libs/cities");

  // get al the willayas list with thier geo cords
  app.get("/wilaya/all", (req, res) => {
    console.log(`/wilaya/all: HTTP - GET from ${req.ip}`);
    return res.json({ status: "succes", data: willayas})
  });

  // get a specific willaya by code 
  app.get("/wilaya/:name", (req, res) => {
    const code = req.param("name");
    const willaya = willayas.filter((w) => w.name == name);
    if(willaya.length) return res.json({ status: "succes", data: willaya});
    return res.json({ status: "Error", msg: `Couldn't find willaya with name = ${code}`});
  });
}