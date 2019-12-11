module.exports = app => {
  return {
    getAllInformation: callback => {
      return callback({
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
    }
  };
};
