module.exports = (sequelize, DataType) => {
  const Weather = sequelize.define("Weather", {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    willaya: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    temp: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    wind: {
      type: DataType.INTEGER,
      allowNull: false,
    }
  });
  return Weather;
};
