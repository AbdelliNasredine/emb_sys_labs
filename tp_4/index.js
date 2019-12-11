import express from "express";

const PORT = 8000;
const app = express();

app.set("json spaces", 2);
app.get("/", (req, res) => res.json({ msg: "hello word" }));

app.get("/weatherinfo", (req, res) => {
  res.json({
    weatherinformation: [
      {
        willaya: "bechar",
        temprature: 60,
        humidty: 7,
        position: {
          latitude: 1.04231313414,
          langitude: -0.842996368726387
        }
      },
      {
        willaya: "bechar",
        temprature: 60,
        humidty: 7,
        position: {
          latitude: 1.04231313414,
          langitude: -0.842996368726387
        }
      },
      {
        willaya: "bechar",
        temprature: 60,
        humidty: 7,
        position: {
          latitude: 1.04231313414,
          langitude: -0.842996368726387
        }
      }
    ]
  });
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
