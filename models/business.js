'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Business.init(
    {
      id: { 
        type: DataTypes.STRING,
        name: DataTypes.STRING,
        primaryKey: true
    },
      sequelize,
      modelName: 'Business',
      tableName: 'businesses'
    }
  )
  return Business
}
