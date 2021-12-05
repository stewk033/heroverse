const {Model, DataTypes} = require("sequelize");
const sequelize = require('../assets/config/connection');

class Alignment extends Model {}

// define table columns and configuration
Alignment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    alignment_type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'alignment'
  }
);

module.exports = Alignment;