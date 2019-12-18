import cors from "cors";

module.exports = app => {
  app.set("port", 8000);
  app.set("json spaces", 2);
  app.use(cors());
};
