const {Model, DataTypes} = require("sequelize");
const sequelize = require('../assets/config/connection');

class Universe extends Model {}

// define table columns and configuration
Universe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    universe_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'universe'
  }
);

module.exports = Universe;