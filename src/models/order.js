'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    //   this.belongsTo(models.Customer,{
    //     foreignKey:'customer_id'
    //   });
    }
  }
  Order.init({
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    amount: {
        type: DataTypes.DECIMAL(3, 0),
        allowNull: true,
      },
  }, {
    sequelize,
    modelName: 'order',
    timestamps:false
  });
  return Order;
};