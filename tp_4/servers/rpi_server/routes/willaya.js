module.exports = app => {
  const willayas = require("../libs/cities");

  // get al the willayas list with thier geo cords
  app.get("/wilaya/all", (req, res) => {
    console.log(`/wilaya/all: HTTP - GET from ${req.ip}`);
    return res.json({ status: "succes", data: willayas})
  });

  // get a specific willaya by code 
  app.get("/wilaya/:code", (req, res) => {
    const code = req.param("code");
    const willaya = willayas.filter((w) => w.code == code);
    if(willaya.length) return res.json({ status: "succes", data: willaya});
    return res.json({ status: "Error", msg: `Couldn't find willaya with code = ${code}`});
  });
}