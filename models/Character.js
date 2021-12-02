const {Model, DataTypes} = require("sequelize");
const sequelize = require('../assets/config/connection');

class Character extends Model {}

// define table columns and configuration
Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    universe_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'universe',
        key: 'id'
      }
    },
    alignment_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'alignment',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'character'
  }
);

module.exports = Character;